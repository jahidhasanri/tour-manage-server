/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./app/modules/routes";

import { globalErrorHangler } from "./app/middlewares/globalErrorHandeler";
import notFound from "./app/middlewares/notFound";

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
app.use(notFound);

export default app;
