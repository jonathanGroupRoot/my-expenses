import { container } from 'tsyringe';
import '@shared/container/providers';

import { DespensesRepository } from '@modules/expenses/infra/prisma/repositories/DespensesRepository';
import { IDespensesRepository } from '@modules/expenses/repositories/IDespenses';
import { UserRepository } from '@modules/user/infra/prisma/repositories/UserRepository';
import { UserTokenRepository } from '@modules/user/infra/prisma/repositories/UserTokenRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IUserTokenRepository } from '@modules/user/repositories/IUserTokenRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IDespensesRepository>(
    'DespensesRepository',
    DespensesRepository,
);
container.registerSingleton<IUserTokenRepository>(
    'UserTokenRepository',
    UserTokenRepository,
);
