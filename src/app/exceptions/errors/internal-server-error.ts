import { HttpError } from '@app/exceptions/errors/http-error';
import { singleton } from 'tsyringe';

@singleton()
export class InternalServerError extends HttpError {
  /**
   * Status code.
   */
  protected readonly status = 500;

  /**
   * Error message.
   */
  protected readonly message = 'We are having some problems!';
}
