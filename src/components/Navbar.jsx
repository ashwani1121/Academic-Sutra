import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "FEATURES",
    "WHY US",
    "CONTACT",
  ];

  return (

    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

      {/* Responsive Container */}
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2"
          >

            <div
              className="
                w-8 h-8 sm:w-9 sm:h-9
                flex items-center justify-center
                rounded-full
                bg-gradient-to-r
                from-yellow-400
                via-blue-500
                to-purple-500
                text-white font-bold
                text-xs sm:text-sm
              "
            >
              AS
            </div>

            <h1
              className="
                text-base sm:text-lg md:text-xl lg:text-2xl
                font-bold
                bg-gradient-to-r
                from-yellow-400
                via-blue-500
                to-purple-500
                bg-clip-text text-transparent
              "
            >
              Academic Sutra
            </h1>

          </Link>

          {/* Desktop Menu */}
          <nav
            className="
              hidden md:flex items-center
              space-x-6 lg:space-x-8
              text-sm lg:text-base
              font-medium text-gray-800
            "
          >

            {navItems.map((item, i) => {

              const sectionId =
                item === "HOME"
                  ? "/"
                  : `#${item
                    .toLowerCase()
                    .replace(" ", "")}`;

              return item === "HOME" ? (

                <button
                  key={i}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });

                    setOpen(false);
                  }}
                  className="
      relative
      after:content-['']
      after:absolute
      after:w-0 after:h-[2px]
      after:left-0 after:-bottom-1
      after:bg-gradient-to-r
      after:from-yellow-400
      after:to-blue-500
      after:transition-all
      after:duration-300
      hover:after:w-full
      hover:bg-gradient-to-r
      hover:from-yellow-400
      hover:to-blue-500
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  {item}
                </button>

              ) : (

                <a
                  key={i}
                  href={sectionId}
                  className="
                    relative
                    after:content-['']
                    after:absolute
                    after:w-0 after:h-[2px]
                    after:left-0 after:-bottom-1
                    after:bg-gradient-to-r
                    after:from-yellow-400
                    after:to-blue-500
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    hover:bg-gradient-to-r
                    hover:from-yellow-400
                    hover:to-blue-500
                    hover:bg-clip-text
                    hover:text-transparent
                  "
                >
                  {item}
                </a>

              );

            })}

          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">

            <Link to="/login">

              <button
                className="
                  px-4 py-2 border border-gray-300
                  rounded text-sm
                  hover:bg-gray-900
                  hover:text-white
                  transition
                "
              >
                Login
              </button>

            </Link>

            <Link to="/signup">

              <button
                className="
                  px-4 py-2 text-black rounded
                  font-medium text-sm
                  bg-gradient-to-r
                  from-yellow-400
                  to-blue-500
                  hover:shadow-lg
                  transition duration-300
                "
              >
                Sign Up
              </button>

            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">

            <button
              onClick={() => setOpen(!open)}
            >

              {open ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div
          className="
            md:hidden bg-white border-t
            px-[10px] sm:px-6
            py-4 space-y-4
            text-gray-800
          "
        >

          {navItems.map((item, i) => {

            const sectionId =
              item === "HOME"
                ? "/"
                : `#${item
                  .toLowerCase()
                  .replace(" ", "")}`;

            return item === "HOME" ? (

              <button
                key={i}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });

                  setOpen(false);
                }}
                className="
      block text-sm font-medium
      hover:text-blue-500
    "
              >
                {item}
              </button>

            ) : (

              <a
                key={i}
                href={sectionId}
                className="
                  block text-sm font-medium
                  hover:text-blue-500
                "
                onClick={() => setOpen(false)}
              >
                {item}
              </a>

            );

          })}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-2">

            <Link
              to="/login"
              onClick={() => setOpen(false)}
            >

              <button className="w-full border py-2 rounded">
                Login
              </button>

            </Link>

            <Link
              to="/signup"
              onClick={() => setOpen(false)}
            >

              <button
                className="
                  w-full bg-yellow-400
                  py-2 rounded font-medium
                "
              >
                Sign Up
              </button>

            </Link>

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;