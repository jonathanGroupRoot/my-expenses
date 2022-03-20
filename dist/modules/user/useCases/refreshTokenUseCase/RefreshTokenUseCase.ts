import { sign, verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUserTokenRepository } from '@modules/user/repositories/IUserTokenRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
    sub: string;
    email: string;
}

interface IRefreshTokenResponse {
    refreshToken: string;
    token: string;
}

@injectable()
export class RefreshTokenUseCase {
    constructor(
        @inject('UserTokenRepository')
        private userTokenRepository: IUserTokenRepository,
        @inject('DayjsDateProvider')
        private dateProvider: IDateProvider,
    ) {}

    async execute(token: string): Promise<IRefreshTokenResponse> {
        const {
            secret_refresh_token,
            expires_refresh_token_days,
            expires_in_token,
            secret_token,
        } = auth;

        const { sub, email } = verify(token, secret_refresh_token) as IPayload;

        const user_id = sub;

        const userToken =
            await this.userTokenRepository.findByUserInRefreshToken(
                token,
                user_id,
            );

        if (!userToken) {
            throw new AppError('refresh token not exists');
        }

        await this.userTokenRepository.deleteById(userToken.id);

        const refreshToken = sign({ email }, secret_refresh_token, {
            subject: userToken.id_user,
            expiresIn: expires_in_token,
        });

        const add_days_refresh_token = this.dateProvider.addDays(
            expires_refresh_token_days,
        );

        await this.userTokenRepository.save({
            expires_date: add_days_refresh_token,
            refresh_token: refreshToken,
            id_user: user_id,
        });

        const newToken = sign({}, secret_token, {
            subject: userToken.id_user,
            expiresIn: expires_in_token,
        });

        return {
            refreshToken,
            token: newToken,
        };
    }
}
