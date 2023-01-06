import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown } from "../UI/Dropdown";
import { BackButton } from "../UI/BackButton";
import { MealContext } from "../store/MealContext";
import axios from "axios";

const unitOptions = ["pounds", "cups", "tablespoon", "teaspoon", "count"];

const AddIngredientPage = () => {
  const { selectedMeal, setSelectedMeal } = useContext(MealContext);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState(0);
  const [unit, setUnit] = useState(unitOptions[0]);
  const id = new URLSearchParams(useLocation().search).get("mealId");
  let navigate = useNavigate();

  const addIngredientHandler = async () => {
    const newIngredient = {
      name: ingredientName.toLowerCase(),
      quantity: ingredientQuantity,
      type: unit,
    };

    axios
      .post(`http://localhost:3001/addIngredient?mealId=${id}`, newIngredient)
      .then((response) => {
        console.log("Başarılı");
        selectedMeal.ingredients.push(newIngredient);
        alert("Yeni İçerik Eklendi");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>İçerik Ekle</h1>
        <input
          type="text"
          placeholder="İçerik İsmi"
          className="space after space-before full-width"
          value={ingredientName}
          onChange={(event) => setIngredientName(event.target.value)}
        />
        <input
          type="number"
          placeholder="İçerik Adet"
          className="space-before full-width"
          value={ingredientQuantity}
          onChange={(event) => setIngredientQuantity(event.target.value)}
        />
        <Dropdown
          className="space-before full-width"
          options={unitOptions}
          onChange={(event) => setUnit(event.target.value)}
        />
        <button
          className="space-before full-width"
          onClick={addIngredientHandler}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default AddIngredientPage;
