import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMassage } from "../IMailProvider";
import nodemailer from 'nodemailer';
// basicly this is the 'how works' of sending a email
export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail; 
    //made the transporter

    //constructor with credentials
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '01d50c4d2f4197',
                pass: 'd369fc40131e4e'
            }
        });
    }
    
    // and send the email with the mailtrap
    async sendMail(message: IMassage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}