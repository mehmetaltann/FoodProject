import React from "react";
import ButtonX from "../UI/ButtonX";

const StepListItem = ({ stepObject, onDeleteStep }) => {
  return (
    <div className="list-item">
      {stepObject ? (
        <>
          <p>{stepObject}</p>
          <div className="right-action">
            <ButtonX
              onClick={() => {
                onDeleteStep(stepObject);
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default StepListItem;
