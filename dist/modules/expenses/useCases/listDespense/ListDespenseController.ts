import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListDespenseUseCase } from './ListDespenseUseCase';

export class ListDespenseController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listDespense = container.resolve(ListDespenseUseCase);

        const despense = await listDespense.execute();

        return response.json(despense);
    }
}
