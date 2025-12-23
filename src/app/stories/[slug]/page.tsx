import Image from "next/image";
import Link from "next/link";
import { getPost, getAllPosts } from "@/app/components/data/SanityData";
import { PortableTextBlock, TypedObject } from "@portabletext/types";
import { client } from "@/lib/sanity";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import PortableText from "@/app/components/shared/PortableText";
import { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post: Post | undefined = await getPost(resolvedParams.slug);

  return {
    title: post?.title || "Story",
  };
}

// Remove old portable text components - now using shared component

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
        ? (block as PortableTextBlock).children
            .map((child) =>
              "text" in child ? (child as { text: string }).text : ""
            )
            .join("")
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
    <main className="flex flex-col min-h-screen">
      {/* Enhanced Header Section with Background */}
      <section className="bg-gradient-to-br from-brandBlue/10 via-brandGreen/5 to-blue-50 py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 gap-8">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  School Story
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-brandBlue rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {post.author
                          ? post.author.charAt(0).toUpperCase()
                          : "A"}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        By {post.author || "Anonymous"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post._createdAt &&
                          new Date(post._createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-brandBlue">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{readingTime} min read</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brandBlue/20 to-brandGreen/20 rounded-2xl transform rotate-3"></div>
                  <Image
                    src={post.image}
                    alt={post.title || "Post image"}
                    width={600}
                    height={400}
                    className="relative w-full h-auto object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Main blog content */}
        <div className="max-w-4xl mx-auto mb-16">
          <PortableText
            value={post.body as PortableTextBlock[]}
            variant="blog"
          />
        </div>

        {/* Professional Share Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Share this story
              </h3>
              <p className="text-gray-600">
                Help spread the word about our school community
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white hover:bg-[#1877F2] text-gray-700 hover:text-white px-6 py-3 rounded-xl border border-gray-200 hover:border-[#1877F2] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaFacebookF className="w-5 h-5" />
                <span className="font-medium">Share on Facebook</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white hover:bg-[#1DA1F2] text-gray-700 hover:text-white px-6 py-3 rounded-xl border border-gray-200 hover:border-[#1DA1F2] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaTwitter className="w-5 h-5" />
                <span className="font-medium">Share on Twitter</span>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white hover:bg-[#0A66C2] text-gray-700 hover:text-white px-6 py-3 rounded-xl border border-gray-200 hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaLinkedinIn className="w-5 h-5" />
                <span className="font-medium">Share on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Back */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/stories"
            className="inline-flex items-center space-x-2 text-brandBlue hover:text-brandRed font-medium transition-colors duration-200 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>View all Stories</span>
          </Link>
        </div>

        {/* Enhanced Past Articles Section */}
        {pastArticles.length > 0 && (
          <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 -mx-4">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Read Similar Stories
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover more inspiring stories from our school community
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastArticles.slice(0, 6).map((article) => (
                    <Link
                      key={article._id}
                      href={`/stories/${article.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={400}
                          height={240}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brandBlue transition-colors duration-200 line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-brandBlue rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-medium">
                                {article.author
                                  ? article.author.charAt(0).toUpperCase()
                                  : "A"}
                              </span>
                            </div>
                            <span>By {article.author || "Anonymous"}</span>
                          </div>
                        </div>
                        {article._createdAt && (
                          <p className="text-xs text-gray-400">
                            {new Date(article._createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
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
