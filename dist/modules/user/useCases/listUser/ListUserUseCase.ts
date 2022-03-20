import { inject, injectable } from 'tsyringe';

import { User } from '@modules/user/infra/prisma/entities/User';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

@injectable()
export class ListUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute(): Promise<User[]> {
        const user = await this.userRepository.getUser();
        return user;
    }
}
