import { HttpRequestError } from '@app/exceptions/http-request-error';
import { FeedbackService } from '@app/services/product/feedback-service';
import { autoInjectable } from 'tsyringe';
import { Request, Response } from 'express';

@autoInjectable()
export class FeedbackController {
  /**
   * Constructor.
   *
   * @param _feedbackService feedback service.
   */
  public constructor(protected _feedbackService: FeedbackService) {}

  /**
   * Create feedback.
   */
  public create = async (req: Request, res: Response) => {
    const success = await this._feedbackService.create(req.body);

    if (!success) {
      throw new HttpRequestError(500, 'Can not create feedback');
    }

    return res.status(200).json({
      success: true,
      message: 'Create feedback successfully',
    });
  };
}
