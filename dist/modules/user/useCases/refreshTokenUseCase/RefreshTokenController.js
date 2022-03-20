"use strict";

exports.__esModule = true;
exports.RefreshTokenController = void 0;

var _tsyringe = require("tsyringe");

var _RefreshTokenUseCase = require("./RefreshTokenUseCase");

class RefreshTokenController {
  async handle(request, response) {
    const {
      token
    } = request.body;

    const refreshTokenUseCase = _tsyringe.container.resolve(_RefreshTokenUseCase.RefreshTokenUseCase);

    const refreshToken = await refreshTokenUseCase.execute(token);
    return response.json(refreshToken);
  }

}

exports.RefreshTokenController = RefreshTokenController;