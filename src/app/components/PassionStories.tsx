"use client";
import { useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface PassionStory {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityImageSource;
  excerpt: string | PortableTextBlock[];
}

export default function PassionStories({ posts }: { posts: PassionStory[] }) {
  const router = useRouter();
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Passion Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => router.push(`/stories/${post.slug}`)}
            >
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={300}
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="text-gray-600 prose">
                  {typeof post.excerpt === 'string' ? (
                    <p>{post.excerpt}</p>
                  ) : (
                    <PortableText value={post.excerpt} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}