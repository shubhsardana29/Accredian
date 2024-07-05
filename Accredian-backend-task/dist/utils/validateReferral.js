"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReferral = void 0;
const zod_1 = require("zod");
const referralSchema = zod_1.z.object({
    referrerName: zod_1.z.string().min(1, "Referrer name is required"),
    referrerEmail: zod_1.z.string().email("Invalid referrer email"),
    refereeName: zod_1.z.string().min(1, "Referee name is required"),
    refereeEmail: zod_1.z.string().email("Invalid referee email")
});
const validateReferral = (data) => {
    return referralSchema.parse(data);
};
exports.validateReferral = validateReferral;
