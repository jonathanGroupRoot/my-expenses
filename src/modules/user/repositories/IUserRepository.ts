import { User } from '../infra/prisma/entities/User';

export interface IUserRepository {
    save(user: User): Promise<User>;
    getUser(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User>;
    updateUser(user: User): Promise<void>;
    deleteUser(id: string): Promise<void>;
    findById(id: string): Promise<User>;
}
