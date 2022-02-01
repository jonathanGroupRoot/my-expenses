import { Despenses } from '../infra/prisma/entities/Despenses';

export interface IDespensesRepository {
    save(despenses: Despenses): Promise<void>;
    get(): Promise<Despenses[]>;
    updateDespenses({
        id,
        name,
        categorie,
        description,
        due_date,
        value,
        repetitions,
        status,
    }: Despenses): Promise<void>;
    deleteDespenses(id: string): Promise<void>;
    findByIdDespenses(id: string): Promise<Despenses>;
}
