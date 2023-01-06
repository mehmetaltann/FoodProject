import { deleteIngredient } from "../../db/ingredients/deleteIngredient.js";
import { getMeals } from "../../db/meals/getMeals.js";

export const deleteIngredientRoute = {
  method: "delete",
  path: "/deleteIngredient",
  handler: async (req, res) => {
    const ingredientName = req.query.name;
    const mealId = req.query.id;
    await deleteIngredient(ingredientName, mealId);
    const updatedMeals = await getMeals();
    res.status(200).json(updatedMeals);
  },
};
