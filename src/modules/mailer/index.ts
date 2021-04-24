import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { mailerConfig } from '@configs/mailer';
import { singleton } from 'tsyringe';

@singleton()
export class Mailer {
  /**
   * Email transporter.
   */
  private _transporter: Mail;

  public constructor() {
    this._transporter = nodemailer.createTransport({
      service: mailerConfig.service,
      auth: {
        user: mailerConfig.address,
        pass: mailerConfig.password,
      },
    });
  }

  /**
   * Send email.
   *
   * @param options
   */
  public send(options: Mail.Options) {
    this._transporter.sendMail(options);
  }
}
