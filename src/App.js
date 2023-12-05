// Components
import ColumnOne from "./components/ColumnOne/ColumnOne";
import ColumnTwo from "./components/ColumnTwo/ColumnTwo";

// Main css
import "./App.css";

function App() {
  return (
    <div className="app">
      <ColumnOne className="col1_app" />
      <ColumnTwo className="col2_app" />
    </div>
  );
}

export default App;
