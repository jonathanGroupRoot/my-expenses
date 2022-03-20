"use strict";

exports.__esModule = true;
exports.ensureAuthenticate = ensureAuthenticate;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../../config/auth"));

var _AppError = require("../../../errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function ensureAuthenticate(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.AppError('token does not exist');
  }

  const [, token] = authHeader.split(' ');

  try {
    const {
      sub: user_Id
    } = (0, _jsonwebtoken.verify)(token, _auth.default.secret_token);
    request.user = {
      id: user_Id
    };
    next();
  } catch (error) {
    throw new _AppError.AppError('invalid token', 401);
  }
}