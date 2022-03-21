"use strict";

exports.__esModule = true;
exports.router = void 0;

var _express = require("express");

var _authenticate = require("./authenticate.routes");

var _despenses = require("./despenses.routes");

var _refreshToken = require("./refreshToken.routes");

var _user = require("./user.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use('/user', _user.userRouter);
router.use('/despenses', _despenses.despensesRouter);
router.use('/authenticate', _authenticate.authenticateRouter);
router.use('/refresh-token', _refreshToken.refreshTokenRouter);