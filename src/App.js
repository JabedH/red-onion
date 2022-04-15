import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaVbar from "./Components/NaVbar/NaVbar";
import Search from "./Components/Search/Search";
import FoodMenu from "./Components/FoodMenu/FoodMenu/FoodMenu";
import { Route, Routes } from "react-router-dom";
import Breakfast from "./Components/FoodMenu/Breakfast/Breakfast";
import Lunch from "./Components/FoodMenu/Lunch.js/Lunch";
import Dinner from "./Components/FoodMenu/Dinner/Dinner";

function App() {
  return (
    <div className="App">
      <NaVbar />
      <Search />
      <FoodMenu />
      <Routes>
        <Route path="Breakfast" element={<Breakfast />} />
        <Route path="Lunch " element={<Lunch />} />
        <Route path="Dinner" element={<Dinner />} />
      </Routes>
    </div>
  );
}

export default App;
