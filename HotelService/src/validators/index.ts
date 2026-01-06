import { ZodObject } from "zod";
import { NextFunction, Request, Response } from "express";

export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Invalid Schema",
        error: error,
      });
    }
    next();
  };
};
