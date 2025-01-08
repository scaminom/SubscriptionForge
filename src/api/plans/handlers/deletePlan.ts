import { Response } from "express";
import {
  DeletePlanRequest,
  DeletePlanResponse,
} from "../api-types/deletePlanSchema";

import errorHandler, { StatusError } from "@/src/utils/errorHandler";
import { prisma } from "@/src/config/database";

const getPlan = async (
  req: DeletePlanRequest,
  res: Response<DeletePlanResponse>,
) => {
  try {
    const id = req.params.id;

    const planFound = await prisma.plan.findUnique({
      where: { id },
    });

    if (!planFound) {
      throw new StatusError(404, "Plan not found");
    }

    const plan = await prisma.plan.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Success",
      data: plan,
    });
  } catch (err) {
    return errorHandler(res, err, "Error deletting plan.");
  }
};

export default getPlan;
