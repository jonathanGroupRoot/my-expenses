import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';

@injectable()
export class UserFindByIdUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async execute(id: string) {
        const user = await this.userRepository.findById(id);
        console.log(user);

        return user;
    }
}
