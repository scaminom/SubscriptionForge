import express from "express";
import cors from "cors";
import { createPlansRouter } from "./api/plans/route";
import { healthRouter } from "./api/health-router";
import { ConsoleLogger } from "@/shared/logger/console-logger";

const app = express();
const logger = new ConsoleLogger();

// Middleware
app.use(cors());
app.use(express.json());

// Health routes
app.use("/api/health", healthRouter);

// API routes
const apiRouter = express.Router();
app.use("/api", apiRouter);

// Plans routes
createPlansRouter(apiRouter);

logger.info("Routes initialized");

export default app;
