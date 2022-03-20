"use strict";

exports.__esModule = true;
exports.ListUserController = void 0;

var _tsyringe = require("tsyringe");

var _ListUserUseCase = require("./ListUserUseCase");

class ListUserController {
  async handle(request, response) {
    const listUserUseCase = _tsyringe.container.resolve(_ListUserUseCase.ListUserUseCase);

    const user = await listUserUseCase.execute();
    return response.status(200).json(user);
  }

}

exports.ListUserController = ListUserController;