import { Request, Response } from 'express';

export abstract class HttpError {
  /**
   * Status code.
   */
  protected abstract status: number;

  /**
   * Error message.
   */
  protected abstract message: string;

  public handle = (_: Request, res: Response): void => {
    res.status(this.status).json({
      message: this.message,
    });
  };
}
