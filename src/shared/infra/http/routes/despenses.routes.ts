import { Router } from 'express';

import { CreateDespenseController } from '@modules/expenses/useCases/createDespense/CreateDespenseController';
import { DeleteDespenseController } from '@modules/expenses/useCases/deleteDespense/DeleteDespenseController';
import { ListDespenseController } from '@modules/expenses/useCases/listDespense/ListDespenseController';
import { UpdateDespenseControlelr } from '@modules/expenses/useCases/updateDespense/UpdateDespenseController';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const despensesRouter = Router();
const createDespensesController = new CreateDespenseController();
const listDespensesController = new ListDespenseController();
const deleteDespensesController = new DeleteDespenseController();
const updateDespensesController = new UpdateDespenseControlelr();

despensesRouter.get('/', ensureAuthenticate, listDespensesController.handle);
despensesRouter.post(
    '/:id_user',
    ensureAuthenticate,
    createDespensesController.handle,
);
despensesRouter.put(
    '/:id',
    ensureAuthenticate,
    updateDespensesController.handle,
);
despensesRouter.delete('/:id', deleteDespensesController.handle);

export { despensesRouter };
