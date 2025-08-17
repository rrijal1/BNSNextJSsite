import { client } from "@/lib/sanity";
import { FeesSanityData, Fee } from "@/app/components/FeesPageClient";

export async function getAllPosts() {
  const posts = await client.fetch(
    '*[_type == "post"]{_id, title, people, "author": author->name, "image": mainImage.asset->url, "slug": slug.current, _createdAt}'
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

export async function getScholarshipPosts() {
  const posts = await client.fetch(
    `*[_type == "post" && category->title == "Scholarship"]{_id, title, "slug": slug.current, excerpt, body, mainImage}`
  );
  return posts;
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

interface RawFee {
  school: { location: string };
  grade: string;
  basicFees: string;
  basicFeesWithMeals: string | null;
  hostelFees: number | string | null;
}

export async function getFeesData(): Promise<FeesSanityData> {
  const query = `{
    "fees": *[_type == "fees"]{..., "school": school->{location}}, 
    "otherFees": *[_type == "otherFees"]{..., "location": location->{location}, details[]{..., "asset": asset->}},
    "paymentProcedure": *[_type == "paymentProcedure"]{..., "location": location->{location}, details[]{..., "asset": asset->}}
  }`;
  const data = await client.fetch(query);

  const parsedFees: Fee[] = data.fees.map((fee: RawFee) => ({
    ...fee,
    basicFees: parseFloat(fee.basicFees),
    basicFeesWithMeals: fee.basicFeesWithMeals
      ? parseFloat(fee.basicFeesWithMeals)
      : null,
  }));

  const schoolLocations = Array.from(
    new Set(parsedFees.map((f: Fee) => f.school.location))
  ).map((location) => ({ location }));

  return {
    ...data,
    fees: parsedFees,
    schoolLocations,
  };
}
