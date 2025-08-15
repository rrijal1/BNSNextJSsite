
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Bloom Nepal School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey, our values, and our vision for a better future through education.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="mb-4 text-lg">
                The story of Bloom Nepal School is a story of a young MIT graduate who returned to Nepal with a dream. A dream to create a learning environment where students are not just taught but are inspired to explore their passions.
              </p>
              <p className="mb-4 text-lg">
                In 2013, with just 17 students, we started a journey. Today, we are a family of over 700 students across two schools, and we continue to grow, touching more lives and shaping more futures.
              </p>
              <p className="text-lg">
                Our philosophy is simple: every child has a unique talent, a passion that can be nurtured to make them not just successful individuals but also happy and fulfilled human beings.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/bloom-main.jpg"
                alt="Founder of Bloom Nepal School"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Values</h2>
          <p className="text-lg text-gray-600 mt-2">What we stand for</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-3">Passion-Based Learning</h3>
            <p>We believe in an education that goes beyond textbooks. We encourage students to find and follow their passion, be it in arts, sports, or science.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-3">Holistic Development</h3>
            <p>Our focus is on the all-round development of our students, nurturing their intellectual, emotional, and physical growth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-3">Community and Diversity</h3>
            <p>We are a diverse community of learners from all over Nepal. We celebrate our differences and learn from each other.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Our Vision for the Future</h2>
          <p className="text-lg text-center max-w-4xl mx-auto">
            We envision a Nepal where every child has the opportunity to receive a world-class education, an education that empowers them to become leaders and innovators in their chosen fields. We are committed to expanding our reach and making quality education accessible to all.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
