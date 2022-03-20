"use strict";

exports.__esModule = true;
exports.DeleteDespenseController = void 0;

var _tsyringe = require("tsyringe");

var _DeleteDespenseUseCase = require("./DeleteDespenseUseCase");

class DeleteDespenseController {
  async handle(request, response) {
    const {
      id
    } = request.params;

    const deleteDespenses = _tsyringe.container.resolve(_DeleteDespenseUseCase.DeleteDespenseUseCase);

    await deleteDespenses.execute(id);
    return response.status(204).send();
  }

}

exports.DeleteDespenseController = DeleteDespenseController;