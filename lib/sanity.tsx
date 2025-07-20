import { createClient, type SanityClient } from '@sanity/client';

export const client: SanityClient = createClient({
  projectId: 'hdf6d0e0',
  dataset: 'production',
  apiVersion: '2025-07-13',
  useCdn: true,
});
