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
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitReferral = void 0;
const referralService_1 = require("../services/referralService");
const emailService_1 = require("../services/emailService");
const validateReferral_1 = require("../utils/validateReferral");
const zod_1 = require("zod");
const submitReferral = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const referralData = (0, validateReferral_1.validateReferral)(req.body);
        const newReferral = yield (0, referralService_1.createReferral)(referralData);
        yield (0, emailService_1.sendReferralEmail)(referralData);
        res.status(201).json(newReferral);
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json({
                message: 'Validation error',
                errors: error.errors.map(err => ({
                    field: err.path.join('.'),
                    message: err.message
                }))
            });
        }
        else {
            next(error);
        }
    }
});
exports.submitReferral = submitReferral;
