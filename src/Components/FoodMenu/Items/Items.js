import React from "react";

const Items = ({ item }) => {
  return (
    <div className="breakfast-item">
      <img src={item.img} alt="" />
      <h1> {item.name} </h1>
      <p> {item.description} </p>
      <h5> {item.price} </h5>
    </div>
  );
};

export default Items;
