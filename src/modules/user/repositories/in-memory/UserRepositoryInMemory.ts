import { User } from '@modules/user/infra/prisma/entities/User';

import { IUserRepository } from '../IUserRepository';

export class UserRepositoryInMemory implements IUserRepository {
    users: User[] = [];
    async save({ name, email, password }: User): Promise<User> {
        const user = new User();
        Object.assign(user, {
            name,
            email,
            password,
        });
        this.users.push(user);

        return user;
    }

    async getUser(): Promise<User[]> {
        return this.users;
    }

    async findUserByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }

    async updateUser({ id, name, email, password }: User): Promise<void> {
        const user = this.users.findIndex(user => user.id === id);

        this.users[user].name = name;
        this.users[user].email = email;
        this.users[user].password = password;
    }

    async deleteUser(id: string): Promise<void> {
        const user = this.users.find(user => user.id === id);
        this.users.splice(this.users.indexOf(user));
    }

    async findById(id: string): Promise<User> {
        return this.users.find(user => user.id === id);
    }
}
