"use strict";

require("reflect-metadata");

var _UserRepositoryInMemory = require("../../repositories/in-memory/UserRepositoryInMemory");

var _AppError = require("../../../../shared/errors/AppError");

var _CreateUserUseCase = require("./CreateUserUseCase");

let createUserRepositoryInMemory;
let createUserUseCase;
describe('Create User', () => {
  beforeEach(() => {
    createUserRepositoryInMemory = new _UserRepositoryInMemory.UserRepositoryInMemory();
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(createUserRepositoryInMemory);
  });
  it('should be able create user', async () => {
    const user = {
      name: 'Jonathan Vinicius',
      email: 'jonathangrouproot',
      password: '121'
    };
    await createUserUseCase.createUser(user);
    expect(createUserRepositoryInMemory.save).toBeDefined();
    expect(createUserUseCase.createUser).toBeDefined();
  });
  it('should not be able to create already existing user', async () => {
    const user = {
      name: 'Jonathan Vinicius',
      email: 'jonathangrouproot',
      password: '121'
    };
    await createUserUseCase.createUser(user);
    await expect(createUserUseCase.createUser(user)).rejects.toEqual(new _AppError.AppError('user already exists'));
  });
});