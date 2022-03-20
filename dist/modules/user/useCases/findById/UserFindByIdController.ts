import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UserFindByIdUseCase } from './UserFindByIdUseCase';

export class UserFindByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const userFindById = container.resolve(UserFindByIdUseCase);

        const user = await userFindById.execute(id);

        return response.json(user);
    }
}
