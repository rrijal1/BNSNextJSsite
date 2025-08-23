import { client, urlFor } from "@/lib/sanity";
import { ClubEvent } from "@/types/allTypes";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import Link from "next/link";

// Align with existing pattern used elsewhere in app: params as Promise
type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

async function getEvent(
  slug: string
): Promise<ClubEvent & { body?: TypedObject[] }> {
  const query = `*[_type == "clubevent" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    "image": mainImage,
    slug,
    startDate,
    endDate,
    body
  }`;
  const event: ClubEvent & { body?: TypedObject[] } = await client.fetch(
    query,
    { slug }
  );
  return event;
}

const EventDetailPage = async ({ params }: EventDetailPageProps) => {
  const resolved = await params;
  const event = await getEvent(resolved.slug);
  console.log("Fetched event data for dynamic page:", event);

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
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
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Event Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 bg-brandBlue text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  const getEventStatus = () => {
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
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-brandBlue/10 text-brandBlue">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Upcoming Event
          </span>
        );
      case "ongoing":
        return (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-brandGreen/10 text-brandGreen">
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
                d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            Ongoing Event
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-brandRed/10 text-brandRed">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Completed Event
          </span>
        );
      default:
        return null;
    }
  };

  const status = getEventStatus();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-gray-500 hover:text-brandBlue transition-colors"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
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
            <Link
              href="/events"
              className="text-gray-500 hover:text-brandBlue transition-colors"
            >
              Events
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
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
            <span className="text-gray-900 font-medium truncate">
              {event.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/events"
              className="inline-flex items-center text-brandBlue hover:text-blue-600 transition-colors duration-200 mb-8 group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Events
            </Link>

            {/* Event Status and Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {getStatusBadge(status)}
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-5 h-5 mr-2"
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
                <span className="font-medium">
                  {new Date(event.startDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(event.endDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Event Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {event.title}
            </h1>

            {/* Event Excerpt */}
            {event.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                {event.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Event Image */}
      {event.image && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={urlFor(event.image).width(800).url()}
                  alt={event.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover max-h-96"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Event Content */}
      {event.body && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brandBlue to-blue-600 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Event Details
                  </h2>
                </div>
                <div className="p-8">
                  <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-brandBlue prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
                    <PortableText value={event.body} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Interested in More Events?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our full calendar of exciting club activities,
              competitions, and community events happening at Bloom Nepal
              School.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center px-8 py-4 bg-brandBlue text-white rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                View All Events
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-brandBlue border-2 border-brandBlue rounded-xl hover:bg-brandBlue hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetailPage;
