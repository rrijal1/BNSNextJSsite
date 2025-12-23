"use client";

import React, { useEffect } from "react";
import BookList from "@/app/components/academics/BookList";
import MissionSection from "@/app/components/academics/MissionSection";
import Image from "next/image";

const AcademicsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Academics | Bloom Nepal School";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Discover academic excellence at Bloom Nepal School. View our comprehensive curriculum, book lists, teaching methodology, and approach to quality education."
    );
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brandGreen/10 via-white to-brandBlue/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/30"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-brandGreen/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-brandBlue/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-brandRed/5 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6 hover:bg-brandGreen/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg
                className="w-4 h-4 mr-2 animate-spin-slow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Academic Excellence
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Academic Excellence
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gray-700">
                at
              </span>{" "}
              <span className="text-brandBlue">Bloom Nepal</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              Our innovative curriculum is designed to foster intellectual
              curiosity, critical thinking, and a lifelong love for learning
              through hands-on experiences.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 text-brandBlue font-semibold rounded-full border-2 border-brandBlue/20 bg-brandWhite/20 hover:border-brandBlue hover:bg-brandBlue/5 transform hover:scale-105 transition-all duration-300">
                Explore Curriculum
              </button>
              <button className="px-8 py-3 bg-white text-brandBlue font-semibold rounded-full border-2 border-brandBlue/20 hover:border-brandBlue hover:bg-brandBlue/5 transform hover:scale-105 transition-all duration-300">
                View Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Book List Section */}
          <section className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-brandBlue/20 transition-all duration-300">
            <div className="bg-brandBlue px-8 py-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Our Curriculum & Resources
              </h2>
            </div>
            <div className="p-8">
              <BookList />
            </div>
          </section>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-brandGreen/20 transition-all duration-300">
            <MissionSection />
          </div>

          {/* Hands-On Learning Section */}
          <section className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-brandGreen/20 transition-all duration-300">
            <div className="lg:flex items-center">
              <div className="lg:w-1/2 p-8 lg:p-12 transform group-hover:translate-x-1 transition-transform duration-300">
                <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6 hover:bg-brandGreen/20 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                    />
                  </svg>
                  Experiential Learning
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-brandGreen transition-colors duration-300">
                  <span className="text-brandBlue">Hands-On</span> Learning
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    We encourage students to go out onto the field and get their
                    hands dirty. This, we believe, is the only way to really
                    learn and understand concepts deeply.
                  </p>
                  <p className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Whether it is a Math/Science or a Social Studies class, we
                    maximize the use of in-class and out-of-the-class activities
                    for students to engage with and truly enjoy each topic.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandGreen/10 text-brandGreen font-medium hover:bg-brandGreen hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Field Trips
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandBlue/10 text-brandBlue font-medium hover:bg-brandBlue hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Interactive Projects
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandRed/10 text-brandRed font-medium hover:bg-brandRed hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Real-World Applications
                  </span>
                </div>
              </div>

              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 lg:aspect-none lg:h-full">
                  <Image
                    src="/flying-drone.jpg"
                    alt="Students engaged in hands-on learning with drone technology"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover lg:rounded-r-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brandGreen/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-brandGreen rounded-full flex items-center justify-center shadow-lg animate-bounce hover:animate-pulse transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Passion First Section */}
          <section className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-brandRed/20 transition-all duration-300">
            <div className="lg:flex items-center">
              <div className="lg:w-1/2 relative lg:order-1 overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 lg:aspect-none lg:h-full">
                  <Image
                    src="/guitar-guys.JPG"
                    alt="Students pursuing their passion in music"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover lg:rounded-l-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brandRed/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-brandRed rounded-full flex items-center justify-center shadow-lg animate-pulse hover:animate-bounce transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 lg:order-2 transform group-hover:-translate-x-1 transition-transform duration-300">
                <div className="inline-flex items-center px-4 py-2 bg-brandRed/10 rounded-full text-brandRed text-sm font-medium mb-6 hover:bg-brandRed/20 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Student-Centered Approach
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-brandRed transition-colors duration-300">
                  <span className="text-brandRed">Passion</span> First
                  Philosophy
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    We deeply believe that passion is a major driving component
                    of one&apos;s success in life. When students are passionate
                    about what they&apos;re learning, magic happens.
                  </p>
                  <p className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    Bloom Nepal is an institution with the right set of tools
                    and environment for fostering and nurturing each
                    child&apos;s unique passion, helping them discover their
                    potential and pursue their dreams.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandRed/10 text-brandRed font-medium hover:bg-brandRed hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Individual Growth
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandGreen/10 text-brandGreen font-medium hover:bg-brandGreen hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Creative Expression
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandBlue/10 text-brandBlue font-medium hover:bg-brandBlue hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Holistic Development
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AcademicsPage;
