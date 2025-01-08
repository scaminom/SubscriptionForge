import { DefaultResponse } from "@/src/common/defaultReponse";
import { Request } from "express";

import { Plan } from "@prisma/client";
import { z } from "zod";

export const deletePlanSchema = {
  params: z.object({
    id: z.string(),
  }),
};

export type DeletePlanRequestParams = z.infer<typeof deletePlanSchema.params>;

export type DeletePlanRequest = Request<
  DeletePlanRequestParams,
  never,
  never,
  never
>;

export type DeletePlanResponse = DefaultResponse<Plan>;
