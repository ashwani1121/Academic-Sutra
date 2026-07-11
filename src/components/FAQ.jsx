import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Academic Sutra?",
    answer: "Academic Sutra is a modern platform designed for conference management, research collaboration, paper submissions, and e-learning activities.",
  },
  {
    question: "How can I submit a research paper?",
    answer: "You can submit your research paper through the paper submission portal by uploading your abstract, manuscript, and required documents.",
  },
  {
    question: "Can I participate in international conferences?",
    answer: "Yes, Academic Sutra supports global conferences and allows researchers, students, and professionals to participate worldwide.",
  },
  {
    question: "Does the platform provide reviewer management?",
    answer: "Yes, organizers can assign reviewers manually or automatically and track the review process efficiently.",
  },
  {
    question: "Is certificate generation available?",
    answer: "Yes, certificates for participation, presentations, workshops, and conferences can be generated automatically.",
  },
  {
    question: "Can I access webinars and e-learning resources?",
    answer: "Yes, the platform provides webinars, workshops, online learning materials, and digital academic resources.",
  },
  {
    question: "Is my conference and research data secure?",
    answer: "Absolutely. Academic Sutra uses secure authentication and role-based access to protect user and conference data.",
  },
  {
    question: "Can organizers manage multiple conference tracks?",
    answer: "Yes, organizers can create and manage multiple tracks, sessions, schedules, and speaker presentations.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-gray-50">
      <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-7 max-w-3xl mx-auto">
            Find answers to common questions about Academic Sutra, conference management, research collaboration, and learning resources.
          </p>
        </div>
        {/* FAQ Items */}
        <div className="space-y-5 max-w-[4xl] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-gray-50 transition duration-300"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex items-center justify-center text-gray-700">
                  {active === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  active === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm sm:text-base text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;