import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "25b497cb345138",
        pass: "e918f3c247553d"
    }
});
export class NodemailerMailAdapter implements MailAdapter {


    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com',
            to: 'Ezequias Vaz <ezequiasva@hotmail.com',
            subject,
            html: body
        })
    }
}
