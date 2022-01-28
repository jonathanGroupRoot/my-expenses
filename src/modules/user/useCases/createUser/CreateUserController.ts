import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.createUser({ name, email, password });

        return response.status(201).send();
    }
}
