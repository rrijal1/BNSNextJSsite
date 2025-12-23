import { getAllClubEvents } from "@/app/components/data/SanityData";
import { ClubEvent } from "@/types/allTypes";
import EventFilter from "@/app/components/events/EventFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover exciting club activities, competitions, and community events at Bloom Nepal School. Stay updated with upcoming, ongoing, and past events.",
  keywords: [
    "Bloom Nepal events",
    "school events Nepal",
    "club activities",
    "student competitions",
    "school calendar",
  ],
  openGraph: {
    title: "Events | Bloom Nepal School",
    description:
      "Discover exciting club activities, competitions, and community events at Bloom Nepal School.",
  },
};

const EventsPage = async () => {
  const events: ClubEvent[] = await getAllClubEvents();
  const currentDate = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.startDate) > currentDate
  );
  const ongoingEvents = events.filter(
    (event) =>
      new Date(event.startDate) <= currentDate &&
      new Date(event.endDate) >= currentDate
  );
  const completedEvents = events.filter(
    (event) => new Date(event.endDate) < currentDate
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6 hover:bg-brandBlue/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
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
              School Events
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-brandBlue">Club</span> Events
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gray-700">
                at
              </span>{" "}
              <span className="text-gray-900">Bloom Nepal</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
              Discover exciting club activities, competitions, and community
              events that bring our school together and create lasting memories.
            </p>

            {/* Event Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl font-bold text-brandBlue">
                  {upcomingEvents.length}
                </div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl font-bold text-brandBlue">
                  {ongoingEvents.length}
                </div>
                <div className="text-sm text-gray-600">Ongoing Events</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl font-bold text-brandRed">
                  {completedEvents.length}
                </div>
                <div className="text-sm text-gray-600">Completed Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6">
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                Browse Events
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-brandBlue">Explore</span> Our Events
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Filter through our diverse range of club events to find
                activities that match your interests and schedule.
              </p>
            </div>

            <EventFilter
              allEvents={events}
              upcomingEvents={upcomingEvents}
              ongoingEvents={ongoingEvents}
              completedEvents={completedEvents}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
