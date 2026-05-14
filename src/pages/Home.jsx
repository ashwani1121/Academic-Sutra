import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Features from "../components/Features";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="pt-16">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_40%)]"></div>

        {/* SAME CONTAINER AS NAVBAR */}
        <div className="relative w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="
              font-bold leading-tight
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            ">
              Simplifying Academia <br />
              <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">
                Amplifying Impact
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
              Academic Sutra brings together researchers, institutions, and conferences
              on one powerful platform — making collaboration, submission, and
              management effortless.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <button className="
                px-6 py-3 rounded font-medium text-black
                bg-gradient-to-r from-yellow-400 to-blue-500
                hover:shadow-lg transition duration-300
              ">
                Get Started
              </button>

              <button className="
                px-6 py-3 rounded border border-gray-400
                hover:bg-white hover:text-black transition duration-300
              ">
                Explore Features
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="education"
              className="w-52 sm:w-64 md:w-80 lg:w-96"
            />
          </div>

        </div>
      </section>
      <Services />
      <Features />
      <WhyUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;