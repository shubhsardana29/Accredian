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
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const OAuth2 = googleapis_1.google.auth.OAuth2;
let oauth2Client = null;
const createTransporter = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!oauth2Client) {
            oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground");
        }
        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });
        const accessToken = yield getAccessToken();
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_USER,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
            },
        });
        return transporter;
    }
    catch (err) {
        console.error("Error creating transporter:", err);
        throw err;
    }
});
const getAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!oauth2Client) {
            throw new Error('OAuth2 client not initialized.');
        }
        const { token } = yield oauth2Client.getAccessToken();
        if (!token) {
            throw new Error('Failed to get access token.');
        }
        return token;
    }
    catch (err) {
        console.error("Error getting access token:", err);
        throw err;
    }
});
exports.default = createTransporter;
