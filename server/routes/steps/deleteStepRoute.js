import { deleteStep } from "../../db/steps/deleteStep.js";
import { getMeals } from "../../db/meals/getMeals.js";

export const deleteStepRoute = {
  method: "delete",
  path: "/deleteStep",
  handler: async (req, res) => {
    const stepText = req.query.text;
    const mealId = req.query.id;
    await deleteStep(stepText, mealId);
    const updatedMeals = await getMeals();
    res.status(200).json(updatedMeals);
  },
};
