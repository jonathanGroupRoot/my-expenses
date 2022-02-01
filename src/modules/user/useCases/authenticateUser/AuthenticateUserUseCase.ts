import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { User } from '@modules/user/infra/prisma/entities/User';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

import auth from '../../../../../config/auth';

interface IResponseUser {
    user: {
        email: string;
    };
    token: string;
}

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({ email, password }: User): Promise<IResponseUser> {
        const users = await this.userRepository.findUserByEmail(email);

        if (!users) {
            throw new AppError('user or password incorrect');
        }

        const passwordMatch = await compare(password, users.password);

        if (!passwordMatch) {
            throw new AppError('user or password incorrect');
        }

        const token = sign({}, auth.SECRET_TOKEN, {
            subject: users.id,
            expiresIn: auth.EXPIRES_TOKEN,
        });

        const tokenReturn: IResponseUser = {
            user: {
                email: users.email,
            },
            token,
        };

        return tokenReturn;
    }
}
