import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    organization: "",
    country: "",
    scholarId: "",
    orcidId: "",
    dblpId: "",
    password: "",
    confirmPassword: "",
  });

  const inputStyle = `
  w-full
  px-4 py-3
  bg-gray-50
  border-2 border-gray-300
  rounded-lg
  text-gray-800
  placeholder:text-gray-500
  placeholder:font-medium
  focus:outline-none
  focus:ring-0
  focus:border-blue-500
`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "academicUser",
      JSON.stringify(formData)
    );

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="
            hidden lg:flex
            flex-col justify-center
            bg-gradient-to-br from-blue-700 to-indigo-900
            text-white
            p-12
          "
        >

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Academic <br /> Sutra
          </h1>

          <p className="text-lg text-gray-200 leading-8">
            Join the modern conference management platform
            for researchers, authors, reviewers, and academic institutions.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Register to access conference and research services.
          </p>

          {/* FORM */}
          <div className="grid sm:grid-cols-2 gap-5">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className={inputStyle}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className={`${inputStyle} sm:col-span-2`}
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              className={inputStyle}
            />

            <select
              name="organization"
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select Organization</option>
              <option value="IIT Delhi">IIT Delhi</option>
              <option value="IIT Bombay">IIT Bombay</option>
              <option value="IIT Madras">IIT Madras</option>
              <option value="NIT Trichy">NIT Trichy</option>
              <option value="SRM University">SRM University</option>
              <option value="Delhi University">Delhi University</option>
              <option value="Anna University">Anna University</option>
              <option value="JNTU">JNTU</option>
              <option value="Private Research Organization">
                Private Research Organization
              </option>
            </select>

            <select
              name="country"
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select Country</option>
              <option value="India">🇮🇳 India</option>
              <option value="United States">🇺🇸 United States</option>
              <option value="United Kingdom">🇬🇧 United Kingdom</option>
              <option value="Canada">🇨🇦 Canada</option>
              <option value="Germany">🇩🇪 Germany</option>
              <option value="Australia">🇦🇺 Australia</option>
              <option value="Japan">🇯🇵 Japan</option>
              <option value="China">🇨🇳 China</option>
              <option value="Singapore">🇸🇬 Singapore</option>
              <option value="France">🇫🇷 France</option>
            </select>

            <input
              type="text"
              name="scholarId"
              placeholder="Google Scholar ID"
              onChange={handleChange}
              className={inputStyle}
            />

            <input
              type="text"
              name="orcidId"
              placeholder="ORCID ID"
              onChange={handleChange}
              className={`${inputStyle} sm:col-span-2`}
            />

            <input
              type="text"
              name="dblpId"
              placeholder="DBLP ID"
              onChange={handleChange}
              className={`${inputStyle} sm:col-span-2`}
            />

            {/* PASSWORD */}
            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className={`${inputStyle} pr-12`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute right-4 top-1/2
                  -translate-y-1/2 text-gray-500
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* TERMS */}
          <div className="flex items-start gap-3 mt-6">

            <input type="checkbox" className="mt-1" />

            <p className="text-sm text-gray-600 leading-6">
              I agree to the Terms of Service, Privacy Policy,
              and conference data policies.
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            className="
              w-full mt-6 py-3 rounded-xl
              bg-gradient-to-r from-blue-700 to-indigo-900
              text-white font-semibold
              hover:opacity-90 transition
            "
          >
            Create Account
          </button>

          {/* LOGIN */}
          <div className="text-center mt-6 text-sm">

            <span className="text-gray-600">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="
                ml-2 font-semibold text-blue-700
                hover:underline
              "
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;