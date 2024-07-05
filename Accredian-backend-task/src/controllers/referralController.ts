import { Request, Response, NextFunction } from 'express';
import { createReferral } from '../services/referralService';
import { sendReferralEmail } from '../services/emailService';
import { validateReferral } from '../utils/validateReferral';
import { ZodError } from 'zod';

export const submitReferral = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const referralData = validateReferral(req.body);
    const newReferral = await createReferral(referralData);
    await sendReferralEmail(referralData);
    res.status(201).json(newReferral);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        message: 'Validation error',
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    } else {
      next(error);
    }
  }
};