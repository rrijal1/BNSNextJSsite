"use client";
import Image from "next/image";
import CTAInlink from "@/app/components/CTAInLink";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <WhatsAppButton />
      <ScrollToTopButton />
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-gray-100">
        {/* Hero Image */}
        <div className="relative w-full md:w-[500px] h-[300px] md:h-[400px] flex-shrink-0">
          <Image
            src="/HomePageImageDrone.jpg"
            alt="Bloom Nepal School Campus"
            fill
            priority
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>

        {/* Hero Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-6xl tracking-wide font-extrabold leading-tight text-[#013265]">
            Bloom Nepal School
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Nurturing Passion, Shaping the Future – A Center of Excellence in
            Education.
          </p>
          <div className="mt-6">
            <CTAInlink
              linkto="/admission"
              text="Apply for Admission"
              className="bg-[#be1e2d] hover:bg-red-700 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl lg:text-4xl tracking-wide font-bold text-[#013265]">
          Our Story
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Founded by MIT graduate Ram K. Rijal, Bloom Nepal School was born out
          of the belief that passion-driven learning empowers students to excel
          in every aspect of life. From just 17 students in 2013 to over 700
          today, our journey has been nothing short of extraordinary.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-bold text-[#013265]">
            Excellence in Numbers
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#dee5dc] p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-5xl font-extrabold text-[#be1e2d]">80%</h3>
              <p className="mt-2 text-gray-700">
                Graduates with top scholarships
              </p>
            </div>
            <div className="bg-[#dee5dc] p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-5xl font-extrabold text-[#013265]">700+</h3>
              <p className="mt-2 text-gray-700">Students Nationwide</p>
            </div>
            <div className="bg-[#dee5dc] p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-5xl font-extrabold text-green-700">35+</h3>
              <p className="mt-2 text-gray-700">Districts Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl lg:text-4xl tracking-wide font-bold text-center text-[#013265]">
          Our Core Values
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#be1e2d]">
              Passion-Based Learning
            </h3>
            <p className="mt-4 text-gray-600">
              We value sports, arts, science, and every passion equally. Our
              mission is to align academic growth with each student’s unique
              interests.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-700">
              Inspiring Environment
            </h3>
            <p className="mt-4 text-gray-600">
              Surrounded by passionate teachers and peers, our students
              naturally discover and develop their interests.
            </p>
          </div>
        </div>
      </section>

      {/* Student Work */}
      <section className="bg-[#dee5dc] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-bold text-[#013265]">
            Student Creations
          </h2>
          <p className="mt-4 text-gray-700">
            Discover what our students are building, creating, and achieving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAInlink
              linkto="/stories"
              text="Stories"
              className="bg-[#013265] hover:bg-blue-900"
            />
            <CTAInlink
              linkto="/events"
              text="Events"
              className="bg-[#013265] hover:bg-blue-900"
            />
            <CTAInlink
              linkto="/calendar"
              text="Calendar"
              className="bg-[#013265] hover:bg-blue-900"
            />
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl lg:text-4xl tracking-wide font-bold text-[#013265]">
          Education for All
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Students from over 35 districts – from the Himalayas to the Terai –
          study at Bloom Nepal thanks to our scholarship programs.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <CTAInlink
            linkto="/scholarship"
            text="Apply for Scholarship"
            className="bg-[#be1e2d] hover:bg-red-700 text-[#fffefe]"
          />
          <CTAInlink
            linkto="/support"
            text="Support a Student"
            className="bg-[#013265] hover:bg-blue-900 text-[#fffefe]"
          />
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-bold text-[#013265]">
            Our Partners
          </h2>
          <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
            <Image
              src="/google-logo.png"
              alt="Google"
              width={100}
              height={50}
            />
            <Image src="/zayed.png" alt="Zayed Prize" width={100} height={50} />
            <Image src="/bloom-ed.jpeg" alt="BloomEd" width={100} height={50} />
            <Image
              src="/canopy.jpeg"
              alt="Canopy Nepal"
              width={100}
              height={50}
            />
            <Image
              src="/mit-solve.jpeg"
              alt="MIT Solve"
              width={100}
              height={50}
            />
          </div>
        </div>
      </section>
    </main>
  );
}