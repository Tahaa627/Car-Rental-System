import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
//import Fleet from "../pages/Fleet";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/fleet" element={<Fleet />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;