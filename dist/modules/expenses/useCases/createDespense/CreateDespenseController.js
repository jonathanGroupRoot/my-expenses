"use strict";

exports.__esModule = true;
exports.CreateDespenseController = void 0;

var _tsyringe = require("tsyringe");

var _CreateDespenseUseCase = require("./CreateDespenseUseCase");

class CreateDespenseController {
  async handle(request, response) {
    const {
      name,
      categorie,
      description,
      due_date,
      value,
      repetitions,
      status
    } = request.body;
    const {
      id_user
    } = request.params;

    const createDespense = _tsyringe.container.resolve(_CreateDespenseUseCase.CreateDespenseUseCase);

    await createDespense.execute({
      name,
      categorie,
      description,
      due_date,
      value,
      repetitions,
      status,
      id_user
    });
    return response.status(201).send();
  }

}

exports.CreateDespenseController = CreateDespenseController;