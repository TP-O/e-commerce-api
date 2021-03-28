import { isPlural } from 'pluralize';
import { collect } from 'collect.js';
import { Instance } from '@database/core/orm/instance';
import { Model } from '@database/core/orm/model';
import { Result } from '@database/core/orm/interfaces/result.interface';
import { Database } from '@database/core/database';

export class Converter {
  /**
   * Handle raw data.
   *
   * @param data raw data of mysql2 package.
   */
  convert(data: any): Result {
    if (this.isRowDataPacket(data)) {
      return {
        data: collect(this.groupData(this.parseData(data), Database.usingModel)),
      };
    }

    return { status: data };
  }

  /**
   * Check if the raw data is data of the rows.
   *
   * @param data raw data of mysql2 package.
   */
  private isRowDataPacket(data: any) {
    return Array.isArray(data) && (!data.length || data[0].constructor.name === 'TextRow')
      ? true
      : false;
  }

  /**
   * Make raw data more readable.
   *
   * @param data raw data of mysql2 package.
   */
  private parseData(data: any[]) {
    return data.map((d) => {
      const root: any = {};
      let pointer = root;

      for (const [key, val] of Object.entries(d)) {
        key.split('-').forEach((k, i) => {
          // Assign an empty object tp the non-existent key
          if (pointer[k] === undefined) {
            pointer[k] = {};
          }

          // Assign value to the deepest key
          if (i === key.split('-').length - 1) {
            pointer[k] = val;
            // Reset pointer
            pointer = root;
          }
          // Move the pointer to the next key
          else {
            pointer = pointer[k];
          }
        });
      }

      return root;
    });
  }

  /**
   * Group duplicate data.
   *
   * @param data duplicate data.
   */
  private groupData = (data: any[], model: Model) => {
    // Wrap data in Instances
    data = this.createInstances(data, model);

    data.forEach((_, key) => {
      // Wrap relationship data in Instances
      data[key].data = this.createRelationshipInstances(data[key].data, model);

      for (let nextKey = key + 1; nextKey < data.length; nextKey++) {
        // Group objects have the same id
        if (data[key].data.id === data[nextKey].data.id) {
          for (const prop of Object.keys(data[key].data)) {
            if (Array.isArray(data[key].data[prop])) {
              data[key].data[prop].push(new Instance(data[nextKey].data[prop], model));
            }
          }
          // Delete dupicate object
          data.splice(nextKey, 1);
          nextKey--;
        }
      }

      // Group duplicate relationships
      data[key].data = this.groupRelationships(data[key].data, model);
    });

    return data;
  };

  /**
   * Push data to Instance.
   *
   * @param data data of Instance.
   */
  private createInstances(data: any[], model: Model) {
    // If data is wrapped in Instance, return all data
    if (!data.length || data[0].data) {
      return data;
    }

    data.forEach((_, key) => {
      data[key] = new Instance(data[key], model);
    });

    return data;
  }

  /**
   * Push data of relationships to Instance.
   *
   * @param data data containing relationships.
   */
  private createRelationshipInstances(data: any, model: Model) {
    if (!data) {
      return data;
    }

    for (const prop of Object.keys(data)) {
      if (
        typeof data[prop] === 'object' &&
        data[prop] !== null &&
        data[prop].constructor.name !== 'Date'
      ) {
        // Assign empty array for null value
        data[prop] =
          data[prop].id !== null
            ? [new Instance(data[prop], model.relationship.get(prop).model)]
            : [];
      }
    }

    return data;
  }

  /**
   * Group duplicate relationships.
   *
   * @param data data containing relationships.
   */
  private groupRelationships(data: any, model: Model) {
    if (!data) {
      return data;
    }

    for (const prop of Object.keys(data)) {
      if (Array.isArray(data[prop])) {
        data[prop] = this.groupData(data[prop], model.relationship.get(prop).model);

        // If prop is singular, get the first element
        if (!isPlural(prop)) {
          data[prop] = data[prop][0];
        }
      }
    }

    return data;
  }
}
