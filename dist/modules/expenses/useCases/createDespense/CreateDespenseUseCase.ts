import { inject, injectable } from 'tsyringe';

import { Despenses } from '@modules/expenses/infra/prisma/entities/Despenses';
import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

@injectable()
export class CreateDespenseUseCase {
    constructor(
        @inject('DespensesRepository')
        private despenseRepository: IDespensesRepository,
        @inject('DayjsDateProvider')
        private dateProvider: IDateProvider,
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
        if (!repetitions) {
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

        for (let interations = 0; interations < repetitions; interations += 1) {
            const alter_date = this.dateProvider.addMonth(interations);
            this.despenseRepository.save({
                name,
                categorie,
                description,
                due_date: alter_date,
                value,
                repetitions,
                status,
                id_user,
            });
        }
    }
}
