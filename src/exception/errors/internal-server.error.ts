import { HttpError } from '@exception/errors/http.error';

class InternalServerError extends HttpError {
  /**
   * Status code.
   */
  protected status = 500;

  /**
   * Error message.
   */
  protected message = 'We are having some problems!';
}

export const internalServer = new InternalServerError();
