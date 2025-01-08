import { Response } from "express";
import { prisma } from "../../../config/database";
import {
  UpdatePlanRequest,
  UpdatePlanResponse,
} from "../api-types/updatePlanSchema";
import errorHandler from "@/src/utils/errorHandler";

const updatePlan = async (
  req: UpdatePlanRequest,
  res: Response<UpdatePlanResponse>,
) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const plan = await prisma.plan.update({
      where: { id },
      data: body,
    });
    return res.status(200).json({
      message: "Success",
      data: plan,
    });
  } catch (err) {
    return errorHandler(res, err, "Error updating plan.");
  }
};

export default updatePlan;
