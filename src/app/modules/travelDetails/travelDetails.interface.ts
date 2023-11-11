import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

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
  userData: Types.ObjectId | IUser; // relation with user
};

export type ITravelFilters = {
  searchTerm?: string;
};

export type TravelDetailsModel = Model<ITravelDetails, Record<string, unknown>>;
