import { Model } from '@modules/database/core/orm/model';

export class Instance {
  /**
   *
   * @param data instance's data.
   * @param model related model.
   */
  public constructor(public data: any, private model: Model) {
    return new Proxy(this, {
      get: (target, prop) => {
        if (prop in target.data) {
          return target.data[prop];
        }
        return Reflect.get(target, prop);
      },
      set: (target, prop, value) => {
        if (prop in target.data) {
          target.data[prop] = value !== undefined ? value : target.data[prop];
        } else {
          Reflect.set(target, prop, value);
        }
        return true;
      },
    });
  }

  /**
   * Save instance with current data.
   */
  public save() {
    return this.model
      .where([[this.model.primaryKey, '=', `'${this.data.id}'`]])
      .update(this.data);
  }

  /**
   * Delete instance.
   */
  public delete() {
    return this.model
      .where([[this.model.primaryKey, '=', `'${this.data.id}'`]])
      .delete();
  }

  /**
   *
   * @param relationship relationship's name.
   */
  public get(relationship: string) {
    Model.usingModel = this.model;

    return this.model
      .select('id')
      .with(relationship)
      .where([
        [
          `${this.model.table}.${this.model.primaryKey}`,
          '=',
          `'${this.data.id}'`,
        ],
      ])
      .get();
  }
}
