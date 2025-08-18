"use client";

import React, { useState } from "react";
import Button from "./ui/Button";

interface MissionTopic {
  title: string;
  content: React.ReactNode;
}

const missionData: MissionTopic[] = [
  {
    title: "DEAR Time",
    content: (
      <div>
        <h3 className="text-2xl font-bold mb-4">DEAR Culture at Bloom</h3>
        <p>
          DEAR stands for Drop Everything And Read. Every Friday, students at
          Bloom have an hour of DEAR time where they study their favorite Novel,
          Newspaper article or anything that's not a part of their school
          curriculum.
        </p>
        <p className="mt-4">
          With the implementation of DEAR culture, we have seen significant
          improvement in students' reading habits.
        </p>
      </div>
    ),
  },
  {
    title: "House of The Month",
    content: (
      <div>
        <h3 className="text-2xl font-bold mb-4">House of The Month</h3>
        <p>
          This program is designed to foster a sense of healthy competition
          among students. More details will be provided soon.
        </p>
      </div>
    ),
  },
  {
    title: "LML Article Of The Week",
    content: (
      <div>
        <h3 className="text-2xl font-bold mb-4">LML Article Of The Week</h3>
        <p>
          This initiative emphasizes the importance of literature and staying
          informed. More details will be provided soon.
        </p>
      </div>
    ),
  },
];

const MissionSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<MissionTopic>(
    missionData[0]
  );

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Achieving Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We are always experimenting with various policies, putting forward
          programs and testing their effectiveness in achieving our mission.
          Here are some of the things we are doing.
        </p>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 pr-4">
          <div className="flex flex-col items-stretch">
            {missionData.map((topic) => (
              <Button
                key={topic.title}
                onClick={() => setSelectedTopic(topic)}
                variant={
                  selectedTopic.title === topic.title ? "primary" : "outline"
                }
                size="md"
                className="mb-2"
              >
                {topic.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 pl-4">
          <div>{selectedTopic.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
