"use client";

import React, { useState, useEffect, useRef } from "react";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const serializers = {
  types: {
    code: (props: { node: { language: string; code: string } }) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

interface Location {
  location: string;
}

interface Fee {
  school: Location;
  grade: string;
  basicFees: number;
  basicFeesWithMeals: number | null;
  hostelFees: number | string | null;
}

interface OtherFee {
  location: Location;
  _rawDetails: PortableTextBlock[];
}

interface PaymentProcedure {
  location: Location;
  _rawDetails: PortableTextBlock[];
}

interface SanityData {
  schoolLocations: Location[];
  fees: Fee[];
  otherFees: OtherFee[];
  paymentProcedure: PaymentProcedure[];
}

async function getAllSanityData() {
  const query = `{
    "schoolLocations": *[_type == "schoolLocations"] {
      location
    },
    "fees": *[_type == "fees"] {
      school->{location},
      grade,
      basicFees,
      basicFeesWithMeals,
      hostelFees
    },
    "otherFees": *[_type == "otherFees"] {
      location->{location},
      _rawDetails
    },
    "paymentProcedure": *[_type == "paymentProcedure"] {
      location->{location},
      _rawDetails
    }
  }`;

  try {
    const data = await client.fetch(query);
    console.log("Fetched data from Sanity:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      schoolLocations: [],
      fees: [],
      otherFees: [],
      paymentProcedure: [],
    };
  }
}

// Helper function to approximate BS year
const getCurrentBSYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  return year + 57; // Rough BS conversion (e.g., 2025 AD ≈ 2082 BS)
};

const todayDateRaw = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "short" });
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const time = `${hours}:${minutes < 10 ? "0" + minutes : minutes} AM`;
  return `${month}-${date}, ${year} ${time}`;
};

const SchoolPricingTable = ({
  location,
  fees,
  otherFees,
}: {
  location: string;
  fees: Fee[];
  otherFees: OtherFee[];
}) => {
  const otherFeesForCurrentSchool =
    otherFees.find((schoolData) => schoolData.location.location === location)
      ?._rawDetails || [];

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
                <td>{fee?.basicFees || 0}</td>
                {hasMealPlan && <td>{fee?.basicFeesWithMeals || 0}</td>}
                {hasHostel && (
                  <td>
                    {fee?.hostelFees || (
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
      <PortableText
        value={otherFeesForCurrentSchool}
        components={serializers}
      />
    </div>
  );
};

const SchoolHowToPay = ({
  location,
  howToPay,
}: {
  location: string;
  howToPay: PaymentProcedure[];
}) => {
  const requiredData =
    howToPay.find((schoolData) => schoolData.location.location === location)
      ?._rawDetails || [];
  return (
    <div className="mt-8">
      <h3 className="section-head">
        Payment Procedure For <span className="text-red-800">{location}</span>
      </h3>
      <PortableText value={requiredData} components={serializers} />
    </div>
  );
};

export default function FeesPage() {
  const [showOptions, setShowOptions] = useState(false);
  const [currentSchoolLocation, setCurrentSchoolLocation] = useState("Itahari");
  const [data, setData] = useState<SanityData>({
    schoolLocations: [],
    fees: [],
    otherFees: [],
    paymentProcedure: [],
  });
  const schoolSelectionBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getAllSanityData();
      setData(fetchedData);
    }
    fetchData();
  }, []);

  const handleAfterClick = () => {
    if (schoolSelectionBox.current) {
      schoolSelectionBox.current.scrollIntoView();
      window.scrollBy(0, -window.innerHeight / 2);
    }
    console.log("School changed to:", currentSchoolLocation);
  };

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="md:border py-8 px-8" ref={schoolSelectionBox}>
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
              className={`font-medium uppercase text-white py-2 px-4 rounded no-select ${
                showOptions ? "bg-red-900" : "bg-blue-900"
              }`}
              onClick={() => setShowOptions(!showOptions)}
            >
              {showOptions ? "X" : "Change"}
            </button>
          </div>
          {showOptions && (
            <div className="mt-8 flex-col">
              {data.schoolLocations.map((location, index) => (
                <button
                  key={index}
                  className={`rounded bg-gray-600 text-white py-4 px-6 my-4 mr-4 block ${
                    currentSchoolLocation === location.location
                      ? "bg-red-800"
                      : ""
                  }`}
                  onClick={() => {
                    setCurrentSchoolLocation(location.location);
                    setShowOptions(false);
                    handleAfterClick();
                  }}
                >
                  Bloom Nepal School,{" "}
                  <span className="capitalize">{location.location}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="lg:border-r lg:border-b lg:border-gray-600 lg:mt-16 mt-8 px-4">
        <h1 className="section-head lg:text-center text-2xl font-bold">
          School Fees and Payment Methods
        </h1>
        <p className="mt-4 lg:px-12 lg:mt-8 lg:text-center text-gray-600">
          Towards our mission of making quality education accessible to
          everyone, we have worked hard to put up a competitive pricing without
          compromising the quality of the education we provide. Please select
          the desired school for details.
        </p>
      </section>

      <div className="px-4">
        <section className="lg:border-l lg:border-b lg:border-gray-600 lg:mt-48 md:mt-32 mt-16">
          <h2 className="section-head text-xl font-bold mt-8 mb-4">
            Fee Structure {getCurrentBSYear()} BS ({todayDateRaw()})
          </h2>
          <SchoolPricingTable
            location={currentSchoolLocation}
            fees={data.fees}
            otherFees={data.otherFees}
          />
        </section>
        <section className="lg:border-r lg:border-b lg:border-gray-600 mt-16">
          <SchoolHowToPay
            location={currentSchoolLocation}
            howToPay={data.paymentProcedure}
          />
        </section>
      </div>
    </div>
  );
}
