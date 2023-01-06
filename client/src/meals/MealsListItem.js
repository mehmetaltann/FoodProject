import { Fragment, useContext } from "react";
import ButtonX from "../UI/ButtonX";
import { MealContext } from "../store/MealContext";

const MealsListItem = (props) => {
  const { setSelectedMeal } = useContext(MealContext);

  return (
    <Fragment>
      <div className="list-item">
        {props.meal ? (
          <>
            <img
              src={props.meal.imageURL}
              height={100}
              width={100}
              alt="Altan"
            />
            <h3>{props.meal.name}</h3>
            <button
              className="arrow-button"
              onClick={() => setSelectedMeal(props.meal)}
            >
              {" "}
              =={" "}
            </button>
            <div className="right-action">
              <ButtonX
                onClick={() => {
                  props.onDeleteMeal(props.meal._id);
                  setSelectedMeal(null);
                }}
              />
            </div>
          </>
        ) : (
          <h1>Listede Yemek Bulunmuyor</h1>
        )}
      </div>
    </Fragment>
  );
};

export default MealsListItem;
