import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "./../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7d966e132d88e0",
    pass: "e4e0b6c220aa26",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Feedback Support <support@feedback.com>",
      to: "Raphael Ferreira <raphaelferreira.dev@gmail.com>",
      subject,
      html: body,
    });
  }
}
