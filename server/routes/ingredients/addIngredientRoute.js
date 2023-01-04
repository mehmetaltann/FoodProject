import { addIngredient } from "../../db/ingredients/addIngredient.js";

export const addIngredientRoute = {
  method: "post",
  path: "/addIngredient",
  handler: async (req, res) => {
    const meals = await getMeals();
    res.status(200).json(meals);
  },
};
