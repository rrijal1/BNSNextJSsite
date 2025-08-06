import { client } from "@/lib/sanity";

export async function getAllPosts() {
  const posts = await client.fetch(
    '*[_type == "post"]{_id, title, "author": author->name, "image": mainImage.asset->url, "slug": slug.current, _createdAt}'
  );
  return posts;
}

export async function getPost(slug: string) {
  const post = await client.fetch(
    '*[_type == "post" && slug.current == $slug]{_id, title, "author": author->name, "image": mainImage.asset->url, body, _createdAt}',
    { slug }
  );
  return post[0];
}

export async function getallCalendarEvents() {
  const events = await client.fetch(
    '*[_type == "calendar"]{_id, date, title, timeFrom, timeTo, isHoliday, details}'
  );
  return events;
}

export async function getallClubEvents() {
  const events = await client.fetch(
    '*[_type == "clubevent"]{_id, startDate, slug, excerpt, title, slug, endDate, image}'
  );
  return events;
}
