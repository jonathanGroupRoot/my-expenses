"use strict";

exports.__esModule = true;
exports.ListDespenseUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IDespenses = require("../../repositories/IDespenses");

var _dec, _dec2, _dec3, _dec4, _class;

let ListDespenseUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('DespensesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IDespenses.IDespensesRepository === "undefined" ? Object : _IDespenses.IDespensesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListDespenseUseCase {
  constructor(despenseRepository) {
    this.despenseRepository = despenseRepository;
  }

  async execute() {
    const despense = await this.despenseRepository.get();
    return despense;
  }

}) || _class) || _class) || _class) || _class);
exports.ListDespenseUseCase = ListDespenseUseCase;