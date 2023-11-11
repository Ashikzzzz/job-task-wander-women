import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { travelDetailService } from './travelDetails.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

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

export const travelController = {
  createATravel,
};
