import express, {
  Request,
  Response,
  urlencoded,
  json,
  NextFunction,
} from 'express';
import swaggerUi from 'swagger-ui-express';
import { ValidateError } from 'tsoa';
import { RegisterRoutes } from './routes';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

RegisterRoutes(app);

app.use('/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import('./swagger.json')));
});

app.use(function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }

  next();
});

app.use(function notFoundHandler(_req: Request, res: Response) {
  res.status(404).send({ message: 'Not Found' });
});

export default app;
