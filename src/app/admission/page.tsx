"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { validateEmail } from "@/utils/form";

const links = {
  admissionForm:
    "https://drive.google.com/file/d/11PbZ3tpteOvFjQE17cJpfYfQmgUp-jVL/view",
  sampleEntranceQuestions: {
    1: "https://drive.google.com/file/d/1c51MFByyF_8Rqv0lHmEoEv2Hf4x0E6Ql/view",
    2: "https://drive.google.com/file/d/116B6TsGwAfm5Qjm3Yh0dmwmBOu9O0dJT/view",
    3: "https://drive.google.com/file/d/1dX5WF4643-4cGxiio4oZRc6ZLQu7YEuL/view",
    4: "https://drive.google.com/file/d/1kAZsxRRlglHgmOt433SqGo5n0eEyKQi3/view",
    5: "https://drive.com/file/d/1lXDXLTVl5XCq7amBNh7k3BZ11H3_rINA/view",
    6: "https://drive.google.com/file/d/1G0ilmmqzleqRqKpUGsSFISyViD8cC6Yy/view",
    7: "https://drive.google.com/file/d/1XobaNDmN1DO8hw8GnSWTr4x96ZL2flnJ/view",
    8: "https://drive.google.com/file/d/15qH4bRUmfWGzFKSuHKTtgoTtC1Qb-29w/view",
  } as Record<number, string>,
};

function SectionHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/5 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Join Our Community
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Be a{" "}
                  <span className="bg-gradient-to-r from-brandRed to-red-600 bg-clip-text text-transparent">
                    Bloom
                  </span>
                  <br />
                  Nepal Student
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Join a school that&apos;s futuristic, teaches empathy, and
                  provides an environment for fostering each child&apos;s unique
                  talents and interests.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-brandBlue/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brandBlue"
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
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Futuristic Learning
                    </h3>
                    <p className="text-sm text-gray-600">
                      Modern education methods
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-brandGreen/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brandGreen"
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
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Empathy Focus
                    </h3>
                    <p className="text-sm text-gray-600">
                      Character development
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-brandRed/10 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-brandRed"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Individual Growth
                    </h3>
                    <p className="text-sm text-gray-600">
                      Personalized approach
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="#entrance"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brandBlue text-white rounded-2xl font-semibold hover:bg-brandBlue/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Application
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="#sampleQuestions"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-brandBlue text-brandBlue rounded-2xl font-semibold hover:bg-brandBlue hover:text-white transition-all duration-300"
                >
                  Sample Questions
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brandBlue/20 to-brandGreen/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/bloom-main.jpg"
                    alt="Hexagonal Photo Collection of Students"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-brandRed rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce">
                  <span>New!</span>
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brandGreen rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brandBlue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brandBlue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function AdmissionProcess() {
  const steps = useMemo(
    () => [
      {
        number: "01",
        title: "Application Submission",
        description:
          "We usually take admission for students from grade 1 to 8. If you are going to be in any of those grades in the upcoming school year, fill out the admission form below!",
        icon: "📝",
      },
      {
        number: "02",
        title: "Entrance Examination",
        description:
          "We meet online or at Bloom Nepal School for your Entrance Exam. Dont be nervous - we have got sample questions below to help you prepare!",
        icon: "📚",
      },
      {
        number: "03",
        title: "Review & Interview",
        description:
          "We review your exam (usually within 24 hours) and schedule a meeting with you and your parents. Admission is based on entrance exam, extracurricular involvement, and interpersonal qualities.",
        icon: "🤝",
      },
      {
        number: "04",
        title: "Welcome to Bloom!",
        description:
          "You're officially a Bloom Nepal student now. Welcome to our community!",
        icon: "🎉",
      },
    ],
    []
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Admission Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to{" "}
              <span className="text-brandBlue">Bloom Nepal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to join our vibrant learning community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-brandBlue to-brandGreen transform translate-x-4 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-brandGreen rounded-full"></div>
                  </div>
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group-hover:border-brandBlue/20">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-brandBlue to-brandGreen rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-4">{step.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brandBlue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-brandBlue/5 rounded-full group-hover:bg-brandBlue/10 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-brandBlue/10 to-brandGreen/10 rounded-2xl p-6">
              <div className="w-12 h-12 bg-brandBlue rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Ready to Begin?</h4>
                <p className="text-sm text-gray-600">
                  The entire process typically takes 3-5 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadSampleQuestions() {
  const [grade, setGrade] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [agreed, setAgreed] = useState<boolean>(false);
  const [cantGetQuestions, setCantGetQuestions] = useState<boolean>(false);
  const [displayErrorMessage, setDisplayErrorMessage] =
    useState<boolean>(false);

  const gradeNum = Number(grade);
  const formValid =
    gradeNum >= 1 && gradeNum <= 10 && validateEmail(email) && agreed;

  useEffect(() => {
    if (formValid) setDisplayErrorMessage(false);
  }, [formValid]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (formValid) {
      setSubmitted(true);
    } else {
      setDisplayErrorMessage(true);
      e.preventDefault();
      return;
    }

    const link = links.sampleEntranceQuestions[gradeNum];
    if (link) {
      window.open(link, "_blank");
    } else {
      e.preventDefault();
      setCantGetQuestions(true);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
      {!submitted && (
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-brandGreen/10 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-brandGreen"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Download Sample Questions
              </h3>
              <p className="text-gray-600">Get familiar with our exam format</p>
            </div>
          </div>
        </div>
      )}

      {displayErrorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-700 font-medium">
              Please check the form fields below and try again.
            </p>
          </div>
        </div>
      )}

      <form id="sampleQuestions" onSubmit={handleSubmit}>
        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="grade"
                className="block text-sm font-semibold text-gray-900"
              >
                Applying For Grade (1-10)
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  id="grade"
                  placeholder="6"
                  value={grade}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (
                      v === "" ||
                      (/^\d+$/.test(v) && Number(v) >= 1 && Number(v) <= 10)
                    ) {
                      setGrade(v);
                    }
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="student@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
              <input
                type="checkbox"
                required
                id="checkbox"
                checked={agreed}
                onChange={() => setAgreed((s) => !s)}
                className="mt-1 w-4 h-4 text-brandBlue border-gray-300 rounded focus:ring-brandBlue"
              />
              <label
                htmlFor="checkbox"
                className="text-sm text-gray-700 leading-relaxed"
              >
                I confirm that I am not using the material provided for
                commercial purposes and will use it solely for educational
                preparation.
              </label>
            </div>

            <button
              type="submit"
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                formValid
                  ? "bg-gradient-to-r from-brandGreen to-green-600 hover:from-brandGreen/90 hover:to-green-600/90"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!formValid}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Sample Questions</span>
              </div>
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            {!cantGetQuestions ? (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Download Started!
                </h4>
                <p className="text-gray-600 max-w-md mx-auto">
                  Thank you for downloading our sample questions. We wish you
                  the very best for your entrance exam preparation!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Notice</h4>
                <p className="text-gray-600 max-w-md mx-auto">
                  {grade === "10"
                    ? "Sorry, we don't take admission for grade 10."
                    : grade === "9"
                      ? "We do take limited admission for grade 9 but don't require an entrance exam. Please contact the school office for details on how to apply."
                      : `Sorry, we don't have sample entrance questions for grade ${grade} currently. Please check back in the future.`}
                </p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

function FirstStepForm({
  takingAdmission,
  admissionGrades,
}: {
  takingAdmission: boolean;
  admissionGrades: string;
}) {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [displayErrorMessage, setDisplayErrorMessage] =
    useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const formValid =
    (phone.trim().length >= 9 && phone.trim().length <= 15) ||
    validateEmail(email);

  useEffect(() => {
    if (formValid) setDisplayErrorMessage(false);
  }, [formValid]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (formValid) {
      setSubmitted(true);
      if (takingAdmission) {
        window.open(links.admissionForm, "_blank");
      }
    } else {
      setDisplayErrorMessage(true);
      e.preventDefault();
    }
  };

  return (
    <div className="space-y-8">
      {/* Status Messages */}
      {!submitted && takingAdmission && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-brandGreen to-green-600 text-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <div>
                <h3 className="font-semibold text-lg">Admissions Open!</h3>
                <p className="text-white/90">
                  We are currently accepting applications for grades{" "}
                  {admissionGrades} - limited seats available!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brandBlue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-brandBlue"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    How to Apply
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Fill out the form below to download our admission form. Once
                    completed, you can submit it via email to{" "}
                    <a
                      href="mailto:info@bloomn.edu.np"
                      className="text-brandBlue hover:text-brandBlue/80 font-medium underline"
                    >
                      info@bloomn.edu.np
                    </a>{" "}
                    or bring it directly to our school.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!submitted && !takingAdmission && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Admissions Closed</h3>
              <p className="text-white/90">
                We&apos;re not currently accepting new applications. Leave your
                contact details and we&apos;ll notify you when admissions
                reopen.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {displayErrorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-700 font-medium">
              Please check the form fields below and try again.
            </p>
          </div>
        </div>
      )}

      {/* Form */}
      <form id="contact" onSubmit={handleSubmit}>
        {!submitted ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone Number{" "}
                  {email === "" && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    required={email === ""}
                    placeholder="e.g., 9846062210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="ContactEmail"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email Address{" "}
                  {phone === "" && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="ContactEmail"
                    required={phone === ""}
                    placeholder="e.g., parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Helper Text */}
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-medium">Note:</span> Please provide either
                a phone number or email address. We&apos;ll use this to contact
                you about your application.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                formValid
                  ? takingAdmission
                    ? "bg-gradient-to-r from-brandGreen to-green-600 hover:from-brandGreen/90 hover:to-green-600/90"
                    : "bg-gradient-to-r from-brandBlue to-blue-600 hover:from-brandBlue/90 hover:to-blue-600/90"
                  : "bg-gray-400 cursor-not-allowed transform-none"
              }`}
              disabled={!formValid}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {takingAdmission ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  )}
                </svg>
                <span>
                  {takingAdmission ? "Get Admission Form" : "Contact Me"}
                </span>
              </div>
            </button>
          </div>
        ) : (
          <div className="text-center py-12">
            {takingAdmission ? (
              <div className="space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Form Download Started!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in Bloom Nepal School. Please
                    complete the admission form and submit it via email or bring
                    it to our school office.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 max-w-md mx-auto">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-brandBlue flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Next Steps
                      </h4>
                      <p className="text-sm text-gray-600">
                        Complete the form and email it to{" "}
                        <a
                          href="mailto:info@bloomn.edu.np"
                          className="text-brandBlue font-medium"
                        >
                          info@bloomn.edu.np
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="w-20 h-20 bg-brandBlue/10 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-10 h-10 text-brandBlue"
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
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    We&apos;ve Got You!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest. We&apos;ll contact you as soon
                    as admissions reopen for the next academic year.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default function AdmissionPage() {
  // In Gatsby version, this came from Sanity via GraphQL.
  // For now, we hardcode but you can fetch from Sanity later.
  const takingAdmission = true;
  const admissionGrades = "1-8";

  return (
    <main className="min-h-screen bg-white">
      <SectionHero />
      <AdmissionProcess />

      {/* Scholarship Section */}
      <section className="py-20 bg-gradient-to-br from-brandGreen/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="lg:flex items-center gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brandGreen/20 to-brandBlue/20 rounded-3xl transform rotate-2"></div>
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/two-girls.jpg"
                      alt="Two girl students posing for a photo"
                      width={600}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-brandGreen rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    <span className="text-center leading-tight">
                      Need
                      <br />
                      Help?
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                  Financial Support
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Scholarship{" "}
                  <span className="text-brandGreen">Opportunities</span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  We believe education should be accessible to all. Through our
                  <strong className="text-brandGreen font-semibold">
                    {" "}
                    Bloom Nepal Foundation
                  </strong>
                  , we provide scholarships to deserving families who need
                  financial support.
                </p>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brandGreen/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-brandGreen"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        How It Works
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our foundation evaluates applications based on financial
                        need, academic potential, and community involvement.
                        We&apos;re committed to ensuring deserving students get
                        quality education regardless of their economic
                        background.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/scholarship/#apply"
                    className="inline-flex items-center justify-center px-8 py-4 bg-brandGreen text-white rounded-2xl font-semibold hover:bg-brandGreen/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Apply for Scholarship
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://bloomnf.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-brandGreen text-brandGreen rounded-2xl font-semibold hover:bg-brandGreen hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrance Details Section */}
      <section className="py-20 bg-white" id="entrance">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brandRed/10 rounded-full text-brandRed text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Entrance Examination
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-brandRed">Entrance</span> Guidelines
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our entrance examination
                process
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Examination Details
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "💻",
                      text: "Examination may be conducted online or in-person",
                    },
                    {
                      icon: "👤",
                      text: "You must take the examination yourself - no third-party help allowed",
                    },
                    {
                      icon: "📖",
                      text: "Subjects covered vary by grade - check sample questions below",
                    },
                    {
                      icon: "⚖️",
                      text: "Entrance exam is part of our holistic evaluation process",
                    },
                    {
                      icon: "😌",
                      text: "Come prepared, but don't be nervous - we're here to help",
                    },
                    {
                      icon: "📝",
                      text: "Practice with our sample questions for better preparation",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pl-8">
                <DownloadSampleQuestions />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                Get Started
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Begin Your Journey to{" "}
                <span className="text-brandRed">Bloom</span>
              </h2>
              <p className="text-xl text-gray-600">
                Ready to join our community? Start your application process
                today.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <FirstStepForm
                takingAdmission={takingAdmission}
                admissionGrades={admissionGrades}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
