import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { travelDetailService } from './travelDetails.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { ITravelDetails } from './travelDetails.interface';

// create a tour

const createATravel = catchAsync(async (req: Request, res: Response) => {
  const travelData = req.body;

  const result = await travelDetailService.createATravel(travelData);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'travel created Successful',
    data: result,
  });
});

// get all tour data
const getAllTravel = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, [
    'searchTerm',
    'startDate',
    'endDate',
    'destinations',
    'accommodationDetails.hotelName',
  ]);
  const paginationOption = pick(req.query, [
    'limit',
    'page',
    'sortBy',
    'sortOrder',
  ]);

  const result = await travelDetailService.getAllTravel(
    filters,
    paginationOption,
  );

  responseForData.sendResponse<ITravelDetails[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Getting Successful',
    data: result.data,
    meta: result.meta,
  });
  // next();
});

// get a single travel data
const getSingleTravelData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await travelDetailService.getSingleTravelData(id);

  responseForData.sendResponseForCreate<ITravelDetails>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Getting Successful',
    data: result,
  });
});

export const travelController = {
  createATravel,
  getAllTravel,
  getSingleTravelData,
};
