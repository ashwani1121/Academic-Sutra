import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ConferenceDashboard from "../pages/ConferenceDashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Notifications from "../pages/Notifications";
import ChangePassword from "../pages/ChangePassword";
import ConferenceDetails from "../pages/ConferenceDetails";

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
      <Route path="/profile" element={<Profile />} />

      <Route path="/settings" element={<Settings />} />

      <Route
        path="/notifications"
        element={<Notifications />}
      />

      <Route
        path="/change-password"
        element={<ChangePassword />}
      />

      <Route
        path="/conference/:id"
        element={<ConferenceDetails />}
      />
    </Routes>
  );
};

export default AppRoutes;