import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { User } from '@modules/user/infra/prisma/entities/User';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IUserTokenRepository } from '@modules/user/repositories/IUserTokenRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';

interface IResponseUser {
    user: {
        email: string;
    };
    token: string;
    refresh_token: string;
}

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('DayjsDateProvider')
        private dateProvider: IDateProvider,
        @inject('UserTokenRepository')
        private userTokenRepository: IUserTokenRepository,
    ) {}

    async execute({ email, password }: User): Promise<IResponseUser> {
        const users = await this.userRepository.findUserByEmail(email);

        const {
            expires_in_token,
            secret_token,
            secret_refresh_token,
            expires_in_refresh_token,
            expires_refresh_token_days,
        } = auth;

        if (!users) {
            throw new AppError('user or password incorrect');
        }

        const passwordMatch = await compare(password, users.password);

        if (!passwordMatch) {
            throw new AppError('user or password incorrect');
        }

        const token = sign({}, secret_token, {
            subject: users.id,
            expiresIn: expires_in_token,
        });
        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: users.id,
            expiresIn: expires_in_refresh_token,
        });

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days,
        );
        console.log(refresh_token_expires_date);

        await this.userTokenRepository.save({
            expires_date: refresh_token_expires_date,
            id_user: users.id,
            refresh_token: token,
        });

        const tokenReturn: IResponseUser = {
            user: {
                email: users.email,
            },
            token,
            refresh_token,
        };

        return tokenReturn;
    }
}
