import { db } from "../database.js";

export const deleteIngredient = async () => {
    const connection = await db.getConnection();
    const meals = await connection.collection('meals').find({}).toArray();
    return meals;
}