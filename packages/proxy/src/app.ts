import express, { Request, Response, urlencoded, json } from 'express';
import get from 'lodash/get';
import request from 'request';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/proxy', (req: Request, res: Response) => {
  const method: string = get(req, 'query.method', 'GET');
  const url: string = get(req, 'query.url', 'https://google.com');
  return request({ url, method }).pipe(res);
});

export default app;
