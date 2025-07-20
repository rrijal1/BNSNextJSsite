import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/app/components/posts";

interface Post {
  _id: string;
  title: string;
  author: string;
  image: string;
  slug: string;
}

export default async function Stories() {
  const posts = await getAllPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <Link href={`/stories/${post.slug}`} key={post._id}>
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">By {post.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
