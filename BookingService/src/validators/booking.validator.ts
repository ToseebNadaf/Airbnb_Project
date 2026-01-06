import { z } from "zod";

export const bookingSchema = z.object({
  userId: z.number({ message: "User ID is required and must be a number." }),
  hotelId: z.number({ message: "Hotel ID is required and must be a number." }),
  totalGuests: z
    .number({ message: "Total guests are required and must be at least 1." })
    .min(1, { message: "Total guests must be at least 1." }),
  bookingAmount: z
    .number({ message: "Booking amount is required and must be at least 1." })
    .min(1, { message: "Booking amount must be at least 1." }),
  checkInDate: z.string({ message: "Check-in date is required." }),
  checkOutDate: z.string({ message: "Check-out date is required." }),
  roomCategoryId: z.number({ message: "Room category ID is required and must be a number." }),
});
