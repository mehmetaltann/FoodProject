import { Fragment } from "react";
import BackButton from "../UI/BackButton";
import ButtonX from "../UI/ButtonX";

const MealsListItem = (props) => {
  return (
    <Fragment>
      <div className="list-item">
        {props.meal ? (
          <>
            <img src={props.meal.imageURL} height={100} width={100} alt="Altan" />
            <h3>{props.meal.name}</h3>
            <button
              className="arrow-button"
              onClick={() => console.log("yemek ekle")}
            ></button>
            <div className="right-action">
              <ButtonX
                onClick={() => {
                  console.log("yemek ekle");
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
