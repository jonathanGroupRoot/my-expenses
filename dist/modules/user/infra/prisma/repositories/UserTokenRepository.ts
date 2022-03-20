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

    async findByUserInRefreshToken(
        refresh_token: string,
        id_user: string,
    ): Promise<UserToken> {
        return prisma.usersToken.findFirst({
            where: {
                refresh_token,
                id_user,
            },
        });
    }

    async deleteById(id: string): Promise<void> {
        await prisma.usersToken.delete({
            where: {
                id,
            },
        });
    }
}
