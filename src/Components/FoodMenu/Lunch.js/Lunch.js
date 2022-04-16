import React, { useEffect, useState } from "react";
import Items from "../Items/Items";

const Lunch = () => {
  const [LunchItems, setLunch] = useState([]);
  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setLunch(data));
  }, []);
  return (
    <div className="breakfast container">
      {LunchItems.map((item) => (
        <Items key={item.id} item={item} />
      ))}
      <img src="" alt="" />
    </div>
  );
};

export default Lunch;
