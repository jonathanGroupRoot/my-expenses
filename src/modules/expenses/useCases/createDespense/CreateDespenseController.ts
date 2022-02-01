import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDespenseUseCase } from './CreateDespenseUseCase';

export class CreateDespenseController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            categorie,
            description,
            due_date,
            value,
            repetitions,
            status,
        } = request.body;

        const { id_user } = request.params;

        const createDespense = container.resolve(CreateDespenseUseCase);

        await createDespense.execute({
            name,
            categorie,
            description,
            due_date,
            value,
            repetitions,
            status,
            id_user,
        });

        return response.status(201).send();
    }
}
