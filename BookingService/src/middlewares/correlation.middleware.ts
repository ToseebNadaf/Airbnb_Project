import { NextFunction, Request, Response } from "express";
import { asyncLocalStorage } from "../utils/helpers/request.helpers";
import { randomUUID } from "crypto";

export const attachCorrelationIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = randomUUID();
  req.headers["x-correlation-id"] = correlationId;

  asyncLocalStorage.run({ correlationId: correlationId }, () => {
    next();
  });
};
