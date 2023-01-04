import { deleteIngredient } from "../../db/ingredients/deleteIngredient.js";

export const deleteIngredientRoute = {
  method: "delete",
  path: "/deleteIngredient",
  handler: async (req, res) => {
    const meals = await getMeals();
    res.status(200).json(meals);
  },
};
