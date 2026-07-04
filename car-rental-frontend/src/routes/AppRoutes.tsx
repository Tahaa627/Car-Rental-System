import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Fleet from "../pages/Fleet";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleet" element={<Fleet />} />
    </Routes>
  );
};

export default AppRoutes;