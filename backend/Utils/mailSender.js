import nodemailer from "nodemailer";
import { google } from "googleapis";
import htmlGnerator from "./htmlformail.js";

const mailSender = async (options) => {
  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLEINT_SECRET,
      process.env.REDIRECT_URI
    );
    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "namesongaudel.ng@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLEINT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
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
  } catch (e) {
    console.log(e)
  }
};

export default mailSender;
