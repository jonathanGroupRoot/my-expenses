"use strict";

exports.__esModule = true;
exports.CreateDespenseUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IDespenses = require("../../repositories/IDespenses");

var _IDateProvider = require("../../../../shared/container/providers/DateProvider/IDateProvider");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateDespenseUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('DespensesRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('DayjsDateProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IDespenses.IDespensesRepository === "undefined" ? Object : _IDespenses.IDespensesRepository, typeof _IDateProvider.IDateProvider === "undefined" ? Object : _IDateProvider.IDateProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateDespenseUseCase {
  constructor(despenseRepository, dateProvider) {
    this.despenseRepository = despenseRepository;
    this.dateProvider = dateProvider;
  }

  async execute({
    name,
    categorie,
    description,
    due_date,
    value,
    repetitions,
    status,
    id_user
  }) {
    if (!repetitions) {
      await this.despenseRepository.save({
        name,
        categorie,
        description,
        due_date,
        value,
        repetitions,
        status,
        id_user
      });
    }

    for (let interations = 0; interations < repetitions; interations += 1) {
      const alter_date = this.dateProvider.addMonth(interations);
      this.despenseRepository.save({
        name,
        categorie,
        description,
        due_date: alter_date,
        value,
        repetitions,
        status,
        id_user
      });
    }
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateDespenseUseCase = CreateDespenseUseCase;