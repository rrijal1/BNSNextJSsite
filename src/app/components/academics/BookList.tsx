"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- Data Types ----------
interface Book {
  sn: number;
  subject: string;
  publication: string;
}

interface BookData {
  [key: number]: Book[];
}

// ---------- Book Data ----------
const bookData: BookData = {
  1: [
    { sn: 1, subject: "Nepali", publication: "Janak Sikshya" },
    { sn: 2, subject: "English", publication: "Janak Sikshya" },
    { sn: 3, subject: "Mathematics", publication: "Vedanta Publication" },
    { sn: 4, subject: "Science", publication: "Vidhyarthi Publication" },
  ],
  2: [
    { sn: 1, subject: "Nepali", publication: "Green Prakasan" },
    { sn: 2, subject: "English", publication: "Janak Sikshya" },
    { sn: 3, subject: "Mathematics", publication: "Vedanta Publication" },
    { sn: 4, subject: "Social Studies", publication: "Koselee Publication" },
  ],
  3: [
    { sn: 1, subject: "Nepali", publication: "Janak Sikshya" },
    { sn: 2, subject: "Nepali Grammar", publication: "Green Prakasan" },
    { sn: 3, subject: "English", publication: "Janak Sikshya" },
    { sn: 4, subject: "Mathematics", publication: "Vedanta Publication" },
  ],
  4: [
    { sn: 1, subject: "Science", publication: "Vidhyarthi Publication" },
    { sn: 2, subject: "Social Studies", publication: "Koselee Publication" },
    {
      sn: 3,
      subject: "Health, Population and Environment",
      publication: "Ekta Publication",
    },
    { sn: 4, subject: "Computer Science", publication: "Oxbridge" },
  ],
  5: [
    {
      sn: 1,
      subject: "Optional Mathematics",
      publication: "Vedanta Publication",
    },
    { sn: 2, subject: "Economics", publication: "Nabin Prakasan" },
    { sn: 3, subject: "Nepali", publication: "Janak Sikshya" },
    { sn: 4, subject: "English", publication: "Janak Sikshya" },
  ],
};

const grades = Array.from({ length: 10 }, (_, i) => i + 1);

// ---------- Book List Component ----------
const BookList: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<number>(1);

  // Memoize books to prevent unnecessary re-renders
  const books = useMemo(() => bookData[selectedGrade] || [], [selectedGrade]);

  // Animation variants for table rows
  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Info Section */}
        <div className="lg:w-2/5 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-4">
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
            Academic Resources
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            <span className="text-brandBlue">Official</span> Book List
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="flex items-start">
              <svg
                className="w-5 h-5 text-brandGreen mt-0.5 mr-3 flex-shrink-0"
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
              Select your grade to view the official book list for academic year
              2082 BS
            </p>
            <p className="flex items-start">
              <svg
                className="w-5 h-5 text-brandBlue mt-0.5 mr-3 flex-shrink-0"
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
              Both Lalitpur and Itahari campuses follow the same curriculum
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 space-y-6">
          {/* Grade Selector */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Select Grade
            </h4>
            <div
              role="tablist"
              aria-label="Grade selection"
              className="grid grid-cols-5 gap-3"
            >
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                    selectedGrade === grade
                      ? "bg-gradient-to-r from-brandBlue to-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-brandBlue/10 hover:text-brandBlue border border-gray-200"
                  }`}
                  aria-selected={selectedGrade === grade}
                  role="tab"
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          {/* Book Table */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-brandBlue to-blue-600 px-6 py-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
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
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Grade {selectedGrade} Book List
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      S.N.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Publication
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {books.length > 0 ? (
                      books.map((book, index) => (
                        <motion.tr
                          key={book.sn}
                          variants={rowVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className={`transition-all duration-300 hover:bg-brandBlue/5 hover:shadow-sm ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-brandBlue/10 text-brandBlue rounded-full text-xs font-semibold">
                              {book.sn}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {book.subject}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {book.publication}
                            </span>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                      >
                        <td colSpan={3} className="px-6 py-12 text-gray-500">
                          <div className="flex flex-col items-center space-y-3">
                            <svg
                              className="w-12 h-12 text-gray-300"
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
                            <p className="text-sm italic">
                              Book list for Grade {selectedGrade} is not
                              available yet.
                            </p>
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
