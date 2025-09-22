"use client";

import React, { useState } from "react";
import Image from "next/image";

const TeamPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const teamMembers = [
    {
      name: "Ram K. Rijal",
      role: "Chairman",
      department: "Leadership",
      imageUrl: "/ram-rijal.jpg",
      bio: "Education and workforce enthusiast serving as Chairman of Bloom Nepal School. Focuses on strategic expansion activities and serves as the go-to person for investment and accountability matters. Also teaches mathematics and works closely with talented students from across the country.",
      email: "rijal.ramk@bloom.edu.np",
      qualifications: "Economics, Mathematics",
    },
    {
      name: "Ajay Shrestha",
      role: "Executive Director",
      department: "Leadership",
      imageUrl: "/face-painting.jpeg",
      bio: "Executive Director responsible for financial oversight and budgeting at Bloom Nepal School. Serves as the primary contact for accounting and reporting matters while also teaching computer science to students.",
      email: "ajay.shrestha@bloom.edu.np",
      qualifications: "Computer Science",
    },
    {
      name: "Surya Karki",
      role: "Director of Business",
      department: "Leadership",
      imageUrl: "/bloomie.png",
      bio: "Director of Business responsible for identifying and implementing expansion projects at Bloom Nepal School. Focuses on strategic growth initiatives including building new schools and securing new investors to strengthen the organization's development.",
      email: "surya.karki@bloom.edu.np",
      qualifications: "Education",
    },
    {
      name: "Rabindra Maharjan",
      role: "Director of Community Relationships",
      department: "Leadership",
      imageUrl: "/bloomie.png",
      bio: "Director of Community Relationships focused on building strong community partnerships and fostering a congenial environment among all stakeholders at Bloom Nepal School. Works to strengthen relationships between the school, families, and the broader community.",
      email: "raby255@hotmail.com",
      qualifications: "Community Relations",
    },
    {
      name: "Dinesh Budhathoki",
      role: "Director of Operations at Itahari",
      department: "Leadership",
      imageUrl: "/bloomie.png",
      bio: "Director of Operations responsible for overseeing the overall management of daily operations at Bloom Nepal School Itahari campus. Ensures smooth functioning of all operational aspects and maintains high standards of institutional excellence at the Itahari location.",
      email: "dinesh@bloom.edu.np",
      qualifications: "Operations Management",
    },
    {
      name: "Ajit Pokharel",
      role: "Head of Administrative Operations",
      department: "Student Services",
      imageUrl: "/bloomie.png",
      bio: "Head of Administrative Operations overseeing non-teaching staff administration at Bloom Nepal School. Coordinates closely with teaching staff to ensure smooth school operations and serves as the primary communication officer for the institution.",
      email: "ajitpokhrel@bloom.edu.np",
      qualifications: "Education",
    },
    {
      name: "Rajesh Thapa",
      role: "Head of Science Department",
      department: "Academic",
      imageUrl: "/bloomie.png",
      bio: "Experienced science educator passionate about making complex concepts accessible and engaging for students.",
      email: "rajesh@bloom.edu.np",
      qualifications: "M.Sc. Physics, B.Ed.",
    },
    {
      name: "Maya Gurung",
      role: "English Department Head",
      department: "Academic",
      imageUrl: "/bloomie.png",
      bio: "Literature enthusiast committed to developing students' communication skills and critical thinking abilities.",
      email: "maya@bloom.edu.np",
      qualifications: "M.A. English Literature, TESOL Certified",
    },
    {
      name: "Madhuri Basnet",
      role: "Section In-Charge - Junior",
      department: "Academic",
      imageUrl: "/bloomie.png",
      bio: "Section In-Charge responsible for overseeing junior classes at Bloom Nepal School. Serves as the primary point of contact for all matters related to junior student education and believes that teaching is the art of extracting the best out of every student.",
      email: "chhetrimadhuri@bloom.edu.np",
      qualifications: "Education",
    },
    {
      name: "Yasoda Devin Kaphle",
      role: "Teacher",
      department: "Academic",
      imageUrl: "/bloomie.png",
      bio: "Nepali language teacher specializing in secondary level education at Bloom Nepal School. Has been teaching Nepali to secondary students since 2013 and serves as the Section In-Charge for secondary levels, acting as the primary contact for academic and administrative concerns relating to secondary students. Enjoys learning new things, connecting with people, and cooking.",
      email: "yasoda.pokharel@bloom.edu.np",
      qualifications: "Nepali Language Education",
    },
    {
      name: "Mohit Rauniyar",
      role: "Advisor",
      department: "Advisors",
      imageUrl: "/bloomie.png",
      bio: "Strategic advisor providing guidance on institutional development and business operations at Bloom Nepal School. Leverages extensive business expertise to support the school's growth initiatives and organizational excellence.",
      email: "mohit@bloom.edu.np",
      qualifications: "MBA",
    },
    {
      name: "Anju Maharjan",
      role: "Accountant",
      department: "Student Services",
      imageUrl: "/bloomie.png",
      bio: "School Accountant responsible for managing all financial accounts and billing operations at Bloom Nepal School. Serves as the primary contact for account-related questions, billing concerns, and financial administrative matters.",
      email: "anju.maharjan@bloom.edu.np",
      qualifications: "Accounting",
    },
    {
      name: "Deepak Maharjan",
      role: "Sports Coordinator",
      department: "Student Services",
      imageUrl: "/bloomie.png",
      bio: "Former national athlete promoting physical fitness and team spirit among students through various sports programs.",
      email: "deepak@bloom.edu.np",
      qualifications: "B.P.Ed, Sports Medicine Certificate",
    },
  ];

  const departments = [
    "all",
    "Leadership",
    "Academic",
    "Advisors",
    "Student Services",
  ];
  const filteredMembers =
    selectedDepartment === "all"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === selectedDepartment
        );

  const getDepartmentColor = (dept: string) => {
    switch (dept) {
      case "Leadership":
        return "brandBlue";
      case "Academic":
        return "brandGreen";
      case "Advisors":
        return "brandRed";
      case "Student Services":
        return "brandBlue";
      default:
        return "brandBlue";
    }
  };

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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              Meet Our Team
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-brandBlue via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Dedicated
              </span>
              <br />
              <span className="bg-gradient-to-r from-brandGreen to-green-600 bg-clip-text text-transparent">
                Educators
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              Meet the passionate professionals who are committed to nurturing
              young minds and shaping the future leaders of Nepal through
              excellence in education.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#team-members"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Meet Our Team
              </a>
              <a
                href="/careers"
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                  />
                </svg>
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-2xl p-8 border border-gray-100 hover:border-brandBlue/20 transition-all duration-300 hover:shadow-md group">
                <div className="w-16 h-16 bg-brandBlue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition-all duration-300">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {teamMembers.length}+
                </h3>
                <p className="text-gray-600 font-medium">Team Members</p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 border border-gray-100 hover:border-brandGreen/20 transition-all duration-300 hover:shadow-md group">
                <div className="w-16 h-16 bg-brandGreen/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandGreen group-hover:bg-brandGreen group-hover:text-white transition-all duration-300">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 border border-gray-100 hover:border-brandRed/20 transition-all duration-300 hover:shadow-md group">
                <div className="w-16 h-16 bg-brandRed/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandRed group-hover:bg-brandRed group-hover:text-white transition-all duration-300">
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
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">4</h3>
                <p className="text-gray-600 font-medium">Departments</p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 border border-gray-100 hover:border-brandBlue/20 transition-all duration-300 hover:shadow-md group">
                <div className="w-16 h-16 bg-brandBlue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition-all duration-300">
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
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Students Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team-members" className="py-16">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-brandBlue to-blue-600 bg-clip-text text-transparent">
                  Professionals
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Our diverse team of experienced educators and professionals work
                together to provide exceptional learning experiences for our
                students.
              </p>

              {/* Department Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                      selectedDepartment === dept
                        ? "bg-gradient-to-r from-brandBlue to-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {dept === "all" ? "All Departments" : dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-brandBlue/20 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${getDepartmentColor(member.department)}/10 text-${getDepartmentColor(member.department)} mb-3`}
                      >
                        {member.department}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brandBlue transition-colors duration-200">
                        {member.name}
                      </h3>
                      <p className="text-brandBlue font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {member.qualifications}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div className="flex items-center justify-between">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center text-brandBlue hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                      >
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
                        Contact
                      </a>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brandBlue hover:text-white transition-all duration-200 cursor-pointer">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No team members in {selectedDepartment}
                </h3>
                <p className="text-gray-600">
                  Try selecting a different department or view all team members.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                  />
                </svg>
                Join Our Mission
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ready to Make a{" "}
                <span className="bg-gradient-to-r from-brandBlue to-blue-600 bg-clip-text text-transparent">
                  Difference
                </span>
                ?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our passionate team of educators and help us shape the
                future of education in Nepal. We&apos;re always looking for
                dedicated professionals who share our vision.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/careers"
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
                  View Career Opportunities
                </a>
                <a
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
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
