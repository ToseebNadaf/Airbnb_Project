import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export async function createBookingHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const createBookingResponse = await createBookingService(req.body);
  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Booking created successfully",
    data: createBookingResponse,
  });
}
