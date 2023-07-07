import CurrentLocation from "./components/Location";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="card-container">
        <CurrentLocation />
      </div>
    </div>
  );
}

export default App;
