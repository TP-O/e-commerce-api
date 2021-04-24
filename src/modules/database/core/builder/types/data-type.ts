export class DataType {
  /**
   * A FIXED length string (can contain letters, numbers, and special characters).
   *
   * @param size The column length in characters.
   */
  public static char(size: 1) {
    const minSize = 0;
    const maxSize = 255;

    if (size < minSize || size > maxSize) {
      throw Error(
        `Size must be from ${minSize} to ${maxSize}, but received '${size}'`,
      );
    }

    return `CHAR(${size})`;
  }

  /**
   * A VARIABLE length string (can contain letters, numbers, and special characters).
   *
   * @param size The column length in characters.
   */
  public static varChar(size: number) {
    const minSize = 0;
    const maxSize = 65535;

    if (size < minSize || size > maxSize) {
      throw Error(
        `Size must be from ${minSize} to ${maxSize}, but received '${size}'`,
      );
    }

    return `VARCHAR(${size})`;
  }

  /**
   * Holds a string with a maximum length of 65,535 bytes.
   */
  public static text() {
    return 'TEXT';
  }

  /**
   * A bit-value type.
   *
   * @param size The number of bits per value.
   */
  public static bit(size = 1): string {
    const minSize = 1;
    const maxSize = 64;

    if (size < maxSize || size > maxSize) {
      throw Error(
        `Size must be from ${minSize} to ${maxSize}, but received '${size}'`,
      );
    }
    return `BIT(${size})`;
  }

  /**
   * A very small integer.
   * Signed range is from -128 to 127.
   * Unsigned range is from 0 to 255.
   */
  public static tinyInt(): string {
    return 'TINYINT';
  }

  /**
   * A small integer.
   * Signed range is from -32768 to 32767
   * Unsigned range is from 0 to 65535
   */
  public static smallInt(): string {
    return 'SMALLINT';
  }

  /**
   * A medium integer
   * Signed range is from -8388608 to 8388607.
   * Unsigned range is from 0 to 16777215.
   */
  public static mediumInt(): string {
    return 'MEDIUMINT';
  }

  /**
   * Signed range is from -2147483648 to 2147483647.
   * Unsigned range is from 0 to 4294967295.
   */
  public static int(): string {
    return 'INT';
  }

  /**
   * A large integer.
   * Signed range is from -9223372036854775808 to 9223372036854775807.
   * Unsigned range is from 0 to 18446744073709551615.
   */
  public static bigInt(): string {
    return 'BIGINT';
  }

  /**
   * A floating point number.
   *
   * @param size The total number of digits.
   * @param p The number of digits after the decimal point.
   */
  public static float(size: number, d: number): string {
    return `FLOAT(${size}, ${d})`;
  }

  /**
   * A normal-size floating point number.
   *
   * @param size The total number of digits.
   * @param p The number of digits after the decimal point.
   */
  public static double(size: number, d: number): string {
    return `DOUBLE(${size}, ${d})`;
  }

  /**
   * An exact fixed-point number.
   *
   * @param size The total number of digits is specified.
   * @param d The number of digits after the decimal point.
   */
  public static decimal(size: number, d: number): string {
    return `DECIMAL(${size}, ${d})`;
  }

  /**
   * A boolean type.
   */
  public static bool(): string {
    return 'BOOL';
  }

  /**
   * A date. Format: YYYY-MM-DD.
   * The supported range is from '1000-01-01' to '9999-12-31'.
   */
  public static date(): string {
    return 'DATE';
  }

  /**
   * A date and time combination.
   * Format: YYYY-MM-DD hh:mm:ss.
   * The supported range is from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'.
   * Use DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP to update automatically.
   */
  public static dateTime(): string {
    return 'DATETIME';
  }

  /**
   * A timestamp.
   * Stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC).
   * Format: YYYY-MM-DD hh:mm:ss.
   * From '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC.
   * Use DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP to update automatically.
   */
  public static timestamp(): string {
    return 'TIMESTAMP';
  }

  /**
   * A timestamp.
   * Format: YYYY-MM-DD hh:mm:ss.
   * The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC.
   * Use DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP to update automatically.
   */
  public static time(): string {
    return 'TIME';
  }

  /**
   * A year in four-digit format.
   * Values allowed in four-digit format: 1901 to 2155, and 0000.
   * MySQL 8.0 does not support year in two-digit format.
   */
  public static year(): string {
    return 'YEAR';
  }
}
