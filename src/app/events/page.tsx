import { getAllClubEvents } from "@/lib/sanity";
import { ClubEvent } from "@/types/allTypes";
import EventFilter from "@/app/components/EventFilter";

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Club Events</h1>
      <EventFilter
        allEvents={events}
        upcomingEvents={upcomingEvents}
        ongoingEvents={ongoingEvents}
        completedEvents={completedEvents}
      />
    </div>
  );
};

export default EventsPage;
