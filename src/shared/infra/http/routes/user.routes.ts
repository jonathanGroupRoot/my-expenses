import { Router } from 'express';

import { CreateUserController } from '@modules/user/useCases/createUser/CreateUserController';
import { DeleteUserController } from '@modules/user/useCases/deleteUser/DeleteUserController';
import { ListUserController } from '@modules/user/useCases/listUser/ListUserController';

const createUserRouter = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();

createUserRouter.post('/', createUserController.handle);
createUserRouter.get('/', listUserController.handle);
createUserRouter.delete('/:id', deleteUserController.handle);

export { createUserRouter };
