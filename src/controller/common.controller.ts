export abstract class Controller {
  /**
   * Only format data from model.
   */
  protected format(data: any) {
    if (data === undefined || data === null) {
      return null;
    }

    if (!Array.isArray(data)) {
      for (const [prop, value] of Object.entries(data.data)) {
        if (
          typeof value === 'object' &&
          value?.constructor.name !== 'Date'
        ) {
          data[prop] = this.format(data[prop]);
        }
      }

      return data.data;
    }

    return data.map((d: any) => {
      for (const [prop, value] of Object.entries(d.data)) {
        if (
          typeof value === 'object' &&
          value?.constructor.name !== 'Date'
        ) {
          d[prop] = this.format(d[prop]);
        }
      }

      return d.data;
    });
  }
}
