/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./app/modules/routes";
import httpStatus from "http-status-codes";
import { globalErrorHangler } from "./app/middlewares/globalErrorHandeler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Tour Management System backend",
  });
});

// Global error handler middleware
app.use(globalErrorHangler);

// Not Found route handler
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API route not found!",
  });
});

export default app;
