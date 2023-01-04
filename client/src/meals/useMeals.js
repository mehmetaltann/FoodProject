import { useState, useEffect } from "react";
import axios from "axios";

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/meals`).then((response) => {
      setMeals(response.data);
      setIsLoading(false);
      console.log(meals);
    });
  },[]);

  return { meals, isLoading, setMeals, setIsLoading };
};
