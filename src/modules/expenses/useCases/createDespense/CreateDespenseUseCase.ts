import { inject, injectable } from 'tsyringe';

import { Despenses } from '@modules/expenses/infra/prisma/entities/Despenses';
import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';

@injectable()
export class CreateDespenseUseCase {
    constructor(
        @inject('DespensesRepository')
        private despenseRepository: IDespensesRepository,
    ) {}

    async execute({
        name,
        categorie,
        description,
        due_date,
        value,
        repetitions,
        status,
        id_user,
    }: Despenses): Promise<void> {
        await this.despenseRepository.save({
            name,
            categorie,
            description,
            due_date,
            value,
            repetitions,
            status,
            id_user,
        });
    }
}
