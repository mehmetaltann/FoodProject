import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { produce } from "immer";
import { generate } from "shortid";
import { Dropdown } from "../UI/Dropdown";
import { BackButton } from "../UI/BackButton";
import axios from "axios";

const unitOptions = ["pounds", "cups", "tablespoon", "teaspoon", "count"];

const AddMealPage = () => {
  const [mealName, setMealName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState([]);
  let navigate = useNavigate();

  const addMealHandler = async () => {
    const newMeal = {
      name: mealName.toLowerCase(),
      imageUrl,
      ingredients,
    };

    axios
      .post(`http://localhost:3001/addMeal`, newMeal)
      .then((response) => {
        console.log("Başarılı");
        alert("Yeni Yemek Eklendi");
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
        <h1>Yemek Ekle</h1>
        <input
          type="text"
          placeholder="Yemek İsmi"
          className="space after space-before full-width"
          value={mealName}
          onChange={(event) => setMealName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Fotoğraf URL"
          className="space after space-before full-width"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />

        <button
          className="space-before full-width"
          onClick={(e) => {
            setIngredients((currentIngredient) => [
              ...currentIngredient,
              {
                id: generate(),
                name: "",
                type: "",
                quantity: 0,
              },
            ]);
          }}
        >
          Yeni İçerik Ekle
        </button>
        {ingredients.map((ingredient, index) => {
          return (
            <div key={ingredient.id}>
              <input
                className="space-before full-width"
                placeholder="İçerik İsmi"
                type="text"
                value={ingredient.name}
                onChange={(e) => {
                  const ingName = e.target.value;
                  setIngredients((ingredients) =>
                    produce(ingredients, (v) => {
                      v[index].name = ingName;
                    })
                  );
                }}
              />
              <input
                className="space-before full-width"
                placeholder="İçerik Sayısı"
                type="number"
                value={ingredient.quantity}
                onChange={(e) => {
                  const ingQuantity = e.target.value;
                  setIngredients((ingredients) =>
                    produce(ingredients, (v) => {
                      v[index].quantity = ingQuantity;
                    })
                  );
                }}
              />
              <Dropdown
                className="space-before full-width"
                placeholder="İçerik Tipi"
                options={unitOptions}
                value={ingredient.type}
                onChange={(e) => {
                  const ingType = e.target.value;
                  setIngredients((ingredients) =>
                    produce(ingredients, (v) => {
                      v[index].type = ingType;
                    })
                  );
                }}
              />
              <button
                onClick={() => {
                  setIngredients((currentIngredient) =>
                    currentIngredient.filter((x) => x.id !== ingredient.id)
                  );
                }}
              >
                Sil
              </button>
            </div>
          );
        })}
        <button className="space-before full-width" onClick={addMealHandler}>
          Yemeği Ekle
        </button>
      </div>
    </div>
  );
};

export default AddMealPage;
