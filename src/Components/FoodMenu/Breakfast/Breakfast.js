import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import "./Breakfast.css";

const Breakfast = () => {
  const [breakItems, setBreakItems] = useState([]);
  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakItems(data));
  }, []);
  return (
    <div className="breakfast container">
      {breakItems.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Breakfast;
