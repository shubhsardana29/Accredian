import { z } from 'zod';

const referralSchema = z.object({
  referrerName: z.string().min(1, "Referrer name is required"),
  referrerEmail: z.string().email("Invalid referrer email"),
  refereeName: z.string().min(1, "Referee name is required"),
  refereeEmail: z.string().email("Invalid referee email")
});

export const validateReferral = (data: unknown) => {
  return referralSchema.parse(data);
};