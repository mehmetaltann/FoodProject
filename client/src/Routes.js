import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AddIngredientPage from "./ingredients/AddIngredientPage";
import AddStepPage from "./steps/AddStepPage";
import AddMealPage from "./meals/AddMealPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/addIngredient",
    component: AddIngredientPage,
  },
  {
    path: "/addStep",
    component: AddStepPage,
  },
  {
    path: "/addMeal",
    component: AddMealPage,
  },
];

export const Rotalar = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  );
};
