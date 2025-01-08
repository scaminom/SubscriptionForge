import { Response } from "express";

import errorHandler from "@/src/utils/errorHandler";

import { prisma } from "@/src/config/database";
import { getPlansResponse } from "../api-types";

const getPlans = async (
  res: Response<getPlansResponse>,
) => {
  try {
    const plans = await prisma.plan.findMany();

    return res.status(200).json({
      message: "Success",
      data: plans,
    });
  } catch (err) {
    return errorHandler(res, err, "Error getting plans.");
  }
};

export default getPlans;
