import { IUserTokenRepository } from '@modules/user/repositories/IUserTokenRepository';
import { PrismaClient } from '@prisma/client';

import { UserToken } from '../entities/UserToken';

const prisma = new PrismaClient();

export class UserTokenRepository implements IUserTokenRepository {
    async save({
        expires_date,
        refresh_token,
        id_user,
    }: UserToken): Promise<void> {
        await prisma.usersToken.create({
            data: {
                expires_date,
                refresh_token,
                id_user,
            },
        });
    }
}
