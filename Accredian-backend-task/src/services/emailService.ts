import { OAuth2Client } from 'google-auth-library';
import nodemailer from 'nodemailer';
import createTransporter from '../config/email';
import dotenv from 'dotenv';

dotenv.config();

interface ReferralData {
  refereeEmail: string;
  refereeName: string;
  referrerName: string;
}

export const sendReferralEmail = async (referralData: ReferralData): Promise<nodemailer.SentMessageInfo> => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: referralData.refereeEmail,
      subject: "You've been referred!",
      text: `Hello ${referralData.refereeName},

You've been referred by ${referralData.referrerName} to join our platform.

We're excited to have you on board! Click the link below to get started:
[Insert your registration link here]

If you have any questions, feel free to reach out to us.

Best regards,
The Accredian Team`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Referral email sent:', info.response);
    return info;
  } catch (error: any) {
    console.error("Error sending referral email:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// Optional: Function to verify transporter configuration
export const verifyTransporter = async (): Promise<void> => {
  try {
    const transporter = await createTransporter();
    await transporter.verify();
    console.log('Transporter verified successfully');
  } catch (error: any) {
    console.error('Transporter verification failed:', error);
    throw new Error(`Transporter verification failed: ${error.message}`);
  }
};