import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError('user does not exists');
        }
        await this.userRepository.deleteUser(id);
    }
}
