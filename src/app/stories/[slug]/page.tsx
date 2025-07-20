import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { getPost, getAllPosts } from "@/app/components/posts";
import { PortableTextBlock, TypedObject } from "@portabletext/types";
import { client } from "@/lib/sanity";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Types
interface SanityImage extends TypedObject {
  _type: "image";
  asset: {
    url: string;
    _ref?: string;
  };
  alt?: string;
}

export interface Post {
  _id: string;
  title: string;
  author: string;
  image: string;
  body: (PortableTextBlock | SanityImage)[];
  slug: string;
  _createdAt?: string;
}

// Portable Text rendering
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <Image
        src={value.asset?.url}
        alt={value.alt || "Image from post"}
        className="w-full h-auto rounded-lg my-4"
        width={800}
        height={600}
      />
    ),
  },
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-4">{children}</h3>
    ),
  },
};

export default async function Story({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post: Post | undefined = await getPost(resolvedParams.slug);
  const allPosts: Post[] = await getAllPosts();

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  // Calculate reading time
  const plainText = (post.body || [])
    .filter((block) => block._type === "block")
    .map((block) =>
      "children" in block
        ? block.children.map((child: any) => child.text).join("")
        : ""
    )
    .join(" ");
  const wordCount = plainText.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Only include past articles by publish date desc
  const postDate = new Date(post._createdAt || "").getTime();

  const pastArticles = allPosts
    .filter((p) => {
      const publishedTime = new Date(p._createdAt || "").getTime();
      console.log(
        `Comparing ${p.title} (${publishedTime}) with ${post.title} (${postDate})`
      );
      return p._id !== post._id && publishedTime < postDate;
    })
    .sort((a, b) => {
      const dateA = new Date(a._createdAt || "").getTime();
      const dateB = new Date(b._createdAt || "").getTime();
      return dateB - dateA;
    });

  const postUrl = `http://localhost:3000/stories/${post.slug}`;

  return (
    <main className="flex flex-col min-h-screen container mx-auto px-4 py-8">
      {/* Header: title/author/reading time - left, image - right */}
      <section className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-lg text-gray-600 mb-2">By {post.author}</p>
          <p className="text-sm text-gray-500 mb-4">
            🕒 {readingTime} min read
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={post.image}
            alt={post.title || "Post image"}
            width={600}
            height={300}
            className="w-full h-auto object-cover rounded-lg shadow"
            priority
          />
        </div>
      </section>

      {/* Main blog content */}
      <div className="prose lg:prose-xl max-w-none mb-12">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>

      {/* Share Buttons */}
      <div className="flex items-center space-x-2 mb-8">
        <span className="font-medium text-gray-700 mr-2">Share:</span>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition"
        >
          <FaFacebookF />
          <span>Facebook</span>
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition"
        >
          <FaTwitter />
          <span>Twitter</span>
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-3 py-1.5 rounded-md text-sm font-medium transition"
        >
          <FaLinkedinIn />
          <span>LinkedIn</span>
        </a>
      </div>

      <Link
        href="/stories"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← View all Stories
      </Link>

      {/* Past Articles */}
      {pastArticles.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Read Similar Articles</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {pastArticles.map((article) => (
              <Link
                key={article._id}
                href={`/stories/${article.slug}`}
                className="min-w-[250px] border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={250}
                  height={150}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-md font-semibold">{article.title}</h3>
                  <p className="text-xs text-gray-500">By {article.author}</p>
                  {article._createdAt && (
                    <p className="text-xs text-gray-400">
                      {new Date(article._createdAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

// Static generation for slugs
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{slug}`);
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}
