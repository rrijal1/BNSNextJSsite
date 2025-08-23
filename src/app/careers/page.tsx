"use client";

import React, { useState } from "react";
import Link from "next/link";

const CareersPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");

  const jobOpenings = [
    {
      title: "Science Teacher",
      location: "Lalitpur",
      type: "Full-time",
      department: "Academic",
      experience: "2-5 years",
      description:
        "We are looking for a passionate Science teacher to inspire students in Physics, Chemistry, and Biology. Join our innovative teaching team and help shape young minds.",
      requirements: [
        "Bachelor's degree in Science or related field",
        "Teaching certification",
        "Experience with modern teaching methods",
        "Excellent communication skills",
      ],
    },
    {
      title: "Math Teacher",
      location: "Itahari",
      type: "Full-time",
      department: "Academic",
      experience: "1-3 years",
      description:
        "We are seeking a dedicated Math teacher to make mathematics engaging and accessible for students of all levels. Experience with technology integration preferred.",
      requirements: [
        "Bachelor's degree in Mathematics or Education",
        "Strong analytical skills",
        "Patience and creativity",
        "Ability to work with diverse learners",
      ],
    },
    {
      title: "English Teacher",
      location: "Lalitpur",
      type: "Part-time",
      department: "Academic",
      experience: "1-2 years",
      description:
        "Join our English department to help students develop strong communication skills and literary appreciation. Focus on creative writing and critical thinking.",
      requirements: [
        "Bachelor's degree in English or Literature",
        "Native or near-native English proficiency",
        "Creative teaching approach",
        "Experience with project-based learning",
      ],
    },
    {
      title: "IT Coordinator",
      location: "Lalitpur",
      type: "Full-time",
      department: "Technology",
      experience: "3-5 years",
      description:
        "Lead our technology initiatives and support digital learning across all campuses. Manage IT infrastructure and train staff on educational technology.",
      requirements: [
        "Bachelor's degree in IT or Computer Science",
        "Network administration experience",
        "Educational technology knowledge",
        "Leadership skills",
      ],
    },
    {
      title: "Student Counselor",
      location: "Itahari",
      type: "Full-time",
      department: "Student Services",
      experience: "2-4 years",
      description:
        "Provide academic and personal guidance to students. Help create a supportive environment for student growth and well-being.",
      requirements: [
        "Master's degree in Psychology or Counseling",
        "Counseling certification",
        "Experience with adolescents",
        "Multicultural competency",
      ],
    },
  ];

  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Competitive Salary",
      description:
        "We offer competitive compensation packages with performance-based incentives.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Professional Development",
      description:
        "Continuous learning opportunities, workshops, and conference attendance support.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance and wellness programs for you and your family.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Learning Resources",
      description:
        "Access to extensive educational materials, books, and digital learning platforms.",
    },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description:
        "We strive for the highest standards in teaching and learning, continuously improving our methods and outcomes.",
      color: "brandBlue",
    },
    {
      title: "Innovation & Creativity",
      description:
        "We embrace new ideas, technologies, and approaches to create engaging learning experiences.",
      color: "brandGreen",
    },
    {
      title: "Inclusive Community",
      description:
        "We celebrate diversity and create an environment where everyone feels valued and supported.",
      color: "brandRed",
    },
  ];

  const filteredJobs =
    selectedLocation === "all"
      ? jobOpenings
      : jobOpenings.filter(
          (job) => job.location.toLowerCase() === selectedLocation
        );
  const locations = [
    "all",
    ...new Set(jobOpenings.map((job) => job.location.toLowerCase())),
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-brandBlue/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-brandGreen/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-brandRed/5 rounded-full animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6 hover:bg-brandBlue/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                />
              </svg>
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-brandBlue via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Careers
              </span>{" "}
              at
              <br />
              <span className="bg-gradient-to-r from-brandGreen to-green-600 bg-clip-text text-transparent">
                Bloom Nepal
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              Shape the future of education in Nepal. Join our passionate team
              of educators and professionals dedicated to nurturing young minds
              and building a brighter tomorrow.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#openings"
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                  />
                </svg>
                View Open Positions
              </a>
              <Link
                href="/contact"
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6">
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
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why{" "}
                <span className="bg-gradient-to-r from-brandBlue to-blue-600 bg-clip-text text-transparent">
                  Work
                </span>{" "}
                With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At Bloom Nepal School, we believe in creating an environment
                where educators can thrive, innovate, and make a lasting impact
                on students' lives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-brandBlue/20 transition-all duration-300 hover:shadow-md group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${value.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg
                      className={`w-8 h-8 text-${value.color}`}
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
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brandBlue transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-brandRed/10 rounded-full text-brandRed text-sm font-medium mb-6">
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
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                Benefits & Perks
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-brandRed to-red-600 bg-clip-text text-transparent">
                  Comprehensive
                </span>{" "}
                Benefits Package
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We invest in our team members' success and well-being with
                competitive benefits and growth opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brandBlue/20 transition-all duration-300 hover:shadow-md text-center group"
                >
                  <div className="w-16 h-16 bg-brandBlue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brandBlue transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                  />
                </svg>
                Current Openings
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-brandBlue to-blue-600 bg-clip-text text-transparent">
                  Join
                </span>{" "}
                Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Explore exciting opportunities to make a difference in education
                and grow your career with us.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${selectedLocation === location ? "bg-gradient-to-r from-brandBlue to-blue-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"}`}
                  >
                    {location === "all"
                      ? "All Locations"
                      : location.charAt(0).toUpperCase() + location.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-brandBlue/20 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandGreen/10 text-brandGreen">
                            {job.type}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandRed/10 text-brandRed">
                            {job.experience}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brandBlue transition-colors duration-200">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-4">
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{job.location}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {job.description}
                        </p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Key Requirements:
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIndex) => (
                              <li
                                key={reqIndex}
                                className="flex items-start text-gray-600"
                              >
                                <svg
                                  className="w-4 h-4 mr-2 mt-0.5 text-brandGreen flex-shrink-0"
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
                                <span className="text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:ml-8 flex-shrink-0">
                        <button className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 bg-brandBlue text-white rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold group-hover:shadow-lg">
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
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No positions available in {selectedLocation}
                </h3>
                <p className="text-gray-600">
                  Try selecting a different location or check back soon for new
                  opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get In Touch
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Don't See the{" "}
                <span className="bg-gradient-to-r from-brandBlue to-blue-600 bg-clip-text text-transparent">
                  Perfect
                </span>{" "}
                Role?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're always looking for talented individuals who share our
                passion for education. Send us your resume and let's explore how
                you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:careers@bloom.edu.np"
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Your Resume
                </a>
                <Link
                  href="/contact"
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
