import { inject, injectable } from 'tsyringe';

import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class DeleteDespenseUseCase {
    constructor(
        @inject('DespensesRepository')
        private despenseRepository: IDespensesRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const despense = await this.despenseRepository.findByIdDespenses(id);

        if (!despense) {
            throw new AppError('despenses does not exists');
        }

        await this.despenseRepository.deleteDespenses(id);
    }
}
