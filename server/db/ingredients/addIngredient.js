import { db } from "../database.js";
import { ObjectId } from "mongodb";

export const addIngredient = async (ingredient, mealId) => {
  const connection = await db.getConnection();
  const collection = await connection.collection("meals");
  const query = { _id: ObjectId(mealId) };

  const updatedDocument = {
    $push: {
      ingredients: ingredient,
    },
  };

  await collection.updateOne(query, updatedDocument, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};
