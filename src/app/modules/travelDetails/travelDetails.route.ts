import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { travelValidation } from './travelDetails.validation';
import { travelController } from './travelDetails.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../enums/user';

const router = express.Router();

// delete travel data
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  travelController.deleteTravelData,
);

// update a travel data
router.patch(
  '/update-travel-data/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  travelController.updateTravelData,
);

// get a single tour data
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.VIEWER),
  travelController.getSingleTravelData,
);

// get all travel
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.VIEWER),
  travelController.getAllTravel,
);

// create tour
router.post(
  '/create-tour',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(travelValidation.travelValidationZodSchema),
  travelController.createATravel,
);

export const travelRouter = router;
