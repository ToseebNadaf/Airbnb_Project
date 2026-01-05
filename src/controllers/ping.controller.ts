import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { NotFoundError } from "../utils/errors/app.error";

export const pingHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    fs.readFileSync("sample");
    res.status(200).json({ message: "pong" });
  } catch (error) {
    throw new NotFoundError("File not found....");
  }
};
