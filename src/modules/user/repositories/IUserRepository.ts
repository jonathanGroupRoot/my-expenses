import { User } from '../infra/prisma/entities/User';

export interface IUserRepository {
    save(user: User): Promise<void>;
    getUser(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User>;
}
