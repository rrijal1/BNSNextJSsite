import { getScholarshipPosts } from "./data/SanityData";
import PassionStories from "./PassionStories";

export default async function ScholarshipStories() {
  const posts = await getScholarshipPosts();
  return <PassionStories posts={posts} subtitle="scholar" />;
}
