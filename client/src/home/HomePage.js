import React from "react";
import MealsList from "../meals/MealsList";
import { useMeals } from "../meals/useMeals";

const HomePage = () => {
  const { meals, isLoading: isLoadingMeals } = useMeals();
  return (
    <div className="page-container">
      <div className="page-container">
        <MealsList meals={meals} isLoadingMeals={isLoadingMeals} />
      </div>
    </div>
  );
};

export default HomePage;
