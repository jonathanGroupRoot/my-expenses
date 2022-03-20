"use strict";

exports.__esModule = true;
exports.DeleteUserUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IUserRepository = require("../../repositories/IUserRepository");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let DeleteUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new _AppError.AppError('user does not exists');
    }

    await this.userRepository.deleteUser(id);
  }

}) || _class) || _class) || _class) || _class);
exports.DeleteUserUseCase = DeleteUserUseCase;