
import React from 'react';
import Image from 'next/image';

const FacilitiesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a rich environment for our students to learn and grow. Explore the facilities we offer across our schools.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Facilities and Features</h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-8">
            We strive to be consistent with the facilities we provide across our network of schools. However, there are differences as demanded by natural factors like location, weather, etc. Please select the school you&apos;d like to learn more about.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">Bloom Nepal School, Lalitpur</button>
            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-400 transition-colors">Bloom Nepal School, Itahari</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div className="md:pr-8">
            <h3 className="text-3xl font-bold mb-4">Location</h3>
            <p className="text-lg mb-4">
              Our Lalitpur campus is located in the foothills of the Sankhadevi in Mahalaxmi, Lalitpur. Just a 45-minute away from the bustle of the busy capital city, our campus spans over an area of 30 ropanis, giving students enough open space for learning through/and recreation.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Bloom Nepal School Location"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
          <div>
            <Image
              src="/placeholder.svg"
              alt="International Exposure"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:pl-8">
            <h3 className="text-3xl font-bold mb-4">International Exposure</h3>
            <p className="text-lg mb-4">
              We are graced by the visit of volunteers, teachers, interns and friends from Europe and America almost all year long. This provides an incredible opportunity for students to learn about culture beyond the local along with learning the skillset this international body comes to share.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-10">Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-3">Residence & Day Scholars</h4>
              <p>Students can stay with us in the residence halls or may choose to commute from home if that&apos;s an option. This mixed residential setting allows us to create a diverse cultural experience without forgetting the local taste of things.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-3">Resident System</h4>
            <p>Oh, the staff vs. student football matches on Saturdays, the rounds during the study hours, and the noise of chicken dinner in the dining hall; Bloom is really a close-knit family. There are a total of 4 hostels (residential blocks), which we call houses, that house about 130 students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-3">Weekday Boarding Facility</h4>
              <p>We drop students at home on Friday, after the end of classes and pick up early morning before the start of the classes. This facility is available for subscription to all reasonable drop points inside the valley.</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default FacilitiesPage;
