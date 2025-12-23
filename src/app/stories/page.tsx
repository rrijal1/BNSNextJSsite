import { Suspense } from "react";
import { getAllPosts } from "@/app/components/data/SanityData";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Read inspiring stories from Bloom Nepal School students, alumni, and community members. Discover how passion and purpose shape young minds.",
  keywords: [
    "Bloom Nepal stories",
    "student success stories",
    "alumni testimonials",
    "education impact",
  ],
  openGraph: {
    title: "Stories | Bloom Nepal School",
    description:
      "Read inspiring stories from Bloom Nepal School students, alumni, and community members.",
  },
};

interface Post {
  _id: string;
  title: string;
  author: string;
  image: string;
  slug: string;
  _createdAt?: string;
}

// Professional loading component
function StoriesLoading() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse"
          >
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Enhanced stories list component
async function StoriesList() {
  try {
    const posts = await getAllPosts();

    if (!posts || posts.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Stories Available
          </h3>
          <p className="text-gray-500">
            Check back soon for inspiring stories from our school community.
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post, index: number) => (
          <Link
            key={post._id}
            href={`/stories/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={280}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Featured badge for first story */}
              {index === 0 && (
                <div className="absolute top-4 left-4 bg-brandRed text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brandBlue transition-colors duration-200 line-clamp-2">
                {post.title}
              </h3>

              <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-brandBlue rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {post.author ? post.author.charAt(0).toUpperCase() : "A"}
                    </span>
                  </div>
                  <span>By {post.author || "Anonymous"}</span>
                </div>
              </div>

              {post._createdAt && (
                <p className="text-xs text-gray-400 mb-4">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}

              <div className="flex items-center text-brandBlue group-hover:text-brandRed transition-colors duration-200">
                <span className="text-sm font-medium">Read Story</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } catch {
    return (
      <div className="text-center py-16">
        <div className="text-red-400 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Unable to Load Stories
        </h3>
        <p className="text-gray-500">
          Please try refreshing the page or contact support if the issue
          persists.
        </p>
      </div>
    );
  }
}

export default function Stories() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section with Narrative */}
      <section className="bg-gradient-to-br from-brandBlue/10 via-brandGreen/5 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              School Stories
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stories That <span className="text-brandBlue">Inspire</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the remarkable journeys, achievements, and moments that
              define our school community. Each story represents the passion,
              dedication, and excellence that make Bloom Nepal School
              extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-brandBlue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span>Student Achievements</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-brandGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Community Impact</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-brandRed"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>Inspiring Journeys</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Stories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the latest updates and inspiring narratives from our
                vibrant school community
              </p>
            </div>

            <Suspense fallback={<StoriesLoading />}>
              <StoriesList />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
