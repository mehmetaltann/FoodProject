import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="back-button"
      onClick={(event) => {
        event.preventDefault();
        navigate(-1);
      }}
    >Geri</button>
  );
};