"use strict";

exports.__esModule = true;
exports.UpdateDespenseUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IDespenses = require("../../repositories/IDespenses");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let UpdateDespenseUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('DespensesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IDespenses.IDespensesRepository === "undefined" ? Object : _IDespenses.IDespensesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateDespenseUseCase {
  constructor(despensesRepository) {
    this.despensesRepository = despensesRepository;
  }

  async execute({
    id,
    id_user,
    name,
    categorie,
    description,
    due_date,
    value,
    repetitions
  }) {
    const despense = await this.despensesRepository.findByIdDespenses(id);

    if (!despense) {
      throw new _AppError.AppError('despenses does not exists');
    }

    await this.despensesRepository.updateDespenses({
      id,
      id_user,
      name,
      categorie,
      description,
      due_date,
      value,
      repetitions
    });
  }

}) || _class) || _class) || _class) || _class);
exports.UpdateDespenseUseCase = UpdateDespenseUseCase;