import { Request, Response } from "express";

export const pingHandler = async (req: Request, res: Response) => {
  res.status(200).json({ message: "pong" });
};
