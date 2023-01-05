import React from "react";
import MealsListItem from "./MealsListItem";
import { Link } from "react-router-dom";
import axios from "axios";

const MealsList = (props) => {
  const onDeleteMealHandler = async (id) => {
    axios
      .delete(`http://localhost:3001/deleteMeals?id=${id}`)
      .then((response) => {
        props.setMeals(response.data);
      });
  };

  return (
    <div className="list-container">
      <h1> Yemekler </h1>
      {props.isLoadingMeals ? (
        <p>Yükleniyor ...</p>
      ) : (
        props.meals.map((meal) => {
          return (
            <MealsListItem
              key={meal._id}
              meal={meal}
              onDeleteMeal={onDeleteMealHandler}
            />
          );
        })
      )}
      <div>
        <Link to="/addMeal">
          <button>Ekle</button>
        </Link>
      </div>
    </div>
  );
};

export default MealsList;
