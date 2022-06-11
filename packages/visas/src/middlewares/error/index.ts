import { Request, Response, NextFunction } from 'express';
import { ValidateError } from 'tsoa';

export const errorHandler = (
  error: Error | ValidateError | undefined,
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  if (error instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${request.path}:`, error.fields);
    return response.status(422).json({
      message: 'Validation Failed',
      details: error.fields,
    });
  }

  if (error instanceof Error) {
    return response.status(500).json({
      message: 'Internal Server Error',
    });
  }

  next();
};
