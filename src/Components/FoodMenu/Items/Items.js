import { Button } from "bootstrap";
import React from "react";
import "./Items.css";

const Items = ({ item }) => {
  return (
    <div className="breakfast-item">
      <img src={item.img} alt="" />
      <h1> {item.name.length > 30 ? item.name.slice(0, 30) : item.name} </h1>
      <p> {item.description} </p>
      <h5> {item.price} </h5>
      <button className="border-0 cart-btn">Add to Cart</button>
    </div>
  );
};

export default Items;
