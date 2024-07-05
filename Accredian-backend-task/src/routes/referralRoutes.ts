import express from 'express';
import { submitReferral } from '../controllers/referralController';

const router = express.Router();

router.post('/submit', submitReferral);

export default router;