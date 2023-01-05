import { useContext } from "react";
import IngredientListItem from "./IngredientsListItem";
import { MealContext } from "../store/MealContext";
import { Link } from "react-router-dom";

const IngredientsList = (props) => {
  const { selectedMeal, setSelectedMeal } = useContext(MealContext);
  // const onDeleteIngredientHandler = async (id) => {
  //   console.log("on delete çağırıldı");
  // };
  console.log(selectedMeal)
  return (
    <div className="list-container">
      <h1> İçerikler </h1>
    </div>
  );
};

export default IngredientsList;
