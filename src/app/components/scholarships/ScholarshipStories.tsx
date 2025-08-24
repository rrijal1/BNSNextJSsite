import { getScholarshipPosts } from "@/app/components/data/SanityData";
import PassionStories from "@/app/components/scholarships/PassionStories";

export default async function ScholarshipStories() {
  const posts = await getScholarshipPosts();
  return <PassionStories posts={posts} />;
}
