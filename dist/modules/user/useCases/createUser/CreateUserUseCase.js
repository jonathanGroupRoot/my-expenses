"use strict";

exports.__esModule = true;
exports.CreateUserUseCase = void 0;

var _bcrypt = require("bcrypt");

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/errors/AppError");

var _IUserRepository = require("../../repositories/IUserRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser({
    name,
    email,
    password
  }) {
    const userExists = await this.userRepository.findUserByEmail(email);

    if (userExists) {
      throw new _AppError.AppError('user already exists');
    }

    const passwordHash = await (0, _bcrypt.hash)(password, 10);
    const user = await this.userRepository.save({
      name,
      email,
      password: passwordHash
    });
    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.CreateUserUseCase = CreateUserUseCase;