import { Request } from "express";
import { z } from "zod";
import { DefaultResponse } from "@/src/common/defaultReponse";
import { Plan } from "@/src/models";

export const createPlanSchema = {
  body: z.object({
    name: z.string().min(1, { message: "Plan name is required" }),
    description: z.string().optional(),
    stripeId: z.string().nullable().optional(),
    title: z.string().optional(),
    isActive: z.boolean().default(true),
    isNew: z.boolean().default(false),
    monthlyPrice: z.number().default(0.0),
    yearlyPrice: z.number().default(0.0),
    ctaButtonCopy: z.string().nullable().optional(),
    ctaButtonStyle: z.string().nullable().optional(),
    ctaButtonLink: z.string().nullable().optional(),
    highlightsTitle: z.string().nullable().optional(),
  }),
};

export type CreatePlanRequestBody = z.infer<typeof createPlanSchema.body>;

export type CreatePlanRequest = Request<
  never,
  never,
  CreatePlanRequestBody,
  never
>;

export type CreatePlanResponse = DefaultResponse<Plan>;
