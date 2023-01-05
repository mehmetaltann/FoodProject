import { useContext } from "react";
import { MealContext } from "../store/MealContext";
import axios from "axios";
import IngredientsListItem from "./IngredientsListItem";

const IngredientsList = () => {
  const { selectedMeal, setSelectedMeal } = useContext(MealContext);

  const onDeleteIngredientHandler = async (name) => {
    axios
      .delete(
        `http://localhost:3001/deleteIngedient?id=${selectedMeal._id}&name=${name}`
      )
      .then((response) => {
        const updatedMeals = response.data;
        const updatedMeal = updatedMeals.filter(
          (meal) => meal._id === selectedMeal.id
        );
        setSelectedMeal(updatedMeal[0]);
      });
  };

  console.log(selectedMeal);
  return (
    <div className="list-container">
      <h1> İçerikler </h1>
      {selectedMeal ? (
        selectedMeal.ingredients.map((ingredient, index) => {
          return (
            <IngredientsListItem
              key={index}
              ingredientObject={ingredient}
              onDeleteIngredient={onDeleteIngredientHandler}
            />
          );
        })
      ) : (
        <p>İçerik Bulunamadı !!!</p>
      )}
    </div>
  );
};

export default IngredientsList;
