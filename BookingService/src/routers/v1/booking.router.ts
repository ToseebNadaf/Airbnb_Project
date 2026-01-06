import express from "express";
import { validateRequestBody } from "../../validators";
import { createBookingHandler } from "../../controller/booking.controller";
import { bookingSchema } from "../../validators/booking.validator";

const bookingRouter = express.Router();

bookingRouter.post(
  "/",
  validateRequestBody(bookingSchema),
  createBookingHandler
);

export default bookingRouter;
