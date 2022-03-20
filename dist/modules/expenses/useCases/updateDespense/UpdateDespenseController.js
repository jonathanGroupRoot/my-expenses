"use strict";

exports.__esModule = true;
exports.UpdateDespenseControlelr = void 0;

var _tsyringe = require("tsyringe");

var _UpdateDespenseUseCase = require("./UpdateDespenseUseCase");

class UpdateDespenseControlelr {
  async handle(request, response) {
    const {
      id: id_user
    } = request.user;
    const {
      id: id_despense
    } = request.params;
    const {
      name,
      categorie,
      description,
      due_date,
      value,
      repetitions
    } = request.body;

    const updateDespense = _tsyringe.container.resolve(_UpdateDespenseUseCase.UpdateDespenseUseCase);

    await updateDespense.execute({
      id: id_despense,
      id_user,
      name,
      categorie,
      description,
      due_date,
      value,
      repetitions
    });
    return response.status(204).send();
  }

}

exports.UpdateDespenseControlelr = UpdateDespenseControlelr;