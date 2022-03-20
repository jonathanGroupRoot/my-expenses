"use strict";

exports.__esModule = true;
exports.CreateUserController = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserUseCase = require("./CreateUserUseCase");

class CreateUserController {
  async handle(request, response) {
    const {
      name,
      email,
      password
    } = request.body;

    const createUserUseCase = _tsyringe.container.resolve(_CreateUserUseCase.CreateUserUseCase);

    await createUserUseCase.createUser({
      name,
      email,
      password
    });
    return response.status(201).send();
  }

}

exports.CreateUserController = CreateUserController;