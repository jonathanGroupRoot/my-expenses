"use strict";

exports.__esModule = true;
exports.AuthenticateUserController = void 0;

var _tsyringe = require("tsyringe");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

class AuthenticateUserController {
  async handle(request, response) {
    const {
      email,
      password
    } = request.body;

    const authenticateUser = _tsyringe.container.resolve(_AuthenticateUserUseCase.AuthenticateUserUseCase);

    const user = await authenticateUser.execute({
      email,
      password
    });
    return response.json(user);
  }

}

exports.AuthenticateUserController = AuthenticateUserController;