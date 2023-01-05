import { Fragment, useContext } from "react";
import { MealContext } from "../store/MealContext";
import BackButton from "../UI/BackButton";
import ButtonX from "../UI/ButtonX";

const IngredientsListItem = (props) => {
  return (
    <Fragment>
      <div className="list-item">
        {props.ingredientObject ? (
          <>
            <h3>{props.ingredientObject.name}</h3>
            <h5>{props.ingredientObject.quantity}</h5>
            <div className="right-action">
              <ButtonX
                onClick={() => {
                  props.onDeleteIngredient(props.ingredientObject.name);
                }}
              />
            </div>
          </>
        ) : (
          <h3>İçerik Bulunmuyor !!!</h3>
        )}
      </div>
    </Fragment>
  );
};

export default IngredientsListItem;
