import { getMealsRoute } from "./meals/getMealsRoute.js";
import { addMealRoute } from "./meals/addMealRoute.js";
import { deleteMealRoute } from "./meals/deleteMealRoute.js";
import { addIngredientRoute } from "./ingredients/addIngredientRoute.js";
import { deleteIngredientRoute } from "./ingredients/deleteIngredientRoute.js";

export const routes = [
  getMealsRoute,
  addMealRoute,
  deleteMealRoute,
  addIngredientRoute,
  deleteIngredientRoute,
];
