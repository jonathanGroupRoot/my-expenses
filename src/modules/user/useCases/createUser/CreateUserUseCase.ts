import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { User } from '../../infra/prisma/entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async createUser({ name, email, password }: User): Promise<User> {
        const userExists = await this.userRepository.findUserByEmail(email);

        if (userExists) {
            throw new AppError('user already exists');
        }

        const passwordHash = await hash(password, 10);

        const user = await this.userRepository.save({
            name,
            email,
            password: passwordHash,
        });

        return user;
    }
}
