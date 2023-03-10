import React from "react";
import MealsList from "../meals/MealsList";
import IngredientList from "../ingredients/IngredientsList";
import StepList from "../steps/StepList";
import { useMeals } from "../meals/useMeals";

const HomePage = () => {
  const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
  return (
    <div className="page-container">
      <div className="column">
        <MealsList
          meals={meals}
          isLoadingMeals={isLoadingMeals}
          setMeals={setMeals}
        />
      </div>
      <div className="column">
        <IngredientList />
      </div>
      <div className="column">
        <StepList />
      </div>
    </div>
  );
};

export default HomePage;
