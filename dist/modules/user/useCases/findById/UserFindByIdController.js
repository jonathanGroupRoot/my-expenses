"use strict";

exports.__esModule = true;
exports.UserFindByIdController = void 0;

var _tsyringe = require("tsyringe");

var _UserFindByIdUseCase = require("./UserFindByIdUseCase");

class UserFindByIdController {
  async handle(request, response) {
    const {
      id
    } = request.params;

    const userFindById = _tsyringe.container.resolve(_UserFindByIdUseCase.UserFindByIdUseCase);

    const user = await userFindById.execute(id);
    return response.json(user);
  }

}

exports.UserFindByIdController = UserFindByIdController;