import { Router } from 'express';

import { CreateUserController } from '@modules/user/useCases/createUser/CreateUserController';
import { ListUserController } from '@modules/user/useCases/listUser/ListUserController';

const createUserRouter = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();

createUserRouter.post('/', createUserController.handle);
createUserRouter.get('/', listUserController.handle);

export { createUserRouter };
