import { UserToken } from '../infra/prisma/entities/UserToken';

export interface IUserTokenRepository {
    save(userToken: UserToken): Promise<void>;
    findByUserInRefreshToken(
        token: string,
        id_user: string,
    ): Promise<UserToken>;
    deleteById(id: string): Promise<void>;
}
