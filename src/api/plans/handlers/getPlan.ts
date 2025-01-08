import { GetPlanRequest, GetPlanResponse } from "../api-types";
import { Response } from "express";

import errorHandler, { StatusError } from "@/src/utils/errorHandler";
import { prisma } from "@/src/config/database";

const getPlan = async (req: GetPlanRequest, res: Response<GetPlanResponse>) => {
  try {
    const id = req.params.id;
    const plan = await prisma.plan.findUnique({
      where: { id },
    });

    if (!plan) {
      throw new StatusError(404, "Plan not found");
    }

    return res.status(200).json({
      message: "Success",
      data: plan,
    });
  } catch (err) {
    return errorHandler(res, err, "Error getting plan.");
  }
};

export default getPlan;
