import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { PrismaClient } from '@prisma/client';

import { User } from '../entities/User';

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
    async save({ name, email, password }: User): Promise<void> {
        await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
    }

    async getUser(): Promise<User[]> {
        return prisma.user.findMany();
    }

    async findUserByEmail(email: string): Promise<User> {
        const result = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        return result;
    }
}
