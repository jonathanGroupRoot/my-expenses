import 'reflect-metadata';
import { UserRepositoryInMemory } from '@modules/user/repositories/in-memory/UserRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from './CreateUserUseCase';

let createUserRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
    beforeEach(() => {
        createUserRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(createUserRepositoryInMemory);
    });

    it('should be able create user', async () => {
        const user = {
            name: 'Jonathan Vinicius',
            email: 'jonathangrouproot',
            password: '121',
        };

        await createUserUseCase.createUser(user);

        expect(createUserRepositoryInMemory.save).toBeDefined();
        expect(createUserUseCase.createUser).toBeDefined();
    });

    it('should not be able to create already existing user', async () => {
        const user = {
            name: 'Jonathan Vinicius',
            email: 'jonathangrouproot',
            password: '121',
        };

        await createUserUseCase.createUser(user);
        await expect(createUserUseCase.createUser(user)).rejects.toEqual(
            new AppError('user already exists'),
        );
    });
});
