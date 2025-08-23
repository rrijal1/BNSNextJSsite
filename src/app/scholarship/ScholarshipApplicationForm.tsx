"use client";

import { useState, useEffect } from "react";

// Utility function for email validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function ScholarshipApplicationForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    currentGrade: "",
    currentSchool: "",
    parentName: "",
    whyDeserveScholarship: "",
    hasDocuments: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const isFormValid =
    formData.studentName.trim() &&
    validateEmail(formData.email) &&
    formData.phone.trim().length >= 10 &&
    formData.currentGrade &&
    formData.currentSchool.trim() &&
    formData.parentName.trim() &&
    formData.whyDeserveScholarship.trim().length >= 100 &&
    formData.hasDocuments;

  useEffect(() => {
    if (isFormValid) setShowError(false);
  }, [isFormValid]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowError(true);
      return;
    }
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="w-20 h-20 bg-brandGreen/10 rounded-full flex items-center justify-center mx-auto">
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
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Application Submitted!
          </h3>
          <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
            Thank you for applying for the Bloom Nepal Scholarship. We'll review
            your application and contact you within 5-7 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {showError && (
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
              Please fill in all required fields correctly.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Student Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) =>
                  handleInputChange("studentName", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200"
                placeholder="9846062210"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Current Grade <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.currentGrade}
                onChange={(e) =>
                  handleInputChange("currentGrade", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200"
              >
                <option value="">Select Grade</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
                  <option key={grade} value={grade}>
                    Grade {grade}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Current School Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.currentSchool}
                onChange={(e) =>
                  handleInputChange("currentSchool", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200"
                placeholder="Name of your current school"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Parent/Guardian Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) =>
                  handleInputChange("parentName", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200"
                placeholder="Parent or guardian's full name"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Why do you deserve this scholarship?{" "}
                <span className="text-red-500">*</span>
                <span className="text-sm font-normal text-gray-500 ml-2">
                  (Minimum 100 words)
                </span>
              </label>
              <textarea
                value={formData.whyDeserveScholarship}
                onChange={(e) =>
                  handleInputChange("whyDeserveScholarship", e.target.value)
                }
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brandBlue focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Share your story, dreams, challenges, and why you believe you deserve this scholarship..."
              />
              <div className="text-right text-sm text-gray-500">
                {formData.whyDeserveScholarship.length} characters
              </div>
            </div>

            <div className="md:col-span-2 flex items-start space-x-3">
              <input
                type="checkbox"
                id="documents"
                checked={formData.hasDocuments}
                onChange={(e) =>
                  handleInputChange("hasDocuments", e.target.checked)
                }
                className="mt-1 w-4 h-4 text-brandBlue border-gray-300 rounded focus:ring-brandBlue"
              />
              <label
                htmlFor="documents"
                className="text-sm text-gray-700 leading-relaxed"
              >
                <span className="text-red-500">*</span> I have all required
                documents (transcripts, birth certificate, parent's citizenship)
                and will submit them via email to{" "}
                <a
                  href="mailto:info@bloomn.edu.np"
                  className="text-brandBlue font-medium hover:underline"
                >
                  info@bloomn.edu.np
                </a>
              </label>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              isFormValid
                ? "bg-gradient-to-r from-brandGreen to-green-600 hover:from-brandGreen/90 hover:to-green-600/90"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Submit Scholarship Application
          </button>
        </div>
      </form>
    </div>
  );
}
