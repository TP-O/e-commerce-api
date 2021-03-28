import morgan from 'morgan';
import { Express } from 'express';
import { createStream, RotatingFileStream } from 'rotating-file-stream';
import { nodeConfig } from '@config/node.config';
import { loggerConfig } from '@config/logger.config';

class Logger {
  /**
   * Name of log file.
   */
  private filename = loggerConfig.filename;

  /**
   * Path to log file.
   */
  private path = loggerConfig.path;

  /**
   * Interval between log files.
   */
  private interval = loggerConfig.interval;

  /**
   * Use logger for Express app.
   *
   * @param app Express app.
   */
  public applyFor(app: Express): void {
    app.use(
      nodeConfig.env === 'production'
        ? morgan('combined', { stream: this.startStream() })
        : morgan('dev'),
    );
  }

  /**
   * Start to write into a file.
   */
  private startStream(): RotatingFileStream {
    return createStream(this.filename, {
      path: this.path,
      interval: this.interval,
    });
  }
}

export const logger = new Logger();
