import { useContext } from "react";
import { MealContext } from "../store/MealContext";
import { Link } from "react-router-dom";
import axios from "axios";
import IngredientsListItem from "./IngredientsListItem";

const IngredientsList = () => {
  const { selectedMeal, setSelectedMeal } = useContext(MealContext);

  const onDeleteIngredientHandler = async (name) => {
    axios
      .delete(
        `http://localhost:3001/deleteIngredient?id=${selectedMeal._id}&name=${name}`
      )
      .then((response) => {
        const updatedMeals = response.data;
        const updatedMeal = updatedMeals.filter(
          (meal) => meal._id === selectedMeal._id
        );
        setSelectedMeal(updatedMeal[0]);
      });
  };

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
      {selectedMeal ? (
        <div>
          <Link to={`/addIngredient?mealId=${selectedMeal._id}`}>
            <button>Ekle</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default IngredientsList;
