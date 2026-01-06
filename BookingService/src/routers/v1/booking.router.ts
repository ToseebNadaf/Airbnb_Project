import express from "express";
import { validateRequestBody } from "../../validators";
import { bookingSchema } from "../../validators/booking.validator";
import { createBookingHandler } from "../../controllers/booking.controller";

const bookingRouter = express.Router();

bookingRouter.post(
  "/",
  validateRequestBody(bookingSchema),
  createBookingHandler
);

export default bookingRouter;
