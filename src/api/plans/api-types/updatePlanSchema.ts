import { Request } from "express";
import { z } from "zod";
import { createPlanSchema } from "./createPlanSchema";
import { DefaultResponse } from "@/src/common/defaultReponse";
import { Plan } from "@/src/models";

export const updatePlanSchema = {
  params: z.object({
    id: z.string(),
  }),
  body: createPlanSchema.body.partial(),
};

export type UpdatePlanRequestBody = z.infer<typeof updatePlanSchema.body>;

export type UpdatePlanRequest = Request<
  never,
  never,
  UpdatePlanRequestBody,
  never
>;

export type UpdatePlanResponse = DefaultResponse<Plan>;
