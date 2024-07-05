"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTransporter = exports.sendReferralEmail = void 0;
const email_1 = __importDefault(require("../config/email"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendReferralEmail = (referralData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = yield (0, email_1.default)();
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
        const info = yield transporter.sendMail(mailOptions);
        console.log('Referral email sent:', info.response);
        return info;
    }
    catch (error) {
        console.error("Error sending referral email:", error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
});
exports.sendReferralEmail = sendReferralEmail;
// Optional: Function to verify transporter configuration
const verifyTransporter = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = yield (0, email_1.default)();
        yield transporter.verify();
        console.log('Transporter verified successfully');
    }
    catch (error) {
        console.error('Transporter verification failed:', error);
        throw new Error(`Transporter verification failed: ${error.message}`);
    }
});
exports.verifyTransporter = verifyTransporter;
