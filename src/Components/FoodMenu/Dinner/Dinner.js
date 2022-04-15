import React, { useEffect, useState } from "react";

const Dinner = () => {
  const [breakItems, setBreakItems] = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setBreakItems(data));
  }, []);
  return (
    <div className="breakfast container">
      {breakItems.map((item) => (
        <div className="breakfast-item">
          <img src={item.img} alt="" />
          <h1> {item.name} </h1>
          <p> {item.description} </p>
          <h5> {item.price} </h5>
        </div>
      ))}
      <img src="" alt="" />
    </div>
  );
};
export default Dinner;
