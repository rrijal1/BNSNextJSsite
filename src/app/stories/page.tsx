import { Suspense } from "react";
import { getAllPosts } from "@/app/components/SanityData";
import StoryCard from "@/app/components/StoryCard";

interface Post {
  _id: string;
  title: string;
  author: string;
  image: string;
  slug: string;
}

// Loading component for better UX
function StoriesLoading() {
  return <div className="container mx-auto px-4 py-8">Loading stories...</div>;
}

// Stories list component
async function StoriesList() {
  try {
    const posts = await getAllPosts();
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <StoryCard key={post._id} post={post} />
        ))}
      </div>
    );
  } catch {
    return <div className="text-red-500">Failed to load stories</div>;
  }
}

export default function Stories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Stories</h1>
      <Suspense fallback={<StoriesLoading />}>
        <StoriesList />
      </Suspense>
    </div>
  );
}
