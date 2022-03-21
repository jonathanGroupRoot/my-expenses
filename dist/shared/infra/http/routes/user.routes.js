"use strict";

exports.__esModule = true;
exports.userRouter = void 0;

var _express = require("express");

var _CreateUserController = require("../../../../modules/user/useCases/createUser/CreateUserController");

var _DeleteUserController = require("../../../../modules/user/useCases/deleteUser/DeleteUserController");

var _UserFindByIdController = require("../../../../modules/user/useCases/findById/UserFindByIdController");

var _ListUserController = require("../../../../modules/user/useCases/listUser/ListUserController");

var _UpdateUserController = require("../../../../modules/user/useCases/updateUser/UpdateUserController");

const userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
const createUserController = new _CreateUserController.CreateUserController();
const listUserController = new _ListUserController.ListUserController();
const deleteUserController = new _DeleteUserController.DeleteUserController();
const updateUserController = new _UpdateUserController.UpdateUserController();
const userFindByIdController = new _UserFindByIdController.UserFindByIdController();
userRouter.get('/', listUserController.handle);
userRouter.get('/find/:id', userFindByIdController.handle);
userRouter.post('/', createUserController.handle);
userRouter.put('/:id', updateUserController.handle);
userRouter.delete('/:id', deleteUserController.handle);