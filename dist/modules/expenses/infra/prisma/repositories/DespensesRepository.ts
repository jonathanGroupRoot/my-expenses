import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';
import { PrismaClient } from '@prisma/client';

import { Despenses } from '../entities/Despenses';

const prisma = new PrismaClient();
export class DespensesRepository implements IDespensesRepository {
    async save({
        name,
        categorie,
        description,
        due_date,
        value,
        repetitions,
        id_user,
    }: Despenses): Promise<void> {
        await prisma.despenses.create({
            data: {
                name,
                categorie,
                description,
                due_date,
                value,
                repetitions,
                id_user,
            },
        });
    }

    async get(): Promise<Despenses[]> {
        return prisma.despenses.findMany();
    }

    async updateDespenses({
        id,
        name,
        categorie,
        description,
        due_date,
        repetitions,
    }: Despenses): Promise<void> {
        await prisma.despenses.update({
            where: {
                id,
            },
            data: {
                name,
                categorie,
                description,
                due_date,
                repetitions,
            },
        });
    }

    async deleteDespenses(id: string): Promise<void> {
        await prisma.despenses.delete({
            where: {
                id,
            },
        });
    }

    async findByIdDespenses(id: string): Promise<Despenses> {
        return prisma.despenses.findFirst({
            where: {
                id,
            },
        });
    }
}
