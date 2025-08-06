import { createClient, type SanityClient } from '@sanity/client';
import { ClubEvent } from '@/src/types/allTypes';

export const client: SanityClient = createClient({
  projectId: 'hdf6d0e0',
  dataset: 'production',
  apiVersion: '2025-07-13',
  useCdn: true,
});

export async function getAllClubEvents(): Promise<ClubEvent[]> {
  const query = `*[_type == "clubevent"] | order(startDate asc) {
    _id,
    title,
    excerpt,
    image,
    slug,
    startDate,
    endDate,
    body
  }`;
  return client.fetch(query);
}
