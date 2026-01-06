import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createHotelService } from "../service/hotel.service";

export async function createHotelHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotelResponse = await createHotelService(req.body);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Hotel created successfully",
    data: hotelResponse,
  });
}
