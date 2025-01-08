import { Response } from "express";
import { ZodError } from "zod";

export class StatusError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (
  res: Response,
  error: unknown,
  defaultMessage: string = "An unexpected error occurred",
) => {
  console.error("Error:", error);

  if (error instanceof StatusError) {
    return res.status(error.statusCode).json({
      message: error.message,
      error: error.name,
    });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: "Validation error",
      error: error.errors,
    });
  }

  return res.status(500).json({
    message: defaultMessage,
    error: "InternalServerError",
  });
};

export default errorHandler;
