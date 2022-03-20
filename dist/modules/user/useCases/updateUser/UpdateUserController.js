"use strict";

exports.__esModule = true;
exports.UpdateUserController = void 0;

var _tsyringe = require("tsyringe");

var _UpdateUserUseCase = require("./UpdateUserUseCase");

class UpdateUserController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const {
      name,
      email,
      password
    } = request.body;

    const updateUserUseCase = _tsyringe.container.resolve(_UpdateUserUseCase.UpdateUserUseCase);

    await updateUserUseCase.execute({
      id,
      name,
      email,
      password
    });
    return response.status(204).send();
  }

}

exports.UpdateUserController = UpdateUserController;