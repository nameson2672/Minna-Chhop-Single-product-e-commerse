import nodemailer from 'nodemailer';
import htmlGnerator from './htmlformail.js'

const mailSender = async (options) => {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_EMAIL,
			pass: process.env.SMTP_PASSWORD
		}
	});

	// send mail with defined transport object
	const message = {
		from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
		to: options.email,
		subject: options.subject,
        html: htmlGnerator(options.html)
	};

    const info = await transporter.sendMail(message);
    console.log(info);
};

export default mailSender;
