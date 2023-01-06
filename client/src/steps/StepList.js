import { useContext } from "react";
import { MealContext } from "../store/MealContext";
import { Link } from "react-router-dom";
import StepListItem from "./StepListItem";
import axios from "axios"

const StepList = () => {
  const { selectedMeal, setSelectedMeal } = useContext(MealContext);

  const deleteStepHandler = async (stepText) => {

    axios
    .delete(
      `http://localhost:3001/deleteStep?id=${selectedMeal._id}&text=${stepText}`
    )
    .then((response) => {
      const updatedMeals = response.data;
      const updatedMeal = updatedMeals.filter(
        (meal) => meal._id === selectedMeal._id
      );
      setSelectedMeal(updatedMeal[0]);
    });
  }

  return (
    <div className="list-container">
      <h1> Tarif Adımları </h1>
      {selectedMeal && selectedMeal.steps ? (
        selectedMeal.steps.map((step, index) => {
          return <StepListItem key={index} stepObject={step} onDeleteStep={deleteStepHandler}/>;
        })
      ) : (
        <p>Tarif Yok</p>
      )}

      {selectedMeal ? (
        <div>
          <Link to={`/addStep?mealId=${selectedMeal._id}`}>
            <button>Ekle</button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default StepList;
