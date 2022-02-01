import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';

import auth from '../../../../../config/auth';

interface IPayload {
    sub: string;
}
export async function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('token does not exist');
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_Id } = verify(token, auth.SECRET_TOKEN) as IPayload;

        request.user = {
            id: user_Id,
        };

        next();
    } catch (error) {
        throw new AppError('invalid token', 401);
    }
}
