import React from "react";

const ButtonX = ({ onClick }) => {
  return (
    <div className="button-x">
      <span className="the-x" onClick={onClick}>
        X
      </span>
    </div>
  );
};

export default ButtonX;
