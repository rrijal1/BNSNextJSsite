"use client";
import Image from "next/image";
import CTAInlink from "@/app/components/CTAInLink";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import HeroSection from "@/app/components/ui/HeroSection";
import Section from "@/app/components/ui/Section";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {" "}
      <WhatsAppButton />
      <ScrollToTopButton />
      {/* Hero Section */}{" "}
      <HeroSection>
        {" "}
        {/* Hero Image */}{" "}
        <div className="relative w-full md:w-[500px] h-[300px] md:h-[400px] flex-shrink-0 aspect-[4/3]">
          {" "}
          <Image
            src="/HomePageImageDrone.jpg"
            alt="Bloom Nepal School Campus"
            fill
            priority
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, 500px"
          />{" "}
        </div>{" "}
        {/* Hero Content */}{" "}
        <div className="text-center md:text-left max-w-xl">
          {" "}
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-extrabold leading-tight text-[#013265]">
            {" "}
            Bloom Nepal School{" "}
          </h1>{" "}
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            {" "}
            Nurturing Passion, Shaping the Future – A Center of Excellence in
            Education.{" "}
          </p>{" "}
          <div className="mt-6">
            {" "}
            <CTAInlink
              linkto="/admission"
              text="Apply for Admission"
              className="btn-secondary btn-lg"
            />{" "}
          </div>{" "}
        </div>{" "}
      </HeroSection>{" "}
      {/* About Section */}{" "}
      <Section className="text-center">
        {" "}
        <h2 className="sanity-heading-2 tracking-wide font-bold text-[#013265]">
          {" "}
          Our Story{" "}
        </h2>{" "}
        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {" "}
          Founded by MIT graduate Ram K. Rijal, Bloom Nepal School was born out
          of the belief that passion-driven learning empowers students to excel
          in every aspect of life. From just 17 students in 2013 to over 700
          today, our journey has been nothing short of extraordinary.{" "}
        </p>{" "}
      </Section>{" "}
      {/* Stats */}{" "}
      <Section className="bg-white">
        {" "}
        <div className="text-center">
          {" "}
          <h2 className="sanity-heading-2 tracking-wide font-bold text-[#013265]">
            {" "}
            Excellence in Numbers{" "}
          </h2>{" "}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="bg-[#dee5dc] p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              {" "}
              <h3 className="text-5xl font-extrabold text-[#be1e2d]">
                80%
              </h3>{" "}
              <p className="mt-2 text-gray-700">
                {" "}
                Graduates with top scholarships{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-[#dee5dc] p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              {" "}
              <h3 className="text-5xl font-extrabold text-[#013265]">
                700+
              </h3>{" "}
              <p className="mt-2 text-gray-700">Students Nationwide</p>{" "}
            </div>{" "}
            <div className="bg-[#dee5dc] p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              {" "}
              <h3 className="text-5xl font-extrabold text-green-700">
                35+
              </h3>{" "}
              <p className="mt-2 text-gray-700">Districts Represented</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Section>{" "}
      {/* Values */}{" "}
      <Section>
        {" "}
        <h2 className="sanity-heading-2 tracking-wide font-bold text-center text-[#013265]">
          {" "}
          Our Core Values{" "}
        </h2>{" "}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
            {" "}
            <h3 className="sanity-heading-3 font-semibold text-[#be1e2d]">
              {" "}
              Passion-Based Learning{" "}
            </h3>{" "}
            <p className="mt-4 text-gray-600">
              {" "}
              We value sports, arts, science, and every passion equally. Our
              mission is to align academic growth with each student’s unique
              interests.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
            {" "}
            <h3 className="sanity-heading-3 font-semibold text-green-700">
              {" "}
              Inspiring Environment{" "}
            </h3>{" "}
            <p className="mt-4 text-gray-600">
              {" "}
              Surrounded by passionate teachers and peers, our students
              naturally discover and develop their interests.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </Section>{" "}
      {/* Student Work */}{" "}
      <Section className="bg-[#dee5dc]">
        {" "}
        <div className="text-center">
          {" "}
          <h2 className="sanity-heading-2 tracking-wide font-bold text-[#013265]">
            {" "}
            Student Creations{" "}
          </h2>{" "}
          <p className="mt-4 text-gray-700">
            {" "}
            Discover what our students are building, creating, and
            achieving.{" "}
          </p>{" "}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {" "}
            <CTAInlink
              linkto="/stories"
              text="Stories"
              className="btn-primary btn-md"
            />{" "}
            <CTAInlink
              linkto="/events"
              text="Events"
              className="btn-primary btn-md"
            />{" "}
            <CTAInlink
              linkto="/calendar"
              text="Calendar"
              className="btn-primary btn-md"
            />{" "}
          </div>{" "}
        </div>{" "}
      </Section>{" "}
      {/* Scholarships */}{" "}
      <Section className="text-center">
        {" "}
        <h2 className="sanity-heading-2 tracking-wide font-bold text-[#013265]">
          {" "}
          Education for All{" "}
        </h2>{" "}
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          {" "}
          Students from over 35 districts – from the Himalayas to the Terai –
          study at Bloom Nepal thanks to our scholarship programs.{" "}
        </p>{" "}
        <div className="mt-8 flex justify-center gap-6">
          {" "}
          <CTAInlink
            linkto="/scholarship"
            text="Apply for Scholarship"
            className="btn-secondary btn-md"
          />{" "}
          <CTAInlink
            linkto="/support"
            text="Support a Student"
            className="btn-primary btn-md"
          />{" "}
        </div>{" "}
      </Section>{" "}
      {/* Partners */}{" "}
      <Section className="bg-white">
        {" "}
        <div className="text-center">
          {" "}
          <h2 className="sanity-heading-2 tracking-wide font-bold text-[#013265]">
            {" "}
            Our Partners{" "}
          </h2>{" "}
          <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
            {" "}
            <Image
              src="/google-logo.png"
              alt="Google"
              width={100}
              height={50}
              sizes="(max-width: 640px) 50vw, 100px"
            />{" "}
            <Image
              src="/zayed.png"
              alt="Zayed Prize"
              width={100}
              height={50}
              sizes="(max-width: 640px) 50vw, 100px"
            />{" "}
            <Image
              src="/bloom-ed.jpeg"
              alt="BloomEd"
              width={100}
              height={50}
              sizes="(max-width: 640px) 50vw, 100px"
            />{" "}
            <Image
              src="/canopy.jpeg"
              alt="Canopy Nepal"
              width={100}
              height={50}
              sizes="(max-width: 640px) 50vw, 100px"
            />{" "}
            <Image
              src="/mit-solve.jpeg"
              alt="MIT Solve"
              width={100}
              height={50}
              sizes="(max-width: 640px) 50vw, 100px"
            />{" "}
          </div>{" "}
        </div>{" "}
      </Section>{" "}
    </main>
  );
}
