import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ClubEvent } from '@/types/allTypes';

export const client: SanityClient = createClient({
  projectId: 'hdf6d0e0',
  dataset: 'production',
  apiVersion: '2025-07-13',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getAllClubEvents(): Promise<ClubEvent[]> {
  const query = `*[_type == "clubevent"] | order(startDate asc) {
    _id,
    title,
    excerpt,
    "image": mainImage,
    slug,
    startDate,
    endDate,
    body
  }`;
  return client.fetch(query);
}
