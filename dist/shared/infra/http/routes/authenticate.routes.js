"use strict";

exports.__esModule = true;
exports.authenticateRouter = void 0;

var _express = require("express");

var _AuthenticateUserController = require("../../../../modules/user/useCases/authenticateUser/AuthenticateUserController");

const authenticateRouter = (0, _express.Router)();
exports.authenticateRouter = authenticateRouter;
const authenticateUserController = new _AuthenticateUserController.AuthenticateUserController();
authenticateRouter.post('/', authenticateUserController.handle);