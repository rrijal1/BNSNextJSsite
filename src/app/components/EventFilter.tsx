"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ClubEvent } from '@/src/types/allTypes';

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
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'upcoming', 'ongoing', 'completed'

  const filteredEvents = () => {
    switch (activeFilter) {
      case 'upcoming':
        return upcomingEvents;
      case 'ongoing':
        return ongoingEvents;
      case 'completed':
        return completedEvents;
      case 'all':
      default:
        return allEvents;
    }
  };

  const EventCard = ({ event }: { event: ClubEvent }) => (
    <Link href={`/events/${event.slug.current}`} className="block border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      {event.image && (
        <div className="relative w-full h-48 mb-4">
          <Image
            src={event.image.asset._ref.replace('image-', 'https://cdn.sanity.io/images/hdf6d0e0/production/').replace('-png', '.png').replace('-jpg', '.jpg').replace('-jpeg', '.jpeg').replace('-gif', '.gif')}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
      <p className="text-gray-700">{event.excerpt}</p>
    </Link>
  );

  return (
    <>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-md ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          All Events
        </button>
        <button
          onClick={() => setActiveFilter('upcoming')}
          className={`px-4 py-2 rounded-md ${activeFilter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveFilter('ongoing')}
          className={`px-4 py-2 rounded-md ${activeFilter === 'ongoing' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setActiveFilter('completed')}
          className={`px-4 py-2 rounded-md ${activeFilter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Completed
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents().length > 0 ? (
          filteredEvents().map(event => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No {activeFilter !== 'all' ? activeFilter : ''} events found.</p>
        )}
      </div>
    </>
  );
};

export default EventFilter;
