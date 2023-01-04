import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const routes = [];

export const Rotalar = () => {
  <Router>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  </Router>;
};
