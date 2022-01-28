import { Router } from 'express';

import { createUserRouter } from './user.routes';

const router = Router();

router.use('/user', createUserRouter);

export { router };
