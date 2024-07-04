import { z } from 'zod';

export const referralSchema = z.object({
  referrerName: z.string().min(1, 'Referrer name is required'),
  referrerEmail: z.string().email('Invalid email'),
  refereeName: z.string().min(1, 'Referee name is required'),
  refereeEmail: z.string().email('Invalid email'),
});

export type ReferralFormData = z.infer<typeof referralSchema>;
