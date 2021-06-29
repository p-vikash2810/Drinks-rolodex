import React from "react";
import "./card-list.style.css";
import Card from "../Card/Card";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.drinks.map((drink) => (
        <Card drink={drink} key={drink.idDrink}></Card>
      ))}
    </div>
  );
};

export default CardList;
