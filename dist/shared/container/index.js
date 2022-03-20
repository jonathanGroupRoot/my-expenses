"use strict";

var _tsyringe = require("tsyringe");

require("./providers");

var _DespensesRepository = require("../../modules/expenses/infra/prisma/repositories/DespensesRepository");

var _UserRepository = require("../../modules/user/infra/prisma/repositories/UserRepository");

var _UserTokenRepository = require("../../modules/user/infra/prisma/repositories/UserTokenRepository");

_tsyringe.container.registerSingleton('UserRepository', _UserRepository.UserRepository);

_tsyringe.container.registerSingleton('DespensesRepository', _DespensesRepository.DespensesRepository);

_tsyringe.container.registerSingleton('UserTokenRepository', _UserTokenRepository.UserTokenRepository);