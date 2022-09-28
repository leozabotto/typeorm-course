import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import AppError from '@shared/errors/AppError';
import '@shared/infra/typeorm';
import '@shared/container';
import 'express-async-errors';
import { errors } from 'celebrate';
import routes from './routes/index.routes';
import uploadConfig from '@config/upload';
import { pagination } from 'typeorm-pagination';
import rateLimiter from './middlewares/rateLimiter';

const app = express();

app.use(cors());
app.use(pagination);

app.use(express.json());

app.use(rateLimiter);

app.use(routes);
app.use('/files', express.static(uploadConfig.directory));

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('server started on port 3333 🚀');
});
