import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateDespenseUseCase } from './UpdateDespenseUseCase';

export class UpdateDespenseControlelr {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: id_user } = request.user;
        const { id: id_despense } = request.params;

        const { name, categorie, description, due_date, value, repetitions } =
            request.body;

        const updateDespense = container.resolve(UpdateDespenseUseCase);

        await updateDespense.execute({
            id: id_despense,
            id_user,
            name,
            categorie,
            description,
            due_date,
            value,
            repetitions,
        });

        return response.status(204).send();
    }
}
