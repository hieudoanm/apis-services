import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express, { Request, Response, urlencoded, json } from 'express';
import get from 'lodash/get';
import request from 'request';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './middlewares/error';
import { notFoundHandler } from './middlewares/not-found';
import { RegisterRoutes } from './routes';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

RegisterRoutes(app);

app.use('/api/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import('./swagger.json')));
});

app.use(errorHandler);
app.use(notFoundHandler);

app.get('/api/proxy', (req: Request, res: Response) => {
  const method: string = get(req, 'query.method', 'GET');
  const url: string = get(req, 'query.url', 'https://google.com');
  return request({ url, method }).pipe(res);
});

export default app;
