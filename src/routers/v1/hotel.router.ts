import express from "express";
import { validateRequestBody } from "../../validators";
import { hotelSchema } from "../../validators/hotel.validator";
import { createHotelHandler } from "../../controllers/hotel.controller";

const hotelRouter = express.Router();

hotelRouter.post("/", validateRequestBody(hotelSchema), createHotelHandler);

export default hotelRouter;
