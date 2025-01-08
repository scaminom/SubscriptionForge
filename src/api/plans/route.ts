import { Router } from "express";
import { processRequest } from "zod-express-middleware";

import createPlan from "./handlers/createPlan";
import updatePlan from "./handlers/updatePlan";
import getPlan from "./handlers/getPlan";
import getPlans from "./handlers/getPlans";
import deletePlan from "./handlers/deletePlan";

import {
  getPlanSchema,
  createPlanSchema,
  updatePlanSchema,
  deletePlanSchema,
} from "./api-types";

const planRouter = Router();

export const createPlansRouter = (router: Router) => {
  router.use("/plans", planRouter);

  // GET
  planRouter.get("/:id", processRequest(getPlanSchema), getPlan);

  // GET
  planRouter.get("/", getPlans);

  // POST
  planRouter.post("/", processRequest(createPlanSchema), createPlan);

  // PUT
  planRouter.put("/:id", processRequest(updatePlanSchema), updatePlan);

  // DELETE
  planRouter.delete("/:id", processRequest(deletePlanSchema), deletePlan);
};

export default createPlansRouter;
