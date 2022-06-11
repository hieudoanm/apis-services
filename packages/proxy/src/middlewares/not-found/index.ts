import { Request, Response } from 'express';

export const notFoundHandler = (_request: Request, res: Response) => {
  res.status(404).send({ message: 'Not Found' });
};
