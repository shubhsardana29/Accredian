"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const referralController_1 = require("../controllers/referralController");
const router = express_1.default.Router();
router.post('/submit', referralController_1.submitReferral);
exports.default = router;
