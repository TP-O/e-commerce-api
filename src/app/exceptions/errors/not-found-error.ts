import { HttpError } from '@app/exceptions/errors/http-error';

class NotFoundError extends HttpError {
  /**
   * Status code.
   */
  protected status = 404;

  /**
   * Error message.
   */
  protected message = 'Not found!';
}

export const notFound = new NotFoundError();
