import { z } from 'zod';

const transportationDetailsSchema = z.object({
  mode: z.string(),
  departureCity: z.string(),
  arrivalCity: z.string(),
  departureTime: z.string(),
  arrivalTime: z.string(),
  flightNumber: z.string().nullable(),
});

const accommodationDetailsSchema = z.object({
  hotelName: z.string(),
  address: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
});

const travelValidationZodSchema = z.object({
  body: z.object({
    tripName: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    destinations: z.array(z.string()),
    activities: z.array(z.string()),
    transportationDetails: z.array(transportationDetailsSchema),
    accommodationDetails: z.array(accommodationDetailsSchema),
  }),
});

export const travelValidation = {
  travelValidationZodSchema,
};
