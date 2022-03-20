"use strict";

exports.__esModule = true;
exports.AuthenticateUserUseCase = void 0;

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _auth = _interopRequireDefault(require("../../../../config/auth"));

var _IUserRepository = require("../../repositories/IUserRepository");

var _IUserTokenRepository = require("../../repositories/IUserTokenRepository");

var _IDateProvider = require("../../../../shared/container/providers/DateProvider/IDateProvider");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AuthenticateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('DayjsDateProvider')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UserTokenRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository, typeof _IDateProvider.IDateProvider === "undefined" ? Object : _IDateProvider.IDateProvider, typeof _IUserTokenRepository.IUserTokenRepository === "undefined" ? Object : _IUserTokenRepository.IUserTokenRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class AuthenticateUserUseCase {
  constructor(userRepository, dateProvider, userTokenRepository) {
    this.userRepository = userRepository;
    this.dateProvider = dateProvider;
    this.userTokenRepository = userTokenRepository;
  }

  async execute({
    email,
    password
  }) {
    const users = await this.userRepository.findUserByEmail(email);
    const {
      expires_in_token,
      secret_token,
      secret_refresh_token,
      expires_in_refresh_token,
      expires_refresh_token_days
    } = _auth.default;

    if (!users) {
      throw new _AppError.AppError('user or password incorrect');
    }

    const passwordMatch = await (0, _bcrypt.compare)(password, users.password);

    if (!passwordMatch) {
      throw new _AppError.AppError('user or password incorrect');
    }

    const token = (0, _jsonwebtoken.sign)({}, secret_token, {
      subject: users.id,
      expiresIn: expires_in_token
    });
    const refresh_token = (0, _jsonwebtoken.sign)({
      email
    }, secret_refresh_token, {
      subject: users.id,
      expiresIn: expires_in_refresh_token
    });
    const refresh_token_expires_date = this.dateProvider.addDays(expires_refresh_token_days);
    await this.userTokenRepository.save({
      expires_date: refresh_token_expires_date,
      id_user: users.id,
      refresh_token
    });
    const tokenReturn = {
      user: {
        email: users.email
      },
      token,
      refresh_token
    };
    return tokenReturn;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;