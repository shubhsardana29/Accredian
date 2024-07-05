import nodemailer from 'nodemailer';
import { google, Auth } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const OAuth2 = google.auth.OAuth2;

let oauth2Client: Auth.OAuth2Client | null = null;

const createTransporter = async (): Promise<nodemailer.Transporter> => {
  try {
    if (!oauth2Client) {
      oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
      );
    }

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    } as nodemailer.TransportOptions);

    return transporter;
  } catch (err) {
    console.error("Error creating transporter:", err);
    throw err;
  }
};

const getAccessToken = async (): Promise<string> => {
  try {
    if (!oauth2Client) {
      throw new Error('OAuth2 client not initialized.');
    }

    const { token } = await oauth2Client.getAccessToken();
    if (!token) {
      throw new Error('Failed to get access token.');
    }
    return token;
  } catch (err) {
    console.error("Error getting access token:", err);
    throw err;
  }
};

export default createTransporter;