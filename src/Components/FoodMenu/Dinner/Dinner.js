import React, { useEffect, useState } from "react";
import Items from "../Items/Items";

const Dinner = () => {
  const [DinnerItems, setDinner] = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  return (
    <div className="breakfast container">
      {DinnerItems.map((item) => (
        <Items key={item.id} item={item} />
      ))}
      <img src="" alt="" />
    </div>
  );
};
export default Dinner;
