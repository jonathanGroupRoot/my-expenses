import { Router } from 'express';

import { CreateUserController } from '@modules/user/useCases/createUser/CreateUserController';
import { DeleteUserController } from '@modules/user/useCases/deleteUser/DeleteUserController';
import { UserFindByIdController } from '@modules/user/useCases/findById/UserFindByIdController';
import { ListUserController } from '@modules/user/useCases/listUser/ListUserController';
import { UpdateUserController } from '@modules/user/useCases/updateUser/UpdateUserController';

const userRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const userFindByIdController = new UserFindByIdController();

userRouter.get('/', listUserController.handle);
userRouter.get('/find/:id', userFindByIdController.handle);
userRouter.post('/', createUserController.handle);
userRouter.put('/:id', updateUserController.handle);
userRouter.delete('/:id', deleteUserController.handle);

export { userRouter };
