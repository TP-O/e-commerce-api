import { Feedback } from '@app/models/product/feedback';
import { singleton } from 'tsyringe';

@singleton()
export class FeedbackService {
  /**
   * Get feedbacks by product ID.
   *
   * @param id product ID.
   * @param limit limit number of products.
   * @param offset get from index.
   */
  public async getByProductId(id: number, limit: number, offset = 0) {
    const { data } = await Feedback.select('*')
      .where([['productId', '=', `${id}`]])
      .limit(`${offset}, ${limit}`)
      .get();

    return data?.all();
  }

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
