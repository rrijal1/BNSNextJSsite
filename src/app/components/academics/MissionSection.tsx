"use client";

import React, { useState } from "react";

interface MissionTopic {
  title: string;
  content: React.ReactNode;
}

const missionData: MissionTopic[] = [
  {
    title: "DEAR Time",
    content: (
      <div className="space-y-4">
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Reading Culture
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          DEAR Culture at Bloom
        </h3>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p className="text-lg">
            DEAR stands for <strong>Drop Everything And Read</strong>. Every
            Friday, students at Bloom have an hour of DEAR time where they study
            their favorite Novel, Newspaper article or anything that&apos;s not
            a part of their school curriculum.
          </p>
          <p>
            With the implementation of DEAR culture, we have seen significant
            improvement in students&apos; reading habits and overall literacy
            development.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandGreen/10 text-brandGreen font-medium">
            📚 Novel Reading
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandBlue/10 text-brandBlue font-medium">
            📰 News Articles
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandRed/10 text-brandRed font-medium">
            📖 Personal Choice
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "House of The Month",
    content: (
      <div className="space-y-4">
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          Competition Program
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          <span className="text-brandBlue">House</span> of The Month
        </h3>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p className="text-lg">
            This program is designed to foster a sense of{" "}
            <strong>healthy competition</strong>
            among students, promoting teamwork, leadership, and academic
            excellence.
          </p>
          <p>
            Students are divided into houses that compete in various academic
            and extracurricular activities throughout the month, building school
            spirit and camaraderie.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandBlue/10 text-brandBlue font-medium">
            🏆 Competition
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandGreen/10 text-brandGreen font-medium">
            🤝 Teamwork
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandRed/10 text-brandRed font-medium">
            👑 Leadership
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "LML Article Of The Week",
    content: (
      <div className="space-y-4">
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
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          Literature Program
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          <span className="text-brandRed">LML</span> Article Of The Week
        </h3>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p className="text-lg">
            This initiative emphasizes the importance of{" "}
            <strong>literature and staying informed</strong>
            about current events and academic discourse.
          </p>
          <p>
            Students engage with carefully selected articles that broaden their
            perspectives, enhance critical thinking, and improve their
            analytical writing skills.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandRed/10 text-brandRed font-medium">
            📝 Literature
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandGreen/10 text-brandGreen font-medium">
            🧠 Critical Thinking
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandBlue/10 text-brandBlue font-medium">
            ✍️ Writing Skills
          </span>
        </div>
      </div>
    ),
  },
];

const MissionSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<MissionTopic>(
    missionData[0]
  );

  return (
    <div className="p-8 lg:p-12">
      {/* Header Section */}
      <div className="text-center mb-12">
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Mission Programs
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          <span className="bg-clip-text text-transparent">Achieving</span> Our
          Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are always experimenting with various policies, putting forward
          programs and testing their effectiveness in achieving our mission.
          Here are some of the innovative initiatives we are implementing.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our Programs
            </h3>
            <div className="space-y-3">
              {missionData.map((topic, index) => (
                <button
                  key={topic.title}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedTopic.title === topic.title
                      ? "bg-gradient-to-r from-brandGreen to-green-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-brandGreen/10 hover:text-brandGreen border border-gray-200 hover:border-brandGreen/20"
                  }`}
                >
                  <div className="flex items-center">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                        selectedTopic.title === topic.title
                          ? "bg-white/20 text-white"
                          : "bg-brandGreen/10 text-brandGreen"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {topic.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10 min-h-[400px] transition-all duration-300">
            {selectedTopic.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
