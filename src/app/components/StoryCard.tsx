"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/allTypes";

export default function StoryCard({ post }: { post: Post }) {
  return (
    <Link href={`/stories/${post.slug}`}>
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
  );
}
