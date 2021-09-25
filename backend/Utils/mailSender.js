import nodemailer from "nodemailer";
import { google } from "googleapis";
import htmlGnerator from "./htmlformail.js";

const mailSender = async (options) => {
  try {
    // const oAuth2Client = new google.auth.OAuth2(
    //   process.env.CLIENT_ID,
    //   process.env.CLEINT_SECRET,
    //   process.env.REDIRECT_URI
    // );
    // oAuth2Client.setCredentials({
    //   refresh_token: "1//04A-cbdSdcV2-CgYIARAAGAQSNwF-L9Irh7Llv7x9YXv5hBmhljmSuVSNZXSU13C-jEHYJt29z7gICg9EI0-E5Vl2HlCCgnGMT-k",
    // });

    // const accessToken = await oAuth2Client.getAccessToken();

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     type: "OAuth2",
    //     user: "yours authorised email address",
    //     clientId: process.env.CLIENT_ID,
    //     clientSecret: process.env.CLEINT_SECRET,
    //     refreshToken: process.env.REFRESH_TOKEN,
    //     accessToken: accessToken,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port:  process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      },
    });

    // send mail with defined transport object
    const message = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.email,
      subject: options.subject,
      html: htmlGnerator(options.html),
    };

	  const info = await transporter.sendMail(message);
	 console.log('message') 
	  console.log(info);
  } catch (e) {
    console.log(e);
  }
};

export default mailSender;
