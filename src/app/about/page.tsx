"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Bloom Nepal School";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Learn about Bloom Nepal School - inspiring passion and purpose in education. Discover our mission, vision, values, and commitment to excellence in Nepal."
    );
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
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
                  d="M12 6v6l4 2"
                />
              </svg>
              About Bloom Nepal School
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">Inspiring</span>
              <br />
              <span className="text-brandRed">Passion & Purpose</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our journey, our values, and our vision for a better future
              through world-class, passion-based education in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative order-2 lg:order-1 p-8 lg:p-12">
                <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                  Our Story
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  From a Dream to a Movement
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bloom Nepal School began with a simple yet powerful idea:
                  every child has a unique passion that, when nurtured, can
                  shape a meaningful life. What started in 2013 with 17 students
                  has grown into a thriving community spanning multiple campuses
                  and over 700 students.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We blend rigorous academics with experiential learning, giving
                  students the environment to explore, create, and lead. Our
                  campuses are designed to foster curiosity, collaboration, and
                  character.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-brandBlue">
                      700+
                    </div>
                    <div className="text-sm text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-brandGreen">
                      2
                    </div>
                    <div className="text-sm text-gray-500">Campuses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-brandRed">
                      2013
                    </div>
                    <div className="text-sm text-gray-500">Founded</div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2 h-72 lg:h-full">
                <Image
                  src="/bloom-main.jpg"
                  alt="Bloom Nepal School"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-4">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Our Core Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
                A consistent, student-centered philosophy rooted in excellence,
                innovation, and inclusion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-brandBlue/20 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-brandBlue/10 text-brandBlue flex items-center justify-center text-2xl mb-4 group-hover:bg-brandBlue group-hover:text-white transition-all">
                  📘
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brandBlue transition-colors">
                  Passion-Based Learning
                </h3>
                <p className="text-gray-600">
                  Beyond textbooks—students explore and master areas they truly
                  care about, guided by mentors and real-world projects.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-brandGreen/20 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-brandGreen/10 text-brandGreen flex items-center justify-center text-2xl mb-4 group-hover:bg-brandGreen group-hover:text-white transition-all">
                  🌿
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brandGreen transition-colors">
                  Holistic Development
                </h3>
                <p className="text-gray-600">
                  Balanced growth across intellectual, emotional, physical, and
                  social dimensions, shaping well-rounded individuals.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-brandRed/20 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-brandRed/10 text-brandRed flex items-center justify-center text-2xl mb-4 group-hover:bg-brandRed group-hover:text-white transition-all">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brandRed transition-colors">
                  Community & Diversity
                </h3>
                <p className="text-gray-600">
                  A vibrant, inclusive community representing diverse
                  backgrounds from across Nepal, learning with mutual respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all">
              <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                Mission
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Empower Every Learner
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a nurturing environment where students discover their
                passions, develop strong character, and acquire future-ready
                skills, becoming confident and compassionate leaders.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all">
              <div className="inline-flex items-center px-3 py-1 bg-brandGreen/10 rounded-full text-brandGreen text-xs font-semibold mb-4">
                Vision
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                World-Class Education in Nepal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A Nepal where every child accesses quality education that
                inspires innovation, integrity, and impact—transforming
                communities and the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
              <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293L19.707 8.12A1 1 0 0120 8.828V19a2 2 0 01-2 2z"
                  />
                </svg>
                Learn More
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to be part of the{" "}
                <span className="text-brandBlue">Bloom</span> journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore our programs, visit a campus, or talk to our team to see
                how Bloom can help your child thrive.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-brandBlue text-white rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 9a1 1 0 001 1h10a1 1 0 001-1l-2-9m-6 0V7"
                    />
                  </svg>
                  Get in Touch
                </a>
                <a
                  href="/admission"
                  className="inline-flex items-center px-8 py-4 bg-white text-brandBlue border-2 border-brandBlue rounded-xl hover:bg-brandBlue hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0116.707 9H20"
                    />
                  </svg>
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
