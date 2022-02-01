import { container } from 'tsyringe';

import { DespensesRepository } from '@modules/expenses/infra/prisma/repositories/DespensesRepository';
import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';
import { UserRepository } from '@modules/user/infra/prisma/repositories/UserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IDespensesRepository>(
    'DespensesRepository',
    DespensesRepository,
);
