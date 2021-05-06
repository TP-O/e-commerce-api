import { Model } from '@modules/database/core/orm/model';
import { ModelInfor } from '@modules/database/core/orm/interfaces/model-infor';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class Maker {
  /**
   * Constructor.
   *
   * @param model craeted model.
   */
  public constructor(private _model: Model) {}

  /**
   * Create model.
   *
   * @param infor information of created model.
   */
  public make(infor: ModelInfor) {
    this._model.init(
      infor.table,
      infor.columns,
      infor.primaryKey,
      infor.fillable,
    );

    return this._model;
  }
}
