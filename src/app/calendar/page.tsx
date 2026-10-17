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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
              Academic Year
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">School</span>{" "}
              <span className="text-brandRed">Calendar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Important dates, holidays, examinations, and school activities
              throughout the year.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <Suspense fallback={<CalendarLoading />}>
          <CalendarEvents />
        </Suspense>
      </div>
    </main>
  );
}
