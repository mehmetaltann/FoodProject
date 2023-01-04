import { db } from "../database.js";
import { ObjectId } from "mongodb";

export const deleteMeal = async (mealId) => {
  const connection = await db.getConnection();
  const meals = await connection
    .collection("meals")
    .deleteOne({ _id: ObjectId(mealId) });
};
