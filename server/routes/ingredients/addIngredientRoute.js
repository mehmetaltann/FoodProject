import { addIngredient } from "../../db/ingredients/addIngredient.js";
import { getMeals } from "../../db/meals/getMeals.js";

export const addIngredientRoute = {
  method: "post",
  path: "/addIngredient",
  handler: async (req, res) => {
    const ingredient = req.body;
    const mealId = req.query.mealId;
    await addIngredient(ingredient, mealId);
    const updatedMeals = await getMeals();
    res.status(200).json(updatedMeals);
  },
};
