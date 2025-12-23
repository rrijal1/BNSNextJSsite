"use client";

import React, { useState, useMemo } from "react";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

interface CalendarEvent {
  _id: string;
  date: string;
  title: string;
  timeFrom?: string;
  timeTo?: string;
  isHoliday?: boolean;
  details?: TypedObject[];
}

interface CalendarProps {
  events: CalendarEvent[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const fullMonth = date.toLocaleDateString("en-US", { month: "long" });
    return { day, month, weekday, fullMonth };
  };

  const formatTime = (timeString?: string) => {
    if (!timeString) return "";
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  // Sort events with today's date in the middle, future events at top, past events at bottom
  const sortedEvents = useMemo(() => {
    const sortedList = [...events].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const todayDate = new Date(todayString);

      // If one is today, prioritize it
      if (a.date === todayString) return -1;
      if (b.date === todayString) return 1;

      // Future events (ascending order - nearest first)
      if (dateA >= todayDate && dateB >= todayDate) {
        return dateA.getTime() - dateB.getTime();
      }

      // Past events (descending order - most recent first)
      if (dateA < todayDate && dateB < todayDate) {
        return dateB.getTime() - dateA.getTime();
      }

      // Mixed: future events come before past events
      if (dateA >= todayDate && dateB < todayDate) return -1;
      if (dateA < todayDate && dateB >= todayDate) return 1;

      return 0;
    });

    return sortedList;
  }, [events, todayString]);

  const toggleEvent = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const getEventStatus = (eventDate: string) => {
    const eventDateObj = new Date(eventDate);
    const todayDate = new Date(todayString);

    if (eventDate === todayString) return "today";
    if (eventDateObj > todayDate) return "future";
    return "past";
  };

  const getRelativeDate = (eventDate: string) => {
    const eventDateObj = new Date(eventDate);
    const todayDate = new Date(todayString);
    const diffTime = eventDateObj.getTime() - todayDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays === -1) return "Yesterday";
    if (diffDays > 1 && diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays < -1 && diffDays >= -7)
      return `${Math.abs(diffDays)} days ago`;
    if (diffDays > 7)
      return `In ${Math.ceil(diffDays / 7)} week${Math.ceil(diffDays / 7) > 1 ? "s" : ""}`;
    if (diffDays < -7)
      return `${Math.ceil(Math.abs(diffDays) / 7)} week${Math.ceil(Math.abs(diffDays) / 7) > 1 ? "s" : ""} ago`;

    return "";
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-brandBlue rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-4">
              <svg
                className="w-4 h-4 mr-2"
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
              School Calendar
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Upcoming Events
            </h1>
            <p className="text-blue-100 text-lg">
              {today.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
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
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {sortedEvents.map((event) => {
          const { day, month, weekday } = formatDate(event.date);
          const hasDetails = event.details && event.details.length > 0;
          const eventStatus = getEventStatus(event.date);
          const relativeDate = getRelativeDate(event.date);

          return (
            <div
              key={event._id}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                eventStatus === "today"
                  ? "border-brandGreen bg-gradient-to-r from-brandGreen/5 to-transparent shadow-lg"
                  : eventStatus === "future"
                    ? "border-gray-100 hover:border-brandBlue/20 hover:shadow-md"
                    : "border-gray-100 opacity-75 hover:opacity-100"
              } ${hasDetails ? "cursor-pointer" : ""}`}
              onClick={() => hasDetails && toggleEvent(event._id)}
            >
              <div className="p-6">
                <div className="flex items-center">
                  {/* Date Section */}
                  <div
                    className={`flex flex-col items-center text-center w-20 mr-6 ${
                      eventStatus === "today"
                        ? "text-brandGreen"
                        : "text-gray-600"
                    }`}
                  >
                    <div className="text-sm font-medium uppercase tracking-wide">
                      {weekday}
                    </div>
                    <div
                      className={`text-3xl font-bold ${
                        eventStatus === "today"
                          ? "text-brandGreen"
                          : "text-gray-900"
                      }`}
                    >
                      {day}
                    </div>
                    <div className="text-sm font-medium">{month}</div>
                  </div>

                  {/* Event Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {event.isHoliday && (
                            <div className="text-2xl">🎉</div>
                          )}
                          <h3
                            className={`text-xl font-bold ${
                              event.isHoliday
                                ? "text-brandRed"
                                : "text-gray-900"
                            }`}
                          >
                            {event.title}
                          </h3>
                          {eventStatus === "today" && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brandGreen text-white">
                              Today
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          {event.timeFrom && event.timeTo && (
                            <div className="flex items-center">
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
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {formatTime(event.timeFrom)} -{" "}
                              {formatTime(event.timeTo)}
                            </div>
                          )}
                          <div className="flex items-center">
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
                            {relativeDate}
                          </div>
                        </div>
                      </div>

                      {hasDetails && (
                        <div
                          className={`transform transition-transform duration-200 ${
                            expandedEvent === event._id ? "rotate-90" : ""
                          }`}
                        >
                          <svg
                            className="w-6 h-6 text-gray-400"
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
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedEvent === event._id && hasDetails && event.details && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="prose prose-sm max-w-none text-gray-700">
                      <PortableText value={event.details} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {sortedEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No events scheduled
          </h3>
          <p className="text-gray-600">
            Check back later for upcoming school events and activities.
          </p>
        </div>
      )}
    </div>
  );
};

export default Calendar;
