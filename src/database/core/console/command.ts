export abstract class Command {
  /**
   * Prepare data.
   */
  protected abstract prepare(): Promise<void> | void;

  /**
   * Execute command.
   */
  public abstract execute(): Promise<void> | void;
}
