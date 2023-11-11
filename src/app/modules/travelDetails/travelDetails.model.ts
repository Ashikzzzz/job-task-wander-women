import { Schema, model } from 'mongoose';
import { ITravelDetails, TravelDetailsModel } from './travelDetails.interface';

const travelDetailsSchema = new Schema<ITravelDetails>(
  {
    tripName: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    destinations: [
      {
        type: String,
      },
    ],
    activities: [
      {
        type: String,
      },
    ],
    transportationDetails: [
      {
        mode: {
          type: String,
        },
        departureCity: {
          type: String,
        },
        arrivalCity: {
          type: String,
        },
        departureTime: {
          type: Date,
        },
        arrivalTime: {
          type: Date,
        },
        flightNumber: {
          type: String,
        },
      },
    ],
    accommodationDetails: [
      {
        hotelName: {
          type: String,
        },
        address: {
          type: String,
        },
        checkIn: {
          type: Date,
        },
        checkOut: {
          type: Date,
        },
      },
    ],
    userData: {
      // relation with user
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

export const TravelDetails = model<ITravelDetails, TravelDetailsModel>(
  'TravelDetails',
  travelDetailsSchema,
);
