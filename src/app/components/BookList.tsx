"use client";

import React, { useState } from "react";

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

const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------- Book List Component ----------
const BookList: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<number>(1);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-brand-blue mb-2">Book List</h2>
        <p className="mb-8 text-gray-600">
          Select a grade to view the official book list for the academic year.
        </p>
      </div>

      {/* Grade Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {grades.map((grade) => (
          <button
            key={grade}
            onClick={() => setSelectedGrade(grade)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedGrade === grade
                ? "bg-brand-red text-white scale-110 shadow-md"
                : "bg-white text-brand-blue hover:bg-brand-blue hover:text-white shadow-sm"
            }`}
          >
            Grade {grade}
          </button>
        ))}
      </div>

      {/* Book Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left font-semibold text-gray-500">S.N.</th>
              <th className="p-3 text-left font-semibold text-gray-500">Subject</th>
              <th className="p-3 text-left font-semibold text-gray-500">Publication</th>
            </tr>
          </thead>
          <tbody>
            {(bookData[selectedGrade] || []).map((book, index) => (
              <tr key={book.sn} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                <td className="p-3 text-gray-800">{book.sn}</td>
                <td className="p-3 text-brand-blue font-medium">{book.subject}</td>
                <td className="p-3 text-gray-800">{book.publication}</td>
              </tr>
            ))}
            {!bookData[selectedGrade] && (
              <tr>
                <td colSpan={3} className="text-center p-8 text-gray-500">
                  Book list for Grade {selectedGrade} is not available yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
