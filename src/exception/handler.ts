import { Request, Response, Express } from 'express';
import { notFound } from '@exception/errors/not-found.error';
import { internalServer } from '@exception/errors/internal-server.error';
import { HttpRequestError } from '@exception/http-request-error';

class Handler {
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
    app.all('/*', notFound.handle);
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

        return internalServer.handle(req, res);
      },
    );
  }
}

export const handler = new Handler();
