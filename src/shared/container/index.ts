import { container } from 'tsyringe';

import { UserRepository } from '@modules/user/infra/prisma/repositories/UserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
