export class Despenses {
    id?: string;
    name: string;
    categorie: string;
    description?: string;
    due_date: Date;
    value: number;
    repetitions: number;
    status?: string;
    created_at?: Date;
    finish_status?: Date;
    id_user: string;
}
