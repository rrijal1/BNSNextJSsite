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
          style={{ width: 'auto', height: 'auto' }}
        />
      );
    },
  },
};

function getCurrentBSYear() {
  const today = new Date();
  return today.getFullYear() + 57;
}

function todayDateRaw() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "short" });
  const date = today.getDate();
  const year = today.getFullYear();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const time = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${hours >= 12 ? "PM" : "AM"}`;
  return `${month}-${date}, ${year} ${time}`;
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
    <div>
      <table
        className="mt-4 md:mt-8 lg:mt-12 border-collapse formatted-table"
        style={{ borderCollapse: "collapse" }}
      >
        <thead className="font-medium">
          <tr className="hover:bg-red-800 hover:text-white md:text-xl">
            <th className="font-medium">Grade</th>
            <th className="font-medium">Basic Fees</th>
            {hasMealPlan && (
              <th className="font-medium">Basic Fees With Meal Plans</th>
            )}
            {hasHostel && (
              <th className="font-medium">Fees with Hostel Facilities</th>
            )}
          </tr>
        </thead>
        <tbody>
          {requiredClasses.map((grade) => {
            const feeIndex = classesInCurrentSchoolLocation.indexOf(grade);
            const fee = currentSchoolFees[feeIndex];
            return (
              <tr key={grade} className="hover:bg-blue-800 hover:text-white">
                <td className="font-medium">{grade}</td>
                <td>{fee?.basicFees ?? 0}</td>
                {hasMealPlan && <td>{fee?.basicFeesWithMeals ?? 0}</td>}
                {hasHostel && (
                  <td>
                    {fee?.hostelFees ?? (
                      <span className="text-sm">
                        Hostel Facility Not Available
                      </span>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="prose mt-4">
        <PortableText value={otherFeesForCurrentSchool} />
      </div>
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
    <div className="mt-8">
      <h3 className="section-head">
        Payment Procedure For <span className="text-red-800">{location}</span>
      </h3>
      <div className="prose">
        <PortableText value={requiredData} components={ptComponents} />
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
    <div className="min-h-screen">
      {showStickyMenu && (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 hidden lg:block py-4">
          <div className="section-for-small-devices">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-600">You&apos;re viewing: </span>
                <span className="font-medium capitalize text-red-800">
                  Bloom Nepal School, {currentSchoolLocation}
                </span>
              </div>
              <button
                className={`location-button font-medium uppercase rounded no-select ${showStickyOptions ? "bg-red-900" : "bg-blue-900"}`}
                onClick={() => setShowStickyOptions((s) => !s)}
              >
                {showStickyOptions ? "X" : "Change"}
              </button>
            </div>
            {showStickyOptions && (
              <div className="mt-4 flex justify-center gap-3">
                {data.schoolLocations.map((loc) => (
                  <button
                    key={`sticky-desktop-${loc.location}`}
                    className={`location-button rounded ${currentSchoolLocation === loc.location ? "bg-red-900" : "bg-blue-900"}`}
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

      <section className="lg:hidden lg:border-r lg:border-b lg:border-gray-600">
        <div className="section-for-small-devices" ref={schoolSelectionBox}>
          <div className="flex justify-between items-center">
            <div className="mr-4">
              <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wide font-medium">
                You&apos;re viewing
              </div>
              <div>
                Bloom Nepal School,{" "}
                <span className="font-medium capitalize text-red-800">
                  {currentSchoolLocation}
                </span>
              </div>
            </div>
            <button
              className={`location-button font-medium uppercase rounded no-select ${showOptions ? "bg-red-900" : "bg-blue-900"}`}
              onClick={() => setShowOptions((s) => !s)}
            >
              {showOptions ? "X" : "Change"}
            </button>
          </div>
          {showOptions && (
            <div className="mt-8 flex-col">
              {data.schoolLocations.map((loc) => (
                <button
                  key={loc.location}
                  className={`rounded bg-brand-grey text-white py-4 px-6 my-4 mr-4 block ${currentSchoolLocation === loc.location ? "bg-brand-blue" : ""} hover:bg-brand-red`}
                  onClick={() => {
                    setCurrentSchoolLocation(loc.location);
                    setShowOptions(false);
                    handleAfterClick();
                  }}
                >
                  Bloom Nepal School,{" "}
                  <span className="capitalize">{loc.location}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="lg:border-r lg:border-b lg:border-gray-600">
        <div className="section-for-small-devices">
          <h1 className="section-head lg:text-center text-2xl font-bold">
            School Fees and Payment Methods
          </h1>
          <p className="mt-4 lg:px-12 lg:mt-8 lg:text-center text-gray-600">
            Towards our mission of making quality education accessible to
            everyone, we have worked hard to put up a competitive pricing
            without compromising the quality of the education we provide. Please
            select the desired school for details.
          </p>
          <div className="mt-6 hidden lg:flex flex-wrap justify-center gap-3">
            {data.schoolLocations.map((loc) => (
              <button
                key={`top-desktop-${loc.location}`}
                className={`location-button rounded ${currentSchoolLocation === loc.location ? "bg-red-900" : "bg-blue-900"}`}
                onClick={() => handleSelectSchool(loc.location)}
              >
                {loc.location}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4" ref={feesAndPaymentRef}>
        <section className="lg:border-l lg:border-b lg:border-gray-600">
          <div className="section-for-small-devices">
            <h2 className="section-head text-xl font-bold mt-8 mb-4">
              Fee Structure {getCurrentBSYear()} BS ({todayDateRaw()}) -{" "}
              <span className="text-red-800 capitalize">
                {currentSchoolLocation}
              </span>
            </h2>
            <SchoolPricingTable
              location={currentSchoolLocation}
              fees={data.fees}
              otherFees={data.otherFees}
            />
          </div>
        </section>
        <section className="lg:border-r lg:border-b lg:border-gray-600">
          <div className="section-for-small-devices">
            <SchoolHowToPay
              location={currentSchoolLocation}
              howToPay={data.paymentProcedure}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
