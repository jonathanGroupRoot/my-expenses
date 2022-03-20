"use strict";

require("reflect-metadata");

var _uuid = require("uuid");

var _UserRepositoryInMemory = require("../../repositories/in-memory/UserRepositoryInMemory");

var _AppError = require("../../../../shared/errors/AppError");

var _CreateUserUseCase = require("../createUser/CreateUserUseCase");

var _UserFindByIdUseCase = require("../findById/UserFindByIdUseCase");

var _DeleteUserUseCase = require("./DeleteUserUseCase");

let userRepositoryInMemory;
let deleteUserUseCase;
let createUserUseCase;
let userFindByUseCase;
describe('delete user', () => {
  beforeEach(() => {
    userRepositoryInMemory = new _UserRepositoryInMemory.UserRepositoryInMemory();
    deleteUserUseCase = new _DeleteUserUseCase.DeleteUserUseCase(userRepositoryInMemory);
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(userRepositoryInMemory);
    userFindByUseCase = new _UserFindByIdUseCase.UserFindByIdUseCase(userRepositoryInMemory);
  });
  it('should be able delete user', async () => {
    const user = {
      id: (0, _uuid.v4)(),
      name: 'jonathan',
      email: 'jojsa',
      password: '22'
    };
    const test = await createUserUseCase.createUser(user);
    console.log(test);
  });
  it('should not be able delete user already existings', async () => {
    await expect(deleteUserUseCase.execute('90')).rejects.toEqual(new _AppError.AppError('user does not exists'));
  });
});