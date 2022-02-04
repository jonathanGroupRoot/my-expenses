import { Router } from 'express';

import { RefreshTokenController } from '@modules/user/useCases/refreshTokenUseCase/RefreshTokenController';

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const refreshTokenRouter = Router();
const refreshTokenController = new RefreshTokenController();

refreshTokenRouter.post('/', ensureAuthenticate, refreshTokenController.handle);

export { refreshTokenRouter };
