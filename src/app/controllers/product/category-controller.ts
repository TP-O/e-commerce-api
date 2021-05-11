import { HttpRequestError } from '@app/exceptions/http-request-error';
import { CategoryService } from '@app/services/product/category-service';
import { format } from '@modules/helper';
import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CategoryController {
  /**
   * Constructor.
   *
   * @param _categoryService category service.
   */
  public constructor(private _categoryService: CategoryService) {}

  /**
   * Get categories by level.
   */
  public get = async (req: Request, res: Response) => {
    const data = await this._categoryService.getByLevel(
      parseInt(req.params.level, 10),
    );

    if (!data) {
      throw new HttpRequestError(404, 'Categories not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };

  /**
   * Get categories by level.
   */
  public getByLeftRight = async (req: Request, res: Response) => {
    const data = await this._categoryService.getByLeftRight(
      parseInt(req.params.left, 10),
      parseInt(req.params.right, 10),
    );

    if (!data) {
      throw new HttpRequestError(404, 'Categories not found');
    }

    return res.status(200).json({
      success: true,
      data: format(data),
    });
  };
}
