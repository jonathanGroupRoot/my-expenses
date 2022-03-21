"use strict";

exports.__esModule = true;
exports.refreshTokenRouter = void 0;

var _express = require("express");

var _RefreshTokenController = require("../../../../modules/user/useCases/refreshTokenUseCase/RefreshTokenController");

var _ensureAuthenticate = require("../middlewares/ensureAuthenticate");

const refreshTokenRouter = (0, _express.Router)();
exports.refreshTokenRouter = refreshTokenRouter;
const refreshTokenController = new _RefreshTokenController.RefreshTokenController();
refreshTokenRouter.post('/', _ensureAuthenticate.ensureAuthenticate, refreshTokenController.handle);