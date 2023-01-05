import { deleteMeal } from "../../db/meals/deleteMeal.js";
import { getMeals } from "../../db/meals/getMeals.js";

export const deleteMealRoute = {
  method: "delete",
  path: "/deleteMeals",
  handler: async (req, res) => {
    const mealId = req.query.id;
    await deleteMeal(mealId);
    const updatedMeals = await getMeals();
    res.status(200).json(updatedMeals);
  },
};
