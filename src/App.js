import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaVbar from "./Components/NaVbar/NaVbar";
import { Route, Routes } from "react-router-dom";
import Breakfast from "./Components/FoodMenu/Breakfast/Breakfast";
import Dinner from "./Components/FoodMenu/Dinner/Dinner";
import Lunch from "./Components/FoodMenu/Lunch.js/Lunch";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import SingUp from "./Components/SingUp/SingUp";

function App() {
  return (
    <div className="App">
      <NaVbar />
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index path="/Breakfast" element={<Breakfast />} />
          <Route index element={<Breakfast />} />
          <Route path="/Lunch" element={<Lunch />} />
          <Route path="/Dinner" element={<Dinner />} />
        </Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SingUp" element={<SingUp />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
