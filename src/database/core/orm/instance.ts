import { Model } from 'database/core/orm/model';
import { Database } from 'database/core/database';

export class Instance {
  /**
   *
   * @param data
   * @param model
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
          target.data[prop] =
            value !== undefined ? value : target.data[prop];
        } else {
          Reflect.set(target, prop, value);
        }
        return true;
      },
    });
  }

  private filteredData() {
    const result: any = {};

    for (const prop of Object.keys(this.model.schema)) {
      result[prop] = this.data[prop];
    }

    return result;
  }

  public async update() {
    return this.model
      .where([[this.model.primaryKey, '=', `v:${this.data.id}`]])
      .update(this.filteredData());
  }

  public async delete() {
    return this.model
      .where([[this.model.primaryKey, '=', `v:${this.data.id}`]])
      .delete();
  }

  public async get(relation: string) {
    Database.usingModel = this.model;

    return this.model
      .select('id')
      .with(relation)
      .where([
        [
          `${this.model.table}.${this.model.primaryKey}`,
          '=',
          `v:${this.data.id}`,
        ],
      ])
      .get();
  }
}
