import { client, urlFor } from '@/lib/sanity';
import { ClubEvent } from '@/types/allTypes';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';

// Align with existing pattern used elsewhere in app: params as Promise
type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

async function getEvent(slug: string): Promise<ClubEvent & { body?: TypedObject[] }> {
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
  const event: ClubEvent & { body?: TypedObject[] } = await client.fetch(query, { slug });
  return event;
}

const EventDetailPage = async ({ params }: EventDetailPageProps) => {
  const resolved = await params;
  const event = await getEvent(resolved.slug);
  console.log("Fetched event data for dynamic page:", event);

  if (!event) {
    return <div className="text-center py-10">Event not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 text-lg mb-4">{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>

      {event.image && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={urlFor(event.image).url()}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}

      {event.body && (
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={event.body} />
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;
