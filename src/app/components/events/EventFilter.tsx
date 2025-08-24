"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { ClubEvent } from "@/types/allTypes";

interface EventFilterProps {
  allEvents: ClubEvent[];
  upcomingEvents: ClubEvent[];
  ongoingEvents: ClubEvent[];
  completedEvents: ClubEvent[];
}

const EventFilter: React.FC<EventFilterProps> = ({
  allEvents,
  upcomingEvents,
  ongoingEvents,
  completedEvents,
}) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = () => {
    switch (activeFilter) {
      case "upcoming":
        return upcomingEvents;
      case "ongoing":
        return ongoingEvents;
      case "completed":
        return completedEvents;
      case "all":
      default:
        return allEvents;
    }
  };

  const getEventStatus = (event: ClubEvent) => {
    const currentDate = new Date();
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    if (startDate > currentDate) return "upcoming";
    if (startDate <= currentDate && endDate >= currentDate) return "ongoing";
    return "completed";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Upcoming
          </span>
        );
      case "ongoing":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandGreen/10 text-brandGreen">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            Ongoing
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandRed/10 text-brandRed">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const EventCard = ({ event }: { event: ClubEvent }) => {
    const status = getEventStatus(event);

    return (
      <Link
        href={`/events/${event.slug.current}`}
        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-brandBlue/20 transition-all duration-300 hover:shadow-md"
      >
        <div className="lg:flex">
          {event.image && (
            <div className="lg:w-1/3 relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-12 lg:aspect-none lg:h-full">
                <Image
                  src={urlFor(event.image).width(400).height(300).url()}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}

          <div className={`p-6 lg:p-8 flex-1 ${!event.image ? "lg:p-8" : ""}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  {getStatusBadge(status)}
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(event.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(event.endDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brandBlue transition-colors duration-200 line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {event.excerpt}
                </p>
              </div>

              <div className="ml-4 flex-shrink-0">
                <div className="w-10 h-10 bg-brandBlue/10 rounded-full flex items-center justify-center group-hover:bg-brandBlue group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center text-brandBlue group-hover:text-brandRed transition-colors duration-200">
              <span className="text-sm font-medium">Learn More</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const filterOptions = [
    {
      key: "all",
      label: "All Events",
      count: allEvents.length,
      color: "brandBlue",
    },
    {
      key: "upcoming",
      label: "Upcoming",
      count: upcomingEvents.length,
      color: "brandBlue",
    },
    {
      key: "ongoing",
      label: "Ongoing",
      count: ongoingEvents.length,
      color: "brandGreen",
    },
    {
      key: "completed",
      label: "Completed",
      count: completedEvents.length,
      color: "brandRed",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Filter Events
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === option.key
                  ? option.key === "all" || option.key === "upcoming"
                    ? "bg-gradient-to-r from-brandBlue to-blue-600 text-white shadow-lg"
                    : option.key === "ongoing"
                      ? "bg-gradient-to-r from-brandGreen to-green-600 text-white shadow-lg"
                      : "bg-gradient-to-r from-brandRed to-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{option.label}</span>
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                    activeFilter === option.key
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {option.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="space-y-6">
        {filteredEvents().length > 0 ? (
          filteredEvents().map((event, index) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {activeFilter !== "all" ? activeFilter : ""} events found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {activeFilter === "all"
                ? "Check back soon for exciting club events and activities."
                : `No ${activeFilter} events are currently available. Try selecting a different filter.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventFilter;
