import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AddIngredientPage from "./ingredients/AddIngredientPage";
import AddStepPage from "./steps/AddStepPage";

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
