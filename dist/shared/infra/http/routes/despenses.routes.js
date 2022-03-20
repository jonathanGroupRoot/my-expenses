"use strict";

exports.__esModule = true;
exports.despensesRouter = void 0;

var _express = require("express");

var _CreateDespenseController = require("../../../../modules/expenses/useCases/createDespense/CreateDespenseController");

var _DeleteDespenseController = require("../../../../modules/expenses/useCases/deleteDespense/DeleteDespenseController");

var _ListDespenseController = require("../../../../modules/expenses/useCases/listDespense/ListDespenseController");

var _UpdateDespenseController = require("../../../../modules/expenses/useCases/updateDespense/UpdateDespenseController");

var _ensureAuthenticate = require("../middlewares/ensureAuthenticate");

const despensesRouter = (0, _express.Router)();
exports.despensesRouter = despensesRouter;
const createDespensesController = new _CreateDespenseController.CreateDespenseController();
const listDespensesController = new _ListDespenseController.ListDespenseController();
const deleteDespensesController = new _DeleteDespenseController.DeleteDespenseController();
const updateDespensesController = new _UpdateDespenseController.UpdateDespenseControlelr();
despensesRouter.get('/', _ensureAuthenticate.ensureAuthenticate, listDespensesController.handle);
despensesRouter.post('/:id_user', _ensureAuthenticate.ensureAuthenticate, createDespensesController.handle);
despensesRouter.put('/:id', _ensureAuthenticate.ensureAuthenticate, updateDespensesController.handle);
despensesRouter.delete('/:id', deleteDespensesController.handle);