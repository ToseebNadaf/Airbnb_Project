export interface AppError extends Error {
  statusCode: number;
}

export class InternalServerError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 500;
    this.name = "InternalServerError";
    this.message = message;
  }
}

export class NotFoundError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 404;
    this.name = "NotFoundError";
    this.message = message;
  }
}

export class UnauthorizedError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 401;
    this.name = "UnauthorizedError";
    this.message = message;
  }
}

export class ConflictError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 409;
    this.name = "ConflictError";
    this.message = message;
  }
}

export class ValidatorError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 422;
    this.name = "ValidatorError";
    this.message = message;
  }
}

export class BadRequestError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 400;
    this.name = "BadRequestError";
    this.message = message;
  }
}

export class ForbiddenError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 403;
    this.name = "ForbiddenError";
    this.message = message;
  }
}
