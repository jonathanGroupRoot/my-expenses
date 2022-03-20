import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { User } from '@modules/user/infra/prisma/entities/User';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class UpdateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute({ id, name, email, password }: User): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError('user does not exits');
        }

        const passwordHash = await hash(password, 10);

        await this.userRepository.updateUser({
            id,
            name,
            email,
            password: passwordHash,
        });
    }
}
