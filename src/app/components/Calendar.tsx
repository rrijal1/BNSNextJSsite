"use client";

import React, { useState } from "react";
import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';

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
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return { day, month, weekday };
  };

  const formatTime = (timeString?: string) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const today = new Date();
  const formattedToday = `Today : ${today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;

  const toggleEvent = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <div>
      <div className="text-lg font-semibold mb-4 pb-2 border-b">{formattedToday}</div>
      <div className="divide-y divide-gray-200">
        {events.map((event) => {
          const { day, month, weekday } = formatDate(event.date);
          const hasDetails = event.details && event.details.length > 0;
          return (
            <div key={event._id} className="py-4">
              <div 
                className={`flex items-center ${hasDetails ? 'cursor-pointer' : ''}`}
                onClick={() => hasDetails && toggleEvent(event._id)}
              >
                <div className="flex flex-col items-center mr-4 text-center w-16">
                  <div className="text-gray-500 text-sm">{weekday}</div>
                  <div className="text-2xl font-bold">{day}</div>
                  <div className="text-gray-500 text-sm">{month}</div>
                </div>
                <div className="flex-1">
                  <div className={`font-bold ${event.isHoliday ? 'text-red-600' : ''}`}>{event.title}</div>
                  {event.timeFrom && event.timeTo && (
                    <div className="text-gray-500 text-sm">
                      {formatTime(event.timeFrom)} - {formatTime(event.timeTo)}
                    </div>
                  )}
                </div>
                {hasDetails && (
                  <div className={`transform transition-transform duration-200 ${expandedEvent === event._id ? 'rotate-90' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
              {expandedEvent === event._id && hasDetails && event.details && (
                <div className="mt-4 pl-20 prose">
                  <PortableText value={event.details} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
