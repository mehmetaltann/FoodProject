import { getMealsRoute } from "./meals/getMealsRoute.js";
import { addMealRoute } from "./meals/addMealRoute.js";
import { deleteMealRoute } from "./meals/deleteMealRoute.js";
import { addIngredientRoute } from "./ingredients/addIngredientRoute.js";
import { deleteIngredientRoute } from "./ingredients/deleteIngredientRoute.js";
import { deleteStepRoute } from "./steps/deleteStepRoute.js";
import { addStepRoute } from "./steps/addStepRoute.js";

export const routes = [
  getMealsRoute,
  addMealRoute,
  deleteMealRoute,
  addIngredientRoute,
  deleteIngredientRoute,
  deleteStepRoute,
  addStepRoute,
];
