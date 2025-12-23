import { Suspense } from "react";
import { getallCalendarEvents } from "@/app/components/data/SanityData";
import Calendar from "@/app/components/calendar/Calendar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Stay updated with Bloom Nepal School's academic calendar. View important dates, holidays, events, examinations, and school activities throughout the year.",
  keywords: [
    "Bloom Nepal calendar",
    "school calendar",
    "academic calendar Nepal",
    "school holidays",
    "exam dates",
  ],
  openGraph: {
    title: "Calendar | Bloom Nepal School",
    description:
      "Stay updated with our academic calendar, important dates, and school events.",
  },
};

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
      <Suspense fallback={<CalendarLoading />}>
        <CalendarEvents />
      </Suspense>
    </div>
  );
}
