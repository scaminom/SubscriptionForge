import { CreatePlanRequest, CreatePlanResponse } from "../api-types";
import { Response } from "express";

import errorHandler, { StatusError } from "@/src/utils/errorHandler";
import { prisma } from "../../../config/database";

const createPlan = async (
  req: CreatePlanRequest,
  res: Response<CreatePlanResponse>,
) => {
  try {
    const body = req.body;
    let { name } = req.body;

    name = name.trim();

    if (name === "") {
      throw new StatusError(400, "Invalid name");
    }

    const plan = await prisma.plan.create({
      data: { ...body, name },
    });

    return res.status(201).json({
      message: "Success",
      data: plan,
    });
  } catch (err) {
    return errorHandler(res, err, "Error creating plan.");
  }
};

export default createPlan;
