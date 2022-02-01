import { inject, injectable } from 'tsyringe';

import { Despenses } from '@modules/expenses/infra/prisma/entities/Despenses';
import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class UpdateDespenseUseCase {
    constructor(
        @inject('DespensesRepository')
        private despensesRepository: IDespensesRepository,
    ) {}
    async execute({
        id,
        id_user,
        name,
        categorie,
        description,
        due_date,
        value,
        repetitions,
    }: Despenses): Promise<void> {
        const despense = await this.despensesRepository.findByIdDespenses(id);

        if (!despense) {
            throw new AppError('despenses does not exists');
        }

        await this.despensesRepository.updateDespenses({
            id,
            id_user,
            name,
            categorie,
            description,
            due_date,
            value,
            repetitions,
        });
    }
}
