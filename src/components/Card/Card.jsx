import React from "react";
import "./card.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="DrinkImages" src={props.drink.strDrinkThumb} />
      <h2>{props.drink.strDrink}</h2>
      <p>{props.drink.strGlass}</p>
    </div>
  );
};

export default Card;
