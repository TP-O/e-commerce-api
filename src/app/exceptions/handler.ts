import { Request, Response, Express } from 'express';
import { NotFoundError } from '@app/exceptions/errors/not-found-error';
import { InternalServerError } from '@app/exceptions/errors/internal-server-error';
import { HttpRequestError } from '@app/exceptions/http-request-error';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class Handler {
  /**
   * Constructor.
   *
   * @param notFound not found error.
   * @param internalServer internal server error.
   */
  public constructor(
    private notFound: NotFoundError,
    private internalServer: InternalServerError,
  ) {}

  /**
   * Handle error for Express app.
   *
   * @param app Express app.
   */
  public handleFor(app: Express): void {
    this.handleNotFoundError(app);
    this.handleCustomError(app);
  }

  /**
   * 404 - Not Found Error.
   *
   * @param app Express app.
   */
  private handleNotFoundError(app: Express): void {
    app.all('/*', this.notFound.handle);
  }

  /**
   * Handle unpredictable errors.
   *
   * @param app Express app.
   */
  private handleCustomError(app: Express): void {
    app.use(
      /* eslint-disable-next-line */
      (err: HttpRequestError, req: Request, res: Response, _: any) => {
        if (err?.status && err.message) {
          return res.status(err.status).json({ message: err.message });
        }

        console.log(`Internal Error: ${err}`);

        return this.internalServer.handle(req, res);
      },
    );
  }
}
