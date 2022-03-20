"use strict";

exports.__esModule = true;
exports.RefreshTokenUseCase = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _auth = _interopRequireDefault(require("../../../../config/auth"));

var _IUserTokenRepository = require("../../repositories/IUserTokenRepository");

var _IDateProvider = require("../../../../shared/container/providers/DateProvider/IDateProvider");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RefreshTokenUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserTokenRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('DayjsDateProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUserTokenRepository.IUserTokenRepository === "undefined" ? Object : _IUserTokenRepository.IUserTokenRepository, typeof _IDateProvider.IDateProvider === "undefined" ? Object : _IDateProvider.IDateProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class RefreshTokenUseCase {
  constructor(userTokenRepository, dateProvider) {
    this.userTokenRepository = userTokenRepository;
    this.dateProvider = dateProvider;
  }

  async execute(token) {
    const {
      secret_refresh_token,
      expires_refresh_token_days,
      expires_in_token,
      secret_token
    } = _auth.default;
    const {
      sub,
      email
    } = (0, _jsonwebtoken.verify)(token, secret_refresh_token);
    const user_id = sub;
    const userToken = await this.userTokenRepository.findByUserInRefreshToken(token, user_id);

    if (!userToken) {
      throw new _AppError.AppError('refresh token not exists');
    }

    await this.userTokenRepository.deleteById(userToken.id);
    const refreshToken = (0, _jsonwebtoken.sign)({
      email
    }, secret_refresh_token, {
      subject: userToken.id_user,
      expiresIn: expires_in_token
    });
    const add_days_refresh_token = this.dateProvider.addDays(expires_refresh_token_days);
    await this.userTokenRepository.save({
      expires_date: add_days_refresh_token,
      refresh_token: refreshToken,
      id_user: user_id
    });
    const newToken = (0, _jsonwebtoken.sign)({}, secret_token, {
      subject: userToken.id_user,
      expiresIn: expires_in_token
    });
    return {
      refreshToken,
      token: newToken
    };
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.RefreshTokenUseCase = RefreshTokenUseCase;