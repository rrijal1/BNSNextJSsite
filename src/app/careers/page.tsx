
import React from 'react';

const CareersPage = () => {
  const jobOpenings = [
    { title: 'Science Teacher', location: 'Lalitpur', type: 'Full-time', description: 'We are looking for a passionate Science teacher to join our team.' },
    { title: 'Math Teacher', location: 'Itahari', type: 'Full-time', description: 'We are looking for a passionate Math teacher to join our team.' },
    { title: 'English Teacher', location: 'Lalitpur', type: 'Part-time', description: 'We are looking for a passionate English teacher to join our team.' },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Careers at Bloom</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and be a part of our mission to provide quality education in Nepal.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Make a Difference</h3>
              <p>Your work will directly contribute to shaping the future of our students and the nation.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Growth Opportunities</h3>
              <p>We provide ample opportunities for professional development and career growth.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Vibrant Community</h3>
              <p>Be a part of a diverse and passionate community of educators and learners.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-10">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-md text-gray-600 mt-1">{job.location} | {job.type}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="mt-4 text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600">Don&apos;t see a suitable opening? Send us your resume at <a href="mailto:careers@bloom.edu.np" className="text-blue-600 hover:underline">careers@bloom.edu.np</a></p>
        </div>
      </main>
    </div>
  );
};

export default CareersPage;
