import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteDespenseUseCase } from './DeleteDespenseUseCase';

export class DeleteDespenseController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteDespenses = container.resolve(DeleteDespenseUseCase);

        await deleteDespenses.execute(id);

        return response.status(204).send();
    }
}
