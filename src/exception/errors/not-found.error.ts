import { HttpError } from '@exception/errors/http.error';

class NotFoundError extends HttpError {
  /**
   * Status code.
   */
  protected status = 404;

  /**
   * Error message.
   */
  protected message = 'API not found!';
}

export const notFound = new NotFoundError();
