import 'reflect-metadata';
import { v4 } from 'uuid';

import { UserRepositoryInMemory } from '@modules/user/repositories/in-memory/UserRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { UserFindByIdUseCase } from '../findById/UserFindByIdUseCase';
import { DeleteUserUseCase } from './DeleteUserUseCase';

let userRepositoryInMemory: UserRepositoryInMemory;
let deleteUserUseCase: DeleteUserUseCase;
let createUserUseCase: CreateUserUseCase;
let userFindByUseCase: UserFindByIdUseCase;

describe('delete user', () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        deleteUserUseCase = new DeleteUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
        userFindByUseCase = new UserFindByIdUseCase(userRepositoryInMemory);
    });

    it('should be able delete user', async () => {
        const user = {
            id: v4(),
            name: 'jonathan',
            email: 'jojsa',
            password: '22',
        };

        const test = await createUserUseCase.createUser(user);
        console.log(test);
    });

    it('should not be able delete user already existings', async () => {
        await expect(deleteUserUseCase.execute('90')).rejects.toEqual(
            new AppError('user does not exists'),
        );
    });
});
