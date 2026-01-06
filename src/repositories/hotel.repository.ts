import logger from "../config/logger.config";
import Hotel from "../db/models/Hotel";
import { createHotelDto } from "../dto/hotel.dto";

export async function createHotel(data: createHotelDto) {
  const hotel = await Hotel.create(data);

  logger.info(`Hotel created with ID: ${hotel.id}`);

  return hotel;
}
