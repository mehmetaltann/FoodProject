import { deleteStep } from "../../db/steps/deleteStep.js";
import { getMeals } from "../../db/meals/getMeals.js";

export const deleteStepRoute = {
  method: "delete",
  path: "/deleteStep",
  handler: async (req, res) => {
    const mealId = req.query.id;
    const deletedStep = { text : req.query.text}
    await deleteStep(deletedStep, mealId);
    const updatedMeals = await getMeals();
    res.status(200).json(updatedMeals);
  },
};
