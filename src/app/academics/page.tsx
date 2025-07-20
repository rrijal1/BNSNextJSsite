"use client";

import React, { useState } from "react";

// Define interfaces for type safety
interface Book {
  sn: number;
  subject: string;
  publication: string;
}

interface BookData {
  [key: number]: Book[];
}

const AcademicsPage: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<number>(1);

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

  const grades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Academics at Bloom
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our curriculum is designed to foster intellectual curiosity and a
            love for learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Book-List</h2>
            <p className="mb-4">
              Please click on the appropriate grade to view your desired
              booklist for the year 2079 BS.
            </p>
            <p className="mb-4">
              Both Lubhoo and Itahari School use the same booklist.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedGrade === grade
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Grade {grade}
                </button>
              ))}
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 p-2 bg-gray-100">SN</th>
                  <th className="border-b-2 p-2 bg-gray-100">Subject</th>
                  <th className="border-b-2 p-2 bg-gray-100">Publication</th>
                </tr>
              </thead>
              <tbody>
                {(bookData[selectedGrade] || []).map((pub, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border-b p-2">{pub.sn}</td>
                    <td className="border-b p-2">{pub.subject}</td>
                    <td className="border-b p-2">{pub.publication}</td>
                  </tr>
                ))}
                {!bookData[selectedGrade] && (
                  <tr>
                    <td colSpan={3} className="text-center p-4">
                      Booklist for Grade {selectedGrade} is not available yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Achieving Our Mission</h2>
            <p>
              We are always experimenting with various policies, putting forward
              programs and testing their effectiveness in achieving our mission.
              Here are some of the things are doing.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>DEAR Time:</strong> Cultivating a Reading Culture
              </li>
              <li>
                <strong>House Of The Month:</strong> Creating a Sense of Healthy
                Competition
              </li>
              <li>
                <strong>LML Article Of The Week:</strong> Emphasizing the
                importance of literature
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              All programs listed above are openly licensed. You may implement
              them freely at your school.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">DEAR Culture at Bloom</h2>
            <p>
              DEAR stands for Drop Everything And Read. Every Friday, students
              at Bloom have an hour of DEAR time where they study their favorite
              Novel, Newspaper article or anything that’s not a part of their
              school curriculum.
            </p>
            <p className="mt-4">
              With the implementation of DEAR culture, we have seen significant
              improvement in students' reading habits.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Hands-On Learning</h2>
            <p>
              We encourage students to go out onto the field and get their hands
              dirty. This, we believe, is the only way to really learn.
            </p>
            <p className="mt-4">
              Be it for a Math/Science class or Social Studies, we maximize the
              use of in-class and out-of-the-class activities for students to
              engage in and enjoy the topic.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Passion First</h2>
            <p>
              We deeply believe that passion is a major driving component of
              one's success in life.
            </p>
            <p className="mt-4">
              Bloom Nepal is merely an institution with the right set of tools
              and an environment for fostering and nurturing each child's
              passion.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AcademicsPage;
