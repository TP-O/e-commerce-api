import { Category } from '@app/models/product/category';
import { singleton } from 'tsyringe';

@singleton()
export class CategoryService {
  /**
   * Get categories by level.
   *
   * @param level category level.
   */
  public async getByLevel(level: number) {
    const { data } = await Category.select('*')
      .where([['level', '=', `${level}`]])
      .get();

    return data?.all();
  }

  public async getByLeftRight(left: number, right: number) {
    const { data } = await Category.select('*')
      .where([
        ['left', '>', `${left}`],
        ['right', '<', `${right}`],
      ])
      .orderBy('`left`')
      .get();

    return data?.all();
  }
}
