import { inject, injectable } from 'tsyringe';

import { Despenses } from '@modules/expenses/infra/prisma/entities/Despenses';
import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';

@injectable()
export class ListDespenseUseCase {
    constructor(
        @inject('DespensesRepository')
        private despenseRepository: IDespensesRepository,
    ) {}

    async execute(): Promise<Despenses[]> {
        const despense = await this.despenseRepository.get();
        return despense;
    }
}
