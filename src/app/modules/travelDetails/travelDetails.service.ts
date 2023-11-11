import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOption } from '../../../shared/pagination';
import { ITravelDetails, ITravelFilters } from './travelDetails.interface';
import { TravelDetails } from './travelDetails.model';

// create a tour

const createATravel = async (
  payload: ITravelDetails,
): Promise<ITravelDetails> => {
  const result = await TravelDetails.create(payload);
  return result;
};

// get all tour data

const getAllTravel = async (
  filters: ITravelFilters,
  paginationOption: IPaginationOption,
): Promise<IGenericResponse<ITravelDetails[]>> => {
  const { searchTerm, ...filtersData } = filters;

  // this is for search
  const travelSearchFiled = ['tripName', 'destinations'];
  const andCconditions = [];
  if (searchTerm) {
    andCconditions.push({
      $or: travelSearchFiled.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // this is for filter part

  if (Object.keys(filtersData).length) {
    andCconditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions =
    andCconditions.length > 0 ? { $and: andCconditions } : {};

  // this is for pagination

  const { page = 1, limit = 10 } = paginationOption;
  const skip = (page - 1) * limit;

  const result = await TravelDetails.find(whereConditions)
    .sort({
      createdAt: 'desc',
    })
    .skip(skip)
    .limit(limit);
  const total = await TravelDetails.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// get a single tour data
const getSingleTravelData = async (
  id: string,
): Promise<ITravelDetails | null> => {
  const result = await TravelDetails.findById(id);
  return result;
};

// update  a travel data
const updateTravelData = async (
  id: string,
  payload: Partial<ITravelDetails>,
) => {
  const result = await TravelDetails.findOneAndUpdate(
    { _id: id },
    { $set: payload },
  );
  return result;
};

// delete travel data
const deleteTravelData = async (id: string): Promise<ITravelDetails | null> => {
  const result = await TravelDetails.findByIdAndDelete(id);
  return result;
};

export const travelDetailService = {
  createATravel,
  getAllTravel,
  getSingleTravelData,
  updateTravelData,
  deleteTravelData,
};
