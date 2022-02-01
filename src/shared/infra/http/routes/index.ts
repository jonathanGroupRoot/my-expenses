import { Router } from 'express';

import { authenticateRouter } from './authenticate.routes';
import { despensesRouter } from './despenses.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/despenses', despensesRouter);
router.use('/authenticate', authenticateRouter);

export { router };
