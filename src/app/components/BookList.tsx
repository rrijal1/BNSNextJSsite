"use client";

import React, { useState, useMemo } from "react";
import Button from "@/app/components/Button";
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
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Info Section */}
        <div className="w-full md:w-2/5 space-y-4">
          <h2 className="text-3xl font-bold text-brand-blue">Book List</h2>
          <p className="text-gray-600 leading-relaxed">
            Select your grade to view the official book list for the academic
            year 2082 BS.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Both Lubhoo and Itahari Schools follow the same book list.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5">
          {/* Grade Selector */}
          <div
            role="tablist"
            aria-label="Grade selection"
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {grades.map((grade) => (
              <Button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                variant={selectedGrade === grade ? "primary" : "outline"}
                size="sm"
                className="min-w-[70px] transition-all duration-200"
                aria-selected={selectedGrade === grade}
                role="tab"
              >
                Grade {grade}
              </Button>
            ))}
          </div>

          {/* Book Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 transition-colors duration-200 ">
                <tr className=" hover:bg-brandRed hover:brandWhite">
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold text-gray-500 uppercase tracking-wide transition-colors duration-200"
                  >
                    S.N.
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold text-gray-500 uppercase tracking-wide transition-colors duration-200"
                  >
                    Subject
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold text-gray-500 uppercase tracking-wide transition-colors duration-200"
                  >
                    Publication
                  </th>
                </tr>
              </thead>
              <tbody>
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
                        className={`transition-colors duration-200 hover:bg-brand-blue ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="p-4 text-gray-800 hover:text-white transition-colors duration-200">
                          {book.sn}
                        </td>
                        <td className="p-4 text-brand-blue font-medium hover:text-white transition-colors duration-200">
                          {book.subject}
                        </td>
                        <td className="p-4 text-gray-700 hover:text-white transition-colors duration-200">
                          {book.publication}
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
                      <td colSpan={3} className="p-8 text-gray-500 italic">
                        Book list for Grade {selectedGrade} is not available
                        yet.
                      </td>
                    </motion.tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookList;
