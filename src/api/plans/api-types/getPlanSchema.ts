import { Request } from "express";
import { z } from "zod";
import { DefaultResponse } from "@/src/common/defaultReponse";
import { Plan } from "@prisma/client";

export const getPlanSchema = {
  params: z.object({
    id: z.string(),
  }),
};

export type GetPlanRequestParams = z.infer<typeof getPlanSchema.params>;

export type GetPlanRequest = Request<GetPlanRequestParams, never, never, never>;

export type GetPlanResponse = DefaultResponse<Plan>;

export type getPlansResponse = DefaultResponse<Plan[]>;
