"use client";

import React, { useState, useEffect } from "react";
import WhatsAppButton from "@/app/components/ui/WhatsAppButton";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Bloom Nepal School";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Contact Bloom Nepal School. Get in touch with our Lalitpur, Dharan, Biratnagar, and Itahari campuses. Request a campus tour or visit us today."
    );
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    location: "select",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const newErrors = { name: "", phone: "", email: "" };
      let isValid = true;

      if (!formData.name) {
        newErrors.name = "Please enter a proper name.";
        isValid = false;
      }

      const phoneRegex = /^[0-9+]{10,15}$/;
      if (!formData.phone || !phoneRegex.test(formData.phone)) {
        newErrors.phone = "Invalid or missing phone number.";
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        newErrors.email = "Sorry, we couldn't validate the email.";
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    setIsFormValid(validateForm());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to show errors on submission attempt
    setTouched({
      name: true,
      phone: true,
      email: true,
    });

    if (isFormValid) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          location: "select",
        });
        setTouched({
          name: false,
          phone: false,
          email: false,
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <WhatsAppButton />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brandGreen/10 via-white to-brandBlue/5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
              Get in Touch
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Connect with Bloom Nepal School
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We&apos;d love to hear from you! Whether you have questions about
              admissions, want to schedule a visit, or need more information
              about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Contact */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-brandGreen px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Email Communication
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The best way to reach us is through email. We&apos;ll
                    connect you to the right person or department quickly.
                  </p>
                  <a
                    href="mailto:info@bloom.edu.np"
                    className="inline-flex items-center px-6 py-3 bg-brandGreen text-white rounded-xl font-semibold hover:bg-brandGreen/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    info@bloom.edu.np
                  </a>
                </div>
              </div>

              {/* Campus Visit */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-brandBlue px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Campus Visit
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Experience our campus firsthand! We&apos;d love to show you
                    around and help you discover what makes Bloom special.
                  </p>
                  <a
                    href="#visit-form"
                    className="inline-flex items-center px-6 py-3 bg-brandBlue text-white rounded-xl font-semibold hover:bg-brandBlue/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    Schedule Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-brandRed/10 rounded-full text-brandRed text-sm font-medium mb-4">
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
                Our Locations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Our <span className="text-brandRed">Campuses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find us at our beautiful campuses designed to inspire learning
                and growth
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Lalitpur Campus */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-brandGreen px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Bloom Nepal School, Lalitpur
                    </h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brandGreen/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-brandGreen"
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
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Mahalaxmi - 8, Sankhadevi, Lalitpur
                      </p>
                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brandGreen hover:text-brandGreen/80 font-medium text-sm mt-1"
                      >
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brandBlue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-brandBlue"
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
                    <div>
                      <p className="font-semibold text-gray-900">
                        Phone Numbers
                      </p>
                      <p className="text-gray-600">
                        +977 9851147140, +977 1-5709030
                      </p>
                      <p className="text-gray-600 text-sm">
                        WhatsApp/Viber: +977 9841207231
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brandRed/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-brandRed"
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
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:info@bloom.edu.np"
                        className="text-brandRed hover:text-brandRed/80 font-medium"
                      >
                        info@bloom.edu.np
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mt-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      Directions
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The nearest landmark is Sankhadevi temple, which is 5
                      minutes walk from the school. We are about 2km from School
                      Chowk, the nearest bus stop in Sanagaun.
                    </p>
                  </div>
                </div>
              </div>

              {/* Itahari Campus */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-brandBlue px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Bloom Nepal School, Itahari
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-brandBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-brandBlue"
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Coming Soon
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We&apos;re excited to announce that our Itahari campus is
                      in development. Stay tuned for more details about this
                      exciting expansion!
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandBlue/10 text-brandBlue font-medium">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Updates Coming
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="visit-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
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
                    d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-1 12a2 2 0 002 2h6a2 2 0 002-2L16 7m-6 0V3a2 2 0 012-2h4a2 2 0 012 2v4"
                  />
                </svg>
                Schedule Your Visit
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Request a <span className="text-brandBlue">Campus Tour</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to experience Bloom Nepal School? Fill out the form below
                and we&apos;ll arrange a personalized campus tour for you.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {isSubmitted ? (
                <div className="text-center py-16 px-8">
                  <div className="w-20 h-20 bg-brandGreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-brandGreen"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Request Submitted!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in Bloom Nepal School!
                    We&apos;ll contact you within 24 hours to schedule your
                    campus visit.
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-brandGreen px-8 py-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Campus Visit Request Form
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          Full Name <span className="text-brandRed">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandGreen focus:border-transparent transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                        {touched.name && errors.name && (
                          <p className="text-brandRed text-sm mt-1 flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          Phone Number <span className="text-brandRed">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandGreen focus:border-transparent transition-all duration-200"
                          placeholder="e.g., 9846062210"
                        />
                        {touched.phone && errors.phone && (
                          <p className="text-brandRed text-sm mt-1 flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          Email Address <span className="text-brandRed">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandGreen focus:border-transparent transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                        {touched.email && errors.email && (
                          <p className="text-brandRed text-sm mt-1 flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="date"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          Preferred Visit Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandGreen focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label
                          htmlFor="location"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          Which campus would you like to visit?
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandGreen focus:border-transparent transition-all duration-200"
                        >
                          <option value="select" disabled>
                            Select a campus
                          </option>
                          <option value="Bloom Nepal School, Lalitpur">
                            Bloom Nepal School, Lalitpur
                          </option>
                          <option value="Bloom Nepal School, Itahari">
                            Bloom Nepal School, Itahari
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`px-8 my-4 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                          isFormValid
                            ? "bg-brandGreen hover:bg-brandGreen/90"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <svg
                          className="w-5 h-5 mr-2 inline"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Request Campus Visit
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
