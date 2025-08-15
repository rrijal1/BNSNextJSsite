"use client";

import React from "react";
import BookList from "@/app/components/BookList";
import MissionSection from "@/app/components/MissionSection";
import Image from "next/image";

const AcademicsPage: React.FC = () => {
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
            <BookList />
          </div>

          <MissionSection />

          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <h2 className="text-3xl font-bold mb-6">Hands-On Learning</h2>
              <p>
                We encourage students to go out onto the field and get their
                hands dirty. This, we believe, is the only way to really learn.
              </p>
              <p className="mt-4">
                Be it for a Math/Science class or Social Studies, we maximize
                the use of in-class and out-of-the-class activities for students
                to engage in and enjoy the topic.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/flying-drone.jpg"
                alt="Hands-On Learning"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4">
              <h2 className="text-3xl font-bold mb-6">Passion First</h2>
              <p>
                We deeply believe that passion is a major driving component of
                one&apos;s success in life.
              </p>
              <p className="mt-4">
                Bloom Nepal is merely an institution with the right set of tools
                and an environment for fostering and nurturing each child&apos;s
                passion.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/guitar-guys.JPG"
                alt="Passion First"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AcademicsPage;
