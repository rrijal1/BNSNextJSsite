"use client";
import Image from "next/image";
import CTAInlink from "@/app/components/ui/CTAInLink";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";
import HeroSection from "@/app/components/ui/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {" "}
      <WhatsAppButton />
      {/* Hero Section */}
      <HeroSection className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20 -z-10">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-brandBlue/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-brandGreen/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-brandRed/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-brandBlue text-sm font-semibold mb-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <svg
                  className="w-4 h-4 mr-2 text-brandBlue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Excellence in Education
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="block text-gray-900">Welcome to</span>
                <span className="bg-gradient-to-r from-brandBlue via-brandGreen to-brandBlue bg-clip-text text-transparent">
                  Bloom Nepal School
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Nurturing Passion, Shaping the Future – A Center of Excellence
                in Education. Where every student&apos;s potential is recognized
                and nurtured to create global citizens of tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CTAInlink
                  linkto="/admission"
                  className="px-6 py-3 bg-brandBlue text-white rounded-lg font-medium hover:bg-brandBlue/90 transition-colors duration-200"
                >
                  Apply for Admission
                </CTAInlink>
                <CTAInlink
                  linkto="/facilities"
                  className="px-6 py-3 bg-white text-brandBlue border-2 border-brandBlue rounded-lg font-medium transition-colors duration-200  hover:bg-brandBlue hover:text-white"
                >
                  Explore Facilities
                </CTAInlink>
              </div>
              <div className="mt-8 flex flex-col items-center lg:items-start space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative flex -space-x-3">
                    {[
                      "/art-on-face.jpg",
                      "/face-painting.jpeg",
                      "/group-on-back.jpg",
                      "/guitar-guys.JPG",
                    ].map((src, index) => (
                      <Link
                        href="/alumni"
                        key={src}
                        className="group relative transition-all duration-300 hover:-translate-y-1"
                        aria-label="View our alumni"
                      >
                        <div
                          className="w-12 h-12 rounded-full border-2 border-white bg-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-110"
                          style={{
                            zIndex: 5 - index,
                            boxShadow:
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                          }}
                        >
                          <Image
                            src={src}
                            alt={`Student ${index + 1}`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                            priority={true}
                            sizes="48px"
                            quality={85}
                          />
                        </div>
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full whitespace-nowrap shadow-md transition-opacity duration-200">
                          Meet Our Alumni
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="text-gray-700">
                    <p className="text-base font-medium">700+ Happy Students</p>
                    <p className="text-sm text-gray-500">and counting...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <Image
                src="/HomePageImageDrone.jpg"
                alt="Bloom Nepal School Campus - Aerial View"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                quality={90}
              />
              <div className="absolute bottom-4 left-6 z-10 ">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white whitespace-nowrap max-w-[calc(100vw-2rem)] overflow-hidden">
                  <span className="flex-shrink-0 w-2 h-2 bg-brandGreen rounded-full mr-2 animate-pulse"></span>
                  <span className="truncate">Live: Campus Tour Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6 text-brandBlue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </HeroSection>
      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Students Card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="max-w-4xl mx-auto">
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
                  For Students
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Start Your <span className="text-brandBlue">Bloom</span>{" "}
                  Journey
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  Discover our programs, visit our campuses, and begin your
                  application process today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    aria-label="Schedule a tour"
                    key={"schedule-tour"}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-brandBlue text-brandBlue font-semibold rounded-2xl hover:bg-brandBlue/5 transition-all duration-300 w-full sm:w-auto"
                  >
                    Schedule a Tour
                  </Link>
                  <Link
                    href="/admission"
                    aria-label="Apply for admission"
                    key={"apply-admission"}
                    className="inline-flex items-center justify-center px-8 py-4 bg-brandBlue text-white font-semibold rounded-2xl hover:bg-brandBlue/90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Friends & Well-wishers Card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="max-w-4xl mx-auto">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Friends & Well-wishers
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Connect With <span className="text-brandGreen">Bloom</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  We are committed to reforming education in Nepal. Whether you
                  want to be an investor, innovator, mentor, or volunteer, we
                  welcome you with open arms to join our mission.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="space-y-4">
                    <Link
                      href="mailto:info@bloom.edu.np"
                      aria-label="Email us"
                      key={"email-us"}
                      className="flex items-center text-gray-700 hover:text-brandGreen transition-colors"
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      info@bloomn.edu.np
                    </Link>
                    <Link
                      href="tel:+9775530190"
                      aria-label="Call us"
                      key={"call-us"}
                      className="flex items-center text-gray-700 hover:text-brandGreen transition-colors"
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +977 9851147140
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://wa.me/+9779841207231"
                      target="_blank"
                      key={"whatsapp"}
                      rel="noopener noreferrer"
                      className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://facebook.com/bloomnepal"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={"facebook"}
                      className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="w-full bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5  py-16 md:py-24">
        <div className="w-full md:px-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Excellence in{" "}
              <span className="bg-gradient-to-r from-brandBlue to-brandGreen bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our impact in the education sector speaks for itself
            </p>

            <div className="grid w-full items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-25 h-20 bg-brandGreen/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl px-8 mx-12 font-bold text-brandGreen">
                    80%
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Top Scholars
                </h3>
                <p className="text-gray-600">
                  Graduates with prestigious scholarships
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-25 h-20 bg-brandBlue/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-brandBlue">
                    700+
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Students
                </h3>
                <p className="text-gray-600">
                  Nationwide network of bright minds
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-25 h-20 bg-brandRed/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-brandRed">35+</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Districts
                </h3>
                <p className="text-gray-600">Represented across Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="w-full md:px-8 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-brandBlue to-brandGreen bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Guiding principles that shape our educational philosophy and
              community
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brandRed/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-brandRed"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brandRed mb-3">
                  Passion-Based Learning
                </h3>
                <p className="text-gray-600">
                  We value sports, arts, science, and every passion equally. Our
                  mission is to align academic growth with each student&apos;s
                  unique interests.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-brandGreen/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-brandGreen"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brandGreen mb-3">
                  Inspiring Environment
                </h3>
                <p className="text-gray-600">
                  Surrounded by passionate teachers and peers, our students
                  naturally discover and develop their interests in a nurturing
                  and stimulating setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Student Work */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-brandGreen/10 via-white to-brandBlue/10">
        <div className="w-full md:px-8 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student{" "}
              <span className="bg-gradient-to-r from-brandBlue to-brandGreen bg-clip-text text-transparent">
                Creations
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Discover what our students are building, creating, and achieving
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <CTAInlink
                linkto="/stories"
                className="px-6 py-3 bg-brandBlue text-white rounded-lg hover:bg-brandBlue/90 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    ></path>
                  </svg>
                  Stories
                </div>
              </CTAInlink>

              <CTAInlink
                linkto="/events"
                className="px-6 py-3 bg-brandGreen text-white rounded-lg hover:bg-brandGreen/90 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Events
                </div>
              </CTAInlink>

              <CTAInlink
                linkto="/calendar"
                className="px-6 py-3 bg-brandRed text-white rounded-lg hover:bg-brandRed/90 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Calendar
                </div>
              </CTAInlink>
            </div>
          </div>
        </div>
      </section>
      {/* News & Events */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="w-full md:px-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center gap-6 mb-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-brandBlue to-brandGreen bg-clip-text text-transparent">
                    News & Events
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Latest updates and happenings from our campuses
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <CTAInlink
                  linkto="/calendar"
                  className="px-6 py-2.5 bg-brandBlue text-white rounded-lg hover:bg-brandBlue/90 transition-colors duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  View Calendar
                </CTAInlink>
                <CTAInlink
                  linkto="/stories"
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    ></path>
                  </svg>
                  All News
                </CTAInlink>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event Card 1 */}
              <Link
                href="/events/inter-school-robotics-challenge"
                key={"inter-school-robotics-challenge"}
                aria-label="Inter-school Robotics Challenge"
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-brandGreen/10 text-brandGreen text-xs font-medium rounded-full">
                    Upcoming
                  </span>
                  <span className="text-sm text-gray-500">Sep 28, 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brandBlue transition-colors">
                  Inter-school Robotics Challenge
                </h3>
                <p className="text-gray-600 mb-4">
                  Showcase innovation and teamwork in this year&apos;s robotics
                  meet featuring schools from across the region.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Lalitpur Campus
                </div>
              </Link>

              {/* Event Card 2 */}
              <Link
                href="/events/creative-arts-week"
                key={"creative-arts-week"}
                aria-label="Creative Arts Week"
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-brandBlue/10 text-brandBlue text-xs font-medium rounded-full">
                    Ongoing
                  </span>
                  <span className="text-sm text-gray-500">Aug 20–26, 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brandBlue transition-colors">
                  Creative Arts Week
                </h3>
                <p className="text-gray-600 mb-4">
                  A celebration of creativity with workshops, exhibitions, and
                  performances by our talented students.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Both Campuses
                </div>
              </Link>

              {/* News Card */}
              <Link
                href="/stories/grade-x-results"
                key={"grade-x-results"}
                aria-label="Grade X Board Results Announced"
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-brandRed/10 text-brandRed text-xs font-medium rounded-full">
                    Highlights
                  </span>
                  <span className="text-sm text-gray-500">Aug 15, 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brandBlue transition-colors">
                  Grade X Board Results Announced
                </h3>
                <p className="text-gray-600 mb-4">
                  We are proud to announce outstanding results with 92% of
                  students scoring A+ and distinctions in multiple subjects.
                </p>
                <div className="inline-flex items-center text-brandBlue font-medium group-hover:underline">
                  Read full story
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Alumni Highlights */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-brandBlue to-brandGreen bg-clip-text text-transparent">
              Alumni Highlights
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Where Bloom graduates continue their journey of excellence and make
            a global impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Saraswati K.",
              degree: "Computer Science",
              university: "Pulchowk Campus",
              achievement:
                "Led the robotics club and now researches AI for social impact at Google AI.",
              image: "/alumni/saraswati.jpg",
            },
            {
              name: "Anish R.",
              degree: "Economics",
              university: "Ashoka University",
              achievement:
                "Debate captain; received a full merit scholarship and now works at the World Bank.",
              image: "/alumni/anish.jpg",
            },
            {
              name: "Prabina S.",
              degree: "Design",
              university: "Kathmandu University",
              achievement:
                "Arts fest winner; now a senior UX designer at Microsoft, specializing in human-centered design.",
              image: "/alumni/prabina.jpg",
            },
          ].map((alumni, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-brandBlue/10 to-brandGreen/10 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 -mt-12 mb-4">
                  <div className="w-16 h-16 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {alumni.name}
                    </h3>
                    <p className="text-sm text-brandBlue">{alumni.degree}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-left">
                  {alumni.achievement}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2 text-brandGreen"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 011.21-.502l4 2.5a1 1 0 01-1.078 1.682l-3.5-2.187a1 1 0 00-1.07 0l-3.5 2.187a1 1 0 01-1.562-.795v-5a1 1 0 01.636-.932l4-1.714a1 1 0 01.26-.044l3.5.013v-2.7l-6-2.4zM3 15.054v5.2a1 1 0 001.447.894L10 18.118l5.553 2.03a1 1 0 001.447-.894v-5.2a1 1 0 00-.553-.894l-5-2.25a1 1 0 00-.894 0l-5 2.25a1 1 0 00-.553.894z" />
                  </svg>
                  {alumni.university}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAInlink
            linkto="/alumni"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brandBlue hover:bg-brandBlue/90 transition-colors duration-200"
          >
            Explore Full Alumni Network
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </CTAInlink>
        </div>
      </section>
      {/* FAQ Teaser */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-brandBlue to-brandGreen bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Bloom Nepal School
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              question: "What are the admission steps?",
              answer:
                "Our admission process includes three simple steps: 1) Submit an online application, 2) Complete an entrance assessment, and 3) Attend a family interview. Our admissions team will guide you through each step and answer any questions you may have.",
            },
            {
              question: "Do you offer scholarships?",
              answer:
                "Yes, we offer both need-based and merit-based scholarships to support talented students. Our scholarship programs are designed to make quality education accessible. Please visit our Scholarships page for detailed information about eligibility criteria, application deadlines, and required documentation.",
            },
            {
              question: "Is transportation available?",
              answer:
                "We provide safe and reliable transportation services covering major areas around both our campuses. Our buses are equipped with GPS tracking, and each route is supervised by trained staff to ensure student safety. Route information and schedules are available upon enrollment.",
            },
            {
              question: "How do clubs and sports work?",
              answer:
                "Our comprehensive extracurricular program includes over 30 clubs and 15 sports teams. Students can explore their interests in arts, sciences, technology, and athletics. Each activity is supervised by experienced mentors, and we provide excellent facilities for all programs.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer focus:outline-none">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brandBlue transition-colors">
                    {item.question}
                  </h3>
                  <span className="ml-4 flex-shrink-0 text-brandBlue group-hover:text-brandGreen transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAInlink
            linkto="/faq"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brandBlue hover:bg-brandBlue/90 transition-colors duration-200"
          >
            View All FAQs
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </CTAInlink>
        </div>
      </section>
      {/* Partners */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-brandBlue to-brandGreen bg-clip-text text-transparent">
                Our Valued Partners
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Collaborating with global leaders in education and innovation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              {
                src: "/google-logo.png",
                alt: "Google",
                width: 120,
                height: 40,
              },
              {
                src: "/zayed.png",
                alt: "Zayed Prize",
                width: 100,
                height: 50,
              },
              {
                src: "/bloom-ed.jpeg",
                alt: "BloomEd",
                width: 100,
                height: 50,
              },
              {
                src: "/canopy.jpeg",
                alt: "Canopy Nepal",
                width: 100,
                height: 50,
              },
              {
                src: "/mit-solve.jpeg",
                alt: "MIT Solve",
                width: 100,
                height: 50,
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-28 w-full"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain max-h-full max-w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 33vw, 200px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
