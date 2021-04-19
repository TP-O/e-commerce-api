export abstract class Seeder {
  /**
   * Name of seeder.
   */
  protected seederName = '';

  /**
   * Start seeding.
   */
  public async seed() {
    try {
      await this.run();

      console.log(`Seeding: ${this.seederName}`);
    } catch (err) {
      console.log(`Failed: ${this.seederName} (${err.meesage})`);
    }
  }

  /**
   * Insert data to table.
   */
  protected abstract run(): Promise<void>;
}
