"use strict";

exports.__esModule = true;
exports.ListDespenseController = void 0;

var _tsyringe = require("tsyringe");

var _ListDespenseUseCase = require("./ListDespenseUseCase");

class ListDespenseController {
  async handle(request, response) {
    const listDespense = _tsyringe.container.resolve(_ListDespenseUseCase.ListDespenseUseCase);

    const despense = await listDespense.execute();
    return response.json(despense);
  }

}

exports.ListDespenseController = ListDespenseController;