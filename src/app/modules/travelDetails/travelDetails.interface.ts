import { Model } from 'mongoose';

export type ITransportation = {
  mode: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: Date;
  arrivalTime: Date;
  flightNumber?: string | null;
};

export type IAccommodationDetails = {
  hotelName: string;
  address: string;
  checkIn: Date;
  checkOut: Date;
};

export type ITravelDetails = {
  tripName: string;
  startDate: Date;
  endDate: Date;
  destinations: string[];
  activities: string[];
  transportationDetails: ITransportation[];
  accommodationDetails: IAccommodationDetails[];
};

export type TravelDetailsModel = Model<ITravelDetails, Record<string, unknown>>;
