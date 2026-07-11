import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated local fallback validation delay
    setTimeout(() => {
      if (
        (emailOrMobile === "admin@gmail.com" || emailOrMobile === "9876543210") &&
        password === "Academic@2026"
      ) {
        localStorage.setItem("token", "demo-token-12345");
        navigate("/conference-dashboard");
      } else {
        alert("Invalid Email/Mobile or Password");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center py-4 text-xl font-semibold">
          Academic Sutra
        </div>
        {/* FORM */}
        <form className="p-6" onSubmit={handleLogin}>
          {/* EMAIL / MOBILE */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Email/Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email or Mobile"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-blue-500 disabled:opacity-50"
            />
          </div>
          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-blue-500 disabled:opacity-50"
              />
              {/* Eye Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
          {/* LINKS */}
          <div className="flex justify-between items-center mt-6 text-sm">
            <Link
              to="#"
              className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Forgot your password?
            </Link>
            <div className="flex items-center gap-2">
              <span>New to Academic Sutra?</span>
              <Link
                to="/signup"
                className="font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;