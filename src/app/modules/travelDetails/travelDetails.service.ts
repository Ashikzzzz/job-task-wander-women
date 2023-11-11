import { ITravelDetails } from './travelDetails.interface';
import { TravelDetails } from './travelDetails.model';

// create a tour

const createATravel = async (
  payload: ITravelDetails,
): Promise<ITravelDetails> => {
  const result = await TravelDetails.create(payload);
  return result;
};

export const travelDetailService = {
  createATravel,
};
