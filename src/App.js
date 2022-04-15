import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaVbar from "./Components/NaVbar/NaVbar";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <NaVbar />
      <Search />
    </div>
  );
}

export default App;
