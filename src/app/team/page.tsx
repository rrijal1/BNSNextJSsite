
import React from 'react';
import Image from 'next/image';

const TeamPage = () => {
  const teamMembers = [
    { name: 'Ram K. Rijal', role: 'Founder', imageUrl: '/placeholder.svg' },
    { name: 'Jane Doe', role: 'Principal', imageUrl: '/placeholder.svg' },
    { name: 'John Smith', role: 'Academic Coordinator', imageUrl: '/placeholder.svg' },
    { name: 'Emily White', role: 'Admissions Officer', imageUrl: '/placeholder.svg' },
    { name: 'Michael Brown', role: 'Head of Sports', imageUrl: '/placeholder.svg' },
    { name: 'Sarah Green', role: 'Librarian', imageUrl: '/placeholder.svg' },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who are the driving force behind Bloom Nepal School.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative h-64">
                <Image
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-md text-blue-600 font-semibold mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TeamPage;
