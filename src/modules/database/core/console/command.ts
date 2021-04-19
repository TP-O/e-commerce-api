export abstract class Command {
  /**
   * Prepare data.
   */
  protected abstract prepare(): Promise<void> | void;

  /**
   * Execute command.
   */
  protected abstract execute(): Promise<void> | void;
}
