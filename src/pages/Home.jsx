import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Features from "../components/Features";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";
import heroSectionImage from "../assets/herosection.png";

const Home = () => {

  return (

    <div className="pt-16">

      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="
          relative text-white
          bg-gradient-to-br
          from-gray-900
          via-blue-900
          to-purple-900
        "
      >

        {/* Glow Effect */}
        <div
          className="
            absolute inset-0 opacity-20
            bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_40%)]
          "
        ></div>

        {/* CONTAINER */}
        <div
          className="
            relative
            w-full max-w-[1440px]
            mx-auto
            px-[10px] sm:px-6 md:px-8 lg:px-10
            py-12 sm:py-16 md:py-20
            grid md:grid-cols-2
            gap-10 items-center
          "
        >

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <h1
              className="
                font-bold leading-tight
                text-2xl sm:text-3xl
                md:text-4xl lg:text-5xl xl:text-6xl
              "
            >

              Simplifying Academia <br />

              <span
                className="
                  bg-gradient-to-r
                  from-yellow-400 to-blue-500
                  bg-clip-text text-transparent
                "
              >
                Amplifying Impact
              </span>

            </h1>

            <p
              className="
                mt-4 sm:mt-6
                text-gray-300
                text-sm sm:text-base md:text-lg
              "
            >

              Academic Sutra brings together
              researchers, institutions, and
              conferences on one powerful platform
              — making collaboration, submission,
              and management effortless.

            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-6 sm:mt-8
                flex flex-col sm:flex-row
                gap-4
                justify-center md:justify-start
              "
            >

              {/* HOME BUTTON */}
              <a href="#home">

                <button
                  className="
                    px-6 py-3 rounded
                    font-medium text-black
                    bg-gradient-to-r
                    from-yellow-400 to-blue-500
                    hover:shadow-lg
                    transition duration-300
                  "
                >
                  Get Started
                </button>

              </a>

              {/* FEATURES BUTTON */}
              <a href="#features">

                <button
                  className="
                    px-6 py-3 rounded
                    border border-gray-400
                    hover:bg-white
                    hover:text-black
                    transition duration-300
                  "
                >
                  Explore Features
                </button>

              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              flex justify-center
              md:justify-end
            "
          >

            <img
              src={heroSectionImage}
              alt="education"
              className="
                w-52 sm:w-64
                md:w-80 lg:w-96
              "
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-20"
      >
        <Services />
      </section>

      {/* FEATURES */}
      <section id="features">
        <Features />
      </section>

      {/* WHY US */}
      <section id="whyus">
        <WhyUs />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* ABOUT SECTION - Restored completely to your original layout specs */}
      <section 
        id="about"
        className="scroll-mt-10"
      >

        <div
          className="
            w-full max-w-[1440px]
            mx-auto
            px-[10px] sm:px-6 md:px-8 lg:px-10
            py-16
          "
        >

          <div
            className="
              relative overflow-hidden
              rounded-3xl
              bg-gradient-to-r
              from-gray-900
              via-blue-900
              to-purple-900
              text-white
              shadow-2xl
              p-8 md:p-14
            "
          >

            {/* Glow */}
            <div
              className="
                absolute top-0 left-0
                w-72 h-72
                bg-yellow-400/20
                rounded-full blur-3xl
              "
            ></div>

            <div
              className="
                relative z-10
                grid md:grid-cols-2
                gap-10 items-center
              "
            >

              {/* LEFT */}
              <div>

                <span
                  className="
                    inline-block
                    px-4 py-2 rounded-full
                    bg-white/10
                    text-sm mb-5
                  "
                >
                  About Platform
                </span>

                <h2
                  className="
                    text-3xl md:text-5xl
                    font-bold leading-tight
                  "
                >

                  Empowering Research &
                  Academic Collaboration

                </h2>

                <p
                  className="
                    mt-6
                    text-gray-300
                    leading-relaxed
                    text-base md:text-lg
                  "
                >

                  Academic Sutra is built to simplify
                  conference management, research
                  collaboration, paper submission,
                  reviewer workflows, and institutional
                  communication through one smart
                  academic ecosystem.

                </p>

              </div>

              {/* RIGHT STATS - Dynamic individual micro-interactions applied internally inside the grid blocks */}
              <div
                className="
                  grid grid-cols-2 gap-5
                "
              >

                {/* CONFERENCE CARD */}
                <div
                  className="
                    bg-white/10
                    backdrop-blur-md
                    rounded-2xl
                    p-6 text-center
                    border border-transparent
                    hover:border-yellow-400/30
                    hover:bg-yellow-400/5
                    hover:-translate-y-1.5
                    hover:shadow-xl
                    transition-all duration-300
                    cursor-default
                  "
                >

                  <h3 className="text-4xl font-bold text-yellow-400">
                    500+
                  </h3>

                  <p className="mt-2 text-gray-300 font-medium">
                    Conferences
                  </p>

                </div>

                {/* RESEARCHERS CARD */}
                <div
                  className="
                    bg-white/10
                    backdrop-blur-md
                    rounded-2xl
                    p-6 text-center
                    border border-transparent
                    hover:border-blue-400/30
                    hover:bg-blue-400/5
                    hover:-translate-y-1.5
                    hover:shadow-xl
                    transition-all duration-300
                    cursor-default
                  "
                >

                  <h3 className="text-4xl font-bold text-blue-400">
                    10K+
                  </h3>

                  <p className="mt-2 text-gray-300 font-medium">
                    Researchers
                  </p>

                </div>

                {/* INSTITUTIONS CARD */}
                <div
                  className="
                    bg-white/10
                    backdrop-blur-md
                    rounded-2xl
                    p-6 text-center
                    border border-transparent
                    hover:border-purple-400/30
                    hover:bg-purple-400/5
                    hover:-translate-y-1.5
                    hover:shadow-xl
                    transition-all duration-300
                    cursor-default
                  "
                >

                  <h3 className="text-4xl font-bold text-purple-400">
                    120+
                  </h3>

                  <p className="mt-2 text-gray-300 font-medium">
                    Institutions
                  </p>

                </div>

                {/* SUPPORT CARD */}
                <div
                  className="
                    bg-white/10
                    backdrop-blur-md
                    rounded-2xl
                    p-6 text-center
                    border border-transparent
                    hover:border-green-400/30
                    hover:bg-green-400/5
                    hover:-translate-y-1.5
                    hover:shadow-xl
                    transition-all duration-300
                    cursor-default
                  "
                >

                  <h3 className="text-4xl font-bold text-green-400">
                    24/7
                  </h3>

                  <p className="mt-2 text-gray-300 font-medium">
                    Support
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact">
        <Footer />
      </section>

    </div>

  );
};

export default Home;