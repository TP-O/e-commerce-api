import { Feedback } from '@app/models/product/feedback';
import { singleton } from 'tsyringe';

@singleton()
export class FeedbackService {
  /**
   * Create feedback.
   *
   * @param data feedback data.
   */
  public async create(data: any) {
    const id = await Feedback.create(data);

    return id;
  }
}
