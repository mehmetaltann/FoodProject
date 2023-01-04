import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
];

export const Rotalar = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component/>} />
        ))}
      </Routes>
    </Router>
  );
};
