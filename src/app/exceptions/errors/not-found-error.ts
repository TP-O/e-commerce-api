import { HttpError } from '@app/exceptions/errors/http-error';
import { singleton } from 'tsyringe';

@singleton()
export class NotFoundError extends HttpError {
  /**
   * Status code.
   */
  protected readonly status = 404;

  /**
   * Error message.
   */
  protected readonly message = 'Not found!';
}
