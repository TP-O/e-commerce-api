export class ConstraintType {
  /**
   * Ensure that a column cannot have a NULL value.
   */
  public static required() {
    return 'NOT NULL';
  }

  /**
   * Ensure that all values in a column are different.
   */
  public static unique() {
    return 'UNIQUE';
  }

  /**
   * Set a default value for a column if no value is specified.
   *
   * @param value default value.
   */
  public static defaults(value: string | number) {
    return `DEFAULT ${value}`;
  }

  /**
   * Increase by 1 if new column is added.
   */
  public static increment() {
    return 'AUTO_INCREMENT';
  }

  /**
   * Set positive number.
   */
  public static unsigned() {
    return 'UNSIGNED';
  }

  /**
   * Set action when the primary key is updated.
   *
   * @param mode restrict | no action | cascade | set null.
   */
  public static onUpdate(mode: string) {
    return `ON UPDATE ${mode}`;
  }

  /**
   * Set action when the primary key is deleted.
   *
   * @param mode restrict | no action | cascade | set null.
   */
  public static onDelete(mode: string) {
    return `ON DELETE ${mode}`;
  }
}
