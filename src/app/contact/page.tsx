"use client";

import React, { useState, useEffect } from "react";

const ContactPage = () => {
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

  useEffect(() => {
    const validateForm = () => {
      const newErrors = { name: "", phone: "", email: "" };
      let isValid = true;

      if (!formData.name) {
        newErrors.name = "Please enter a proper name.";
        isValid = false;
      }

      const phoneRegex = /^[0-9\+]{10,15}$/;
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
      alert("Thank you for your request! We will get back to you soon.");
    } else {
      console.log("Form has errors:", errors);
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Contact with good old email
            </h2>
            <p className="mb-4">
              Probably the best way for you to reach out to us is to send us an
              email at{" "}
              <a
                href="mailto:info@bloom.edu.np"
                className="text-blue-600 hover:underline"
              >
                info@bloom.edu.np
              </a>{" "}
              and we will connect you to the concerned person/department. We are
              a relatively small organization and won&apos;t mind a bit of email
              forwarding.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Meet us in Person</h2>
            <p className="mb-4">
              We would love to show you the campus and around!
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Request a site visit below ↓
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Bloom Nepal School, Lalitpur
              </h3>
              <p>
                <strong>Address:</strong> Mahalaxmi - 8, Sankhadevi, Lalitpur (
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Maps
                </a>
                )
              </p>
              <p>
                <strong>Phone:</strong> +977 9851147140, +977 1-5709030
              </p>
              <p>
                <strong>WhatsApp/Viber:</strong> +977 9851147140
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@bloom.edu.np"
                  className="text-blue-600 hover:underline"
                >
                  info@bloom.edu.np
                </a>
              </p>
              <p className="mt-4">
                <strong>Directions:</strong> The nearest landmark is Sankhadevi
                temple, which is 5 minutes of walk from the school. We are about
                2kms from School Chowk, the nearest busstop in Sanagaun.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Bloom Nepal School, Itahari
              </h3>
              <p>Details coming soon...</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8">
            Request School Visit
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please enter proper name"
                />
                {touched.name && errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 98XXXXXXXX"
                />
                {touched.phone && errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., your.email@example.com"
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Intended Date of Visit
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Which location would you like to visit?
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option disabled>Select</option>
                  <option>Bloom Nepal School, Lalitpur</option>
                  <option>Bloom Nepal School, Itahari</option>
                </select>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                disabled={!isFormValid}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Be a Bloom Nepal Student
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
