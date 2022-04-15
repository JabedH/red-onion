import React from "react";
import "./Search.css";
import bg from "../../img/bannerbackground1.png";

const Search = () => {
  return (
    <div className="search">
      <img src={bg} alt="" />
      <div className="food">
        <h2>Best Food Waiting for your belly</h2>
        <div className="search-food">
          <input placeholder="search your foods" type="text" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
