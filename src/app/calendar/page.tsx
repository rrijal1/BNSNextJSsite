import { Suspense } from "react";
import { getallCalendarEvents } from "@/app/components/data/SanityData";
import Calendar from "@/app/components/Calendar";

// Loading component for better UX
function CalendarLoading() {
  return <div className="container mx-auto px-4 py-8">Loading calendar...</div>;
}

// Calendar list component
async function CalendarEvents() {
  try {
    const events = await getallCalendarEvents();
    return <Calendar events={events} />;
  } catch {
    return <div className="text-red-500">Failed to load calendar events</div>;
  }
}

export default function CalendarPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Calendar</h1>
      <Suspense fallback={<CalendarLoading />}>
        <CalendarEvents />
      </Suspense>
    </div>
  );
}
