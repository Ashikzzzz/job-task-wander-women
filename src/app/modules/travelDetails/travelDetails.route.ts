import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { travelValidation } from './travelDetails.validation';
import { travelController } from './travelDetails.controller';

const router = express.Router();

// create tour
router.post(
  '/create-tour',
  validateRequest(travelValidation.travelValidationZodSchema),
  travelController.createATravel,
);

export const travelRouter = router;
