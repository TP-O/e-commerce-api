import { Feedback } from '@app/models/product/feedback';
import { Keyword } from '@app/models/product/keyword';
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
    const score = await this.getScoreOfContent(data.content);

    const { id } = await Feedback.create([
      {
        ...data,
        score: score,
      },
    ]);

    return id;
  }

  /**
   * Get sum of scores.
   *
   * @param content feedback content.
   */
  public async getScoreOfContent(content = '') {
    let conditions = [];
    const words = content.split(' ');

    conditions = words.map((word: string) => ['word', '=', `'${word}'`, 'OR']);

    const { data } = await Keyword.select('score')
      .where([['id', '>', '0']])
      .andWhere(conditions)
      .sum('keywords.score', 'diff')
      .first();

    return data?.diff ? data.diff : 0;
  }
}
