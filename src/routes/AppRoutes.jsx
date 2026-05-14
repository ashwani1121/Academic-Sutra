import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ConferenceDashboard from "../pages/ConferenceDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/conference-dashboard"
        element={<ConferenceDashboard />}
      />
    </Routes>
  );
};

export default AppRoutes;