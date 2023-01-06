import { addStep } from "../../db/steps/addStep.js";
import { getMeals } from "../../db/meals/getMeals.js";

export const addStepRoute = {
  method: "post",
  path: "/addStep",
  handler: async (req, res) => {
    const newStep = req.body;
    const mealId = req.query.mealId;
    await addStep(newStep, mealId);
    const updatedMeals = await getMeals();
    res.status(200).json(updatedMeals);
  },
};
