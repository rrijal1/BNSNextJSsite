import { client } from '@/lib/sanity';
import { ClubEvent } from '@/src/types/allTypes';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

interface EventDetailPageProps {
  params: {
    slug: string;
  };
}

const EventDetailPage = async ({ params }: EventDetailPageProps) => {
  const query = `*[_type == "clubevent" && slug.current == "${params.slug}"][0]{
    _id,
    title,
    excerpt,
    image,
    slug,
    startDate,
    endDate,
    body
  }`;
  const event: ClubEvent = await client.fetch(query);

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
            src={event.image.asset._ref.replace('image-', 'https://cdn.sanity.io/images/hdf6d0e0/production/').replace('-png', '.png').replace('-jpg', '.jpg').replace('-jpeg', '.jpeg').replace('-gif', '.gif')}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}

      <div className="prose lg:prose-xl max-w-none">
        <PortableText value={event.body} />
      </div>
    </div>
  );
};

export default EventDetailPage;
