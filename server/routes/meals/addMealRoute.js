import { addMeal } from "../../db/meals/addMeal.js";

export const addMealRoute = {
  method: "post",
  path: "/addMeal",
  handler: async (req, res) => {
    const meal = req.body;
    const updatedMeals = await addMeal(meal);
    res.status(200).json(updatedMeals);
  },
};
