import { errorHandler, notFoundHandler } from '@apis-services/shared';
import express, { Request, Response, urlencoded, json } from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes';
import swaggerJSON from './swagger.json';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

RegisterRoutes(app);

app.use(swaggerUi.serve);
app.get('/api/docs', (_request: Request, response: Response) => {
  return response.send(swaggerUi.generateHTML(swaggerJSON));
});

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
