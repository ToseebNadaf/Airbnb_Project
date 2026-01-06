import { createHotelDto } from "../dto/hotel.dto";
import { createHotel } from "../repositories/hotel.repository";

export async function createHotelService(hotelData: createHotelDto) {
  const hotel = await createHotel(hotelData);
  return hotel;
}
