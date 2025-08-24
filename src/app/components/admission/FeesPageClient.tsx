"use client";

import React, { useEffect, useRef, useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface LocationDoc {
  location: string;
}

export interface Fee {
  school: LocationDoc;
  grade: string;
  basicFees: number;
  basicFeesWithMeals: number | null;
  hostelFees: number | string | null;
}

interface OtherFee {
  location: LocationDoc;
  details: PortableTextBlock[];
}

interface PaymentProcedure {
  location: LocationDoc;
  details: PortableTextBlock[];
}

export interface FeesSanityData {
  schoolLocations: LocationDoc[];
  fees: Fee[];
  otherFees: OtherFee[];
  paymentProcedure: PaymentProcedure[];
}

const ptComponents = {
  types: {
    blockImage: ({ value }: { value: SanityImageSource }) => {
      if (!value) {
        return null;
      }
      return (
        <Image
          src={urlFor(value).url()}
          alt="QR Code"
          width={200}
          height={200}
          className="mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      );
    },
  },
};

function getCurrentBSYear() {
  const today = new Date();
  return today.getFullYear() + 57;
}

function SchoolPricingTable({
  location,
  fees,
  otherFees,
}: {
  location: string;
  fees: Fee[];
  otherFees: OtherFee[];
}) {
  const otherFeesForCurrentSchool =
    otherFees.find((schoolData) => schoolData.location.location === location)
      ?.details || [];
  const classesInAscendingOrder = [
    "PG",
    "Nursery",
    "LKG",
    "UKG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const currentSchoolFees = fees.filter(
    (fee) => fee.school.location === location
  );
  const classesInCurrentSchoolLocation = currentSchoolFees.map(
    (fee) => fee.grade
  );
  const requiredClasses = classesInAscendingOrder.filter((grade) =>
    classesInCurrentSchoolLocation.includes(grade)
  );
  const hasMealPlan = currentSchoolFees[0]?.basicFeesWithMeals !== null;
  const hasHostel = currentSchoolFees[0]?.hostelFees !== null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-brandGreen to-green-600 text-white">
              <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                Grade
              </th>
              <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                Basic Fees
              </th>
              {hasMealPlan && (
                <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                  With Meal Plans
                </th>
              )}
              {hasHostel && (
                <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wide">
                  With Hostel
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requiredClasses.map((grade, index) => {
              const feeIndex = classesInCurrentSchoolLocation.indexOf(grade);
              const fee = currentSchoolFees[feeIndex];
              return (
                <tr
                  key={grade}
                  className={`hover:bg-brandGreen/5 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900 text-lg">
                    {grade}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandGreen/10 text-brandGreen font-semibold">
                      Rs. {fee?.basicFees?.toLocaleString() ?? 0}
                    </span>
                  </td>
                  {hasMealPlan && (
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandBlue/10 text-brandBlue font-semibold">
                        Rs. {fee?.basicFeesWithMeals?.toLocaleString() ?? 0}
                      </span>
                    </td>
                  )}
                  {hasHostel && (
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {fee?.hostelFees ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-brandRed/10 text-brandRed font-semibold">
                          Rs.{" "}
                          {typeof fee.hostelFees === "number"
                            ? fee.hostelFees.toLocaleString()
                            : fee.hostelFees}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-500 font-medium">
                          Not Available
                        </span>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {otherFeesForCurrentSchool.length > 0 && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="prose prose-sm max-w-none text-gray-700">
            <PortableText value={otherFeesForCurrentSchool} />
          </div>
        </div>
      )}
    </div>
  );
}

function SchoolHowToPay({
  location,
  howToPay,
}: {
  location: string;
  howToPay: PaymentProcedure[];
}) {
  const requiredData =
    howToPay.find((schoolData) => schoolData.location.location === location)
      ?.details || [];
  return (
    <div className="mt-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-brandBlue to-blue-600 px-6 py-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Payment Procedure for{" "}
            <span className="px-1 text-yellow-300 capitalize">{location}</span>
          </h3>
        </div>
        <div className="px-6 py-6">
          <div className="prose prose-lg max-w-none text-gray-700">
            <PortableText value={requiredData} components={ptComponents} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeesPageClient({ data }: { data: FeesSanityData }) {
  const [currentSchoolLocation, setCurrentSchoolLocation] = useState("");
  const schoolSelectionBox = useRef<HTMLDivElement>(null);
  const feesAreaRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showStickyMenu, setShowStickyMenu] = useState<boolean>(false);
  const [showStickyOptions, setShowStickyOptions] = useState<boolean>(false);
  const feesAndPaymentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (data.schoolLocations[0]?.location) {
      setCurrentSchoolLocation(data.schoolLocations[0].location);
    }
    footerRef.current = document.querySelector("#footer");
  }, [data.schoolLocations]);

  useEffect(() => {
    const handleScroll = () => {
      if (feesAndPaymentRef.current && footerRef.current) {
        const { top, bottom } =
          feesAndPaymentRef.current.getBoundingClientRect();
        const { top: footerTop } = footerRef.current.getBoundingClientRect();
        const isFooterVisible = footerTop < window.innerHeight;

        if (top < 0 && bottom > 0 && !isFooterVisible) {
          setShowStickyMenu(true);
        } else {
          setShowStickyMenu(false);
          setShowStickyOptions(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAfterClick = () => {
    if (schoolSelectionBox.current) {
      schoolSelectionBox.current.scrollIntoView();
      window.scrollBy(0, -window.innerHeight / 2);
    }
  };

  const handleSelectSchool = (loc: string) => {
    setCurrentSchoolLocation(loc);
    if (feesAreaRef.current) {
      feesAreaRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {showStickyMenu && (
        <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 hidden lg:block py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brandGreen rounded-full animate-pulse"></div>
                <span className="text-gray-600 font-medium">
                  You are viewing:{" "}
                </span>
                <span className="font-bold capitalize text-brandGreen bg-brandGreen/10 px-3 py-1 rounded-full text-sm">
                  Bloom Nepal School, {currentSchoolLocation}
                </span>
              </div>
              <button
                className={`px-4 py-2 font-semibold uppercase rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md ${
                  showStickyOptions
                    ? "bg-brandRed text-white hover:bg-brandRed/90"
                    : "bg-brandBlue text-white hover:bg-brandBlue/90"
                }`}
                onClick={() => setShowStickyOptions((s) => !s)}
              >
                {showStickyOptions ? "✕ Close" : "Change Location"}
              </button>
            </div>
            {showStickyOptions && (
              <div className="mt-4 flex justify-center gap-3 animate-fadeIn">
                {data.schoolLocations.map((loc) => (
                  <button
                    key={`sticky-desktop-${loc.location}`}
                    className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md capitalize ${
                      currentSchoolLocation === loc.location
                        ? "bg-brandGreen text-white shadow-lg"
                        : "bg-white text-brandBlue border-2 border-brandBlue hover:bg-brandBlue hover:text-white"
                    }`}
                    onClick={() => {
                      handleSelectSchool(loc.location);
                      setShowStickyOptions(false);
                    }}
                  >
                    {loc.location}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Location Selector */}
      <section className="lg:hidden bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6" ref={schoolSelectionBox}>
          <div className="flex justify-between items-center">
            <div className="flex-1 mr-4">
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                Currently Viewing
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brandGreen rounded-full"></div>
                <span className="text-gray-900 font-medium">
                  Bloom Nepal School,
                </span>
                <span className="font-bold capitalize text-brandGreen bg-brandGreen/10 px-2 py-1 rounded-lg text-sm">
                  {currentSchoolLocation}
                </span>
              </div>
            </div>
            <button
              className={`px-4 py-2 font-semibold uppercase rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md text-sm ${
                showOptions
                  ? "bg-brandRed text-white hover:bg-brandRed/90"
                  : "bg-brandBlue text-white hover:bg-brandBlue/90"
              }`}
              onClick={() => setShowOptions((s) => !s)}
            >
              {showOptions ? "✕" : "Change"}
            </button>
          </div>
          {showOptions && (
            <div className="mt-6 space-y-3 animate-fadeIn">
              {data.schoolLocations.map((loc) => (
                <button
                  key={loc.location}
                  className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md capitalize ${
                    currentSchoolLocation === loc.location
                      ? "bg-brandGreen text-white shadow-lg"
                      : "bg-white text-brandBlue border-2 border-brandBlue hover:bg-brandBlue hover:text-white"
                  }`}
                  onClick={() => {
                    setCurrentSchoolLocation(loc.location);
                    setShowOptions(false);
                    handleAfterClick();
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        currentSchoolLocation === loc.location
                          ? "bg-white"
                          : "bg-brandBlue"
                      }`}
                    ></div>
                    <span>Bloom Nepal School, {loc.location}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brandGreen/10 via-white to-brandBlue/5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
              </svg>
              School Fees & Payment
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transparent{" "}
              <span className="bg-gradient-to-r from-brandGreen to-green-600 bg-clip-text text-transparent">
                Pricing
              </span>
              <br />
              for Quality Education
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Towards our mission of making quality education accessible to
              everyone, we maintain competitive pricing without compromising
              educational quality.
            </p>

            {/* Desktop Location Selector */}
            <div className="hidden lg:flex flex-wrap justify-center gap-4 mt-8">
              {data.schoolLocations.map((loc) => (
                <button
                  key={`top-desktop-${loc.location}`}
                  className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md capitalize ${
                    currentSchoolLocation === loc.location
                      ? "bg-brandGreen text-white shadow-lg"
                      : "bg-white text-brandBlue border-2 border-brandBlue hover:bg-brandBlue hover:text-white"
                  }`}
                  onClick={() => handleSelectSchool(loc.location)}
                >
                  {loc.location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees Content */}
      <div className="container mx-auto px-4 py-12" ref={feesAndPaymentRef}>
        {/* Fee Structure Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-4">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Fee Structure {getCurrentBSYear()} BS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-brandGreen capitalize">
                {currentSchoolLocation}
              </span>{" "}
              School Fees
            </h2>
          </div>

          <SchoolPricingTable
            location={currentSchoolLocation}
            fees={data.fees}
            otherFees={data.otherFees}
          />
        </section>

        {/* Payment Procedure Section */}
        <section>
          <SchoolHowToPay
            location={currentSchoolLocation}
            howToPay={data.paymentProcedure}
          />
        </section>
      </div>
    </main>
  );
}
