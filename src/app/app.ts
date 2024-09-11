import express from "express";
import cors from "cors";
import { createPlansRouter } from "./api/plans/route";

const app = express();

app.use(cors());
app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

createPlansRouter(apiRouter);

export default app;
