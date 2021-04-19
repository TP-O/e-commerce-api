import { Request, Response } from 'express';

export abstract class HttpError {
  /**
   * Status code.
   */
  protected abstract readonly status: number;

  /**
   * Error message.
   */
  protected abstract readonly message: string;

  public handle = (_: Request, res: Response): void => {
    res.status(this.status).json({
      message: this.message,
    });
  };
}
