import { UserToken } from '../infra/prisma/entities/UserToken';

export interface IUserTokenRepository {
    save(userToken: UserToken): Promise<void>;
}
