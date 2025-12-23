"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const FacilitiesPage = () => {
  const [selectedCampus, setSelectedCampus] = useState("lalitpur");

  useEffect(() => {
    document.title = "Facilities | Bloom Nepal School";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Explore world-class facilities at Bloom Nepal School across Lalitpur, Dharan, Biratnagar, and Itahari campuses. Modern classrooms, labs, sports facilities, and more."
    );
  }, []);

  const campuses = [
    {
      id: "lalitpur",
      name: "Lalitpur School",
      location: "Mahalaxmi, Lalitpur",
      area: "30 ropanis",
      description:
        "Located in the foothills of Sankhadevi, just 45 minutes from Kathmandu city center.",
      image: "/lalitpurLocation.jpg",
      features: [
        "Spacious Areas",
        "Natural Environment",
        "Modern Infrastructure",
        "Sports Facilities",
      ],
    },
    {
      id: "itahari",
      name: "Itahari School",
      location: "Itahari, Sunsari",
      area: "15 ropanis",
      description:
        "Our eastern school serving the Koshi region with modern facilities.",
      image: "/bloomie.png",
      features: [
        "Urban Location",
        "Modern Facilities",
        "Technology Labs",
        "Library",
      ],
    },
  ];

  const facilities = [
    {
      title: "Academic Facilities",
      icon: "📚",
      items: [
        "Smart Classrooms",
        "Science Laboratories",
        "Computer Labs",
        "Library & Resource Center",
        "Art & Music Rooms",
      ],
      color: "brandBlue",
    },
    {
      title: "Sports & Recreation",
      icon: "⚽",
      items: [
        "Football Ground",
        "Basketball Court",
        "Indoor Games",
        "Swimming Pool",
        "Gymnasium",
      ],
      color: "brandGreen",
    },
    {
      title: "Residential Facilities",
      icon: "🏠",
      items: [
        "4 Residential Houses",
        "Dining Hall",
        "Study Rooms",
        "Common Areas",
        "Medical Facility",
      ],
      color: "brandRed",
    },
    {
      title: "Support Services",
      icon: "🛠️",
      items: [
        "Transportation",
        "Cafeteria",
        "Security",
        "Maintenance",
        "Counseling Services",
      ],
      color: "brandBlue",
    },
  ];

  const accommodationOptions = [
    {
      title: "Residence & Day Scholars",
      description:
        "Students can stay with us in the residence halls or may choose to commute from home if that's an option. This mixed residential setting allows us to create a diverse cultural experience without forgetting the local taste of things.",
      icon: "🏫",
      color: "brandBlue",
    },
    {
      title: "Resident System",
      description:
        "Oh, the staff vs. student football matches on Saturdays, the rounds during the study hours, and the noise of chicken dinner in the dining hall; Bloom is really a close-knit family. There are a total of 4 hostels (residential blocks), which we call houses, that house about 130 students.",
      icon: "🏡",
      color: "brandGreen",
    },
    {
      title: "Weekday Boarding Facility",
      description:
        "We drop students at home on Friday, after the end of classes and pick up early morning before the start of the classes. This facility is available for subscription to all reasonable drop points inside the valley.",
      icon: "🚌",
      color: "brandRed",
    },
  ];

  const selectedCampusData = campuses.find(
    (campus) => campus.id === selectedCampus
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6 hover:bg-brandGreen/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Our Facilities
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">Child Centric</span>
              <br />
              <span className="text-brandRed">Facilities</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              We provide a rich environment for our students to learn and grow.
              Explore the modern facilities we offer across our campuses to
              support academic excellence and holistic development.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#campus-selection"
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Explore Our Schools
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Selection Section */}
      <section
        id="campus-selection"
        className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5"
      >
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                Our Locations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choose Your <span className="text-brandBlue">Locations</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                We strive to be consistent with the facilities we provide across
                our network of schools. However, there are differences as
                demanded by natural factors like location, weather, etc.
              </p>

              {/* Campus Selection Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {campuses.map((campus) => (
                  <button
                    key={campus.id}
                    onClick={() => setSelectedCampus(campus.id)}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCampus === campus.id
                        ? "bg-brandBlue text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {campus.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Campus Details */}
            {selectedCampusData && (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={selectedCampusData.image}
                      alt={selectedCampusData.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue mb-4">
                        {selectedCampusData.location}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {selectedCampusData.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {selectedCampusData.description}
                      </p>
                      <div className="flex items-center text-brandBlue mb-6">
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
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span className="font-semibold">
                          School Area: {selectedCampusData.area}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedCampusData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className={`w-4 h-4 mr-3 text-brandGreen`}
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
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Facilities Grid Section */}
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Our Facilities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive{" "}
                <span className="text-brandBlue">Infrastructure</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our state-of-the-art facilities support every aspect of student
                development, from academics to sports and personal growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-brandBlue/20 transition-all duration-300 hover:shadow-lg group"
                >
                  <div
                    className={`w-16 h-16 bg-${facility.color}/10 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:bg-${facility.color} group-hover:text-white transition-all duration-300`}
                  >
                    {facility.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-4 group-hover:text-${facility.color} transition-colors duration-200`}
                  >
                    {facility.title}
                  </h3>
                  <div className="space-y-3">
                    {facility.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className={`w-4 h-4 mr-3 text-${facility.color}`}
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
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Exposure Section */}
      <section className="py-16 bg-gradient-to-br from-brandGreen/5 via-white to-brandBlue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/internationalExposure.jpg"
                  alt="International Exposure"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
              <div>
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Global Perspective
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-brandBlue">International</span> Exposure
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We are graced by the visit of volunteers, teachers, interns
                  and friends from Europe and America almost all year long. This
                  provides an incredible opportunity for students to learn about
                  culture beyond the local along with learning the skillset this
                  international body comes to share.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-brandGreen">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">Cultural Exchange</span>
                  </div>
                  <div className="flex items-center text-brandGreen">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">Global Skills</span>
                  </div>
                  <div className="flex items-center text-brandGreen">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">Language Practice</span>
                  </div>
                  <div className="flex items-center text-brandGreen">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">World Perspective</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Accommodation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comfortable <span className="text-brandRed">Living Spaces</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We offer flexible accommodation options to suit different family
                needs and preferences, creating a home away from home for our
                students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accommodationOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-brandBlue/20 transition-all duration-300 hover:shadow-lg group"
                >
                  <div
                    className={`w-16 h-16 bg-${option.color}/10 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:bg-${option.color} group-hover:text-white transition-all duration-300`}
                  >
                    {option.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-4 group-hover:text-${option.color} transition-colors duration-200`}
                  >
                    {option.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Experience Excellence
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Experience Our{" "}
                <span className="text-brandBlue">Facilities</span>?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Visit our Schools to see firsthand how our world-class
                facilities support student learning and development. Schedule a
                tour today!
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
                  Schedule a Tour
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Apply for Admission
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FacilitiesPage;
