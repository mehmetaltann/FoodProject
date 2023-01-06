import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BackButton } from "../UI/BackButton";
import { MealContext } from "../store/MealContext";
import axios from "axios";

const AddStepPage = () => {
  const { selectedMeal } = useContext(MealContext);
  const [stepText, setStepText] = useState("");
  const id = new URLSearchParams(useLocation().search).get("mealId");
  let navigate = useNavigate();

  const newStep = { text: stepText };

  const addStepHandler = async () => {
    axios
      .post(`http://localhost:3001/addStep?mealId=${id}`, newStep)
      .then((response) => {
        console.log("Başarılı");
        selectedMeal.steps.push(newStep.text);
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
        <h1>Tarif Adımı Ekle</h1>
        <input
          type="text"
          placeholder="Tarif"
          className="space after space-before full-width"
          value={stepText}
          onChange={(event) => setStepText(event.target.value)}
        />
        <button className="space-before full-width" onClick={addStepHandler}>
          Ekle
        </button>
      </div>
    </div>
  );
};

export default AddStepPage;
