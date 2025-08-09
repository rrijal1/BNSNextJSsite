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
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'upcoming', 'ongoing', 'completed'

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

  const EventCard = ({ event }: { event: ClubEvent }) => (
    <Link
      href={`/events/${event.slug.current}`}
      className="block border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex gap-4">
        {event.image && (
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src={urlFor(event.image).width(200).height(200).url()}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        )}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
          <p className="text-gray-600 text-sm mb-2">
            {new Date(event.startDate).toLocaleDateString()} -{" "}
            {new Date(event.endDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700">{event.excerpt}</p>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-md ${activeFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          All Events
        </button>
        <button
          onClick={() => setActiveFilter("upcoming")}
          className={`px-4 py-2 rounded-md ${activeFilter === "upcoming" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveFilter("ongoing")}
          className={`px-4 py-2 rounded-md ${activeFilter === "ongoing" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setActiveFilter("completed")}
          className={`px-4 py-2 rounded-md ${activeFilter === "completed" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Completed
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {filteredEvents().length > 0 ? (
          filteredEvents().map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No {activeFilter !== "all" ? activeFilter : ""} events found.
          </p>
        )}
      </div>
    </>
  );
};

export default EventFilter;
