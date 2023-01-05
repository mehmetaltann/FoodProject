import "./App.css";
import { useState, useMemo } from "react";
import { Rotalar } from "./Routes";
import { MealContext } from "./store/MealContext";

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const value = useMemo(
    () => ({ selectedMeal, setSelectedMeal }),
    [selectedMeal, setSelectedMeal]
  );

  return (
    <div className="App">
      <MealContext.Provider value={value}>
        <Rotalar />
      </MealContext.Provider>
    </div>
  );
}

export default App;
