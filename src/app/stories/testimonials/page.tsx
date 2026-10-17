import type { Metadata } from "next";
import Link from "next/link";
import { studentArticles } from "../articles/articles";

export const metadata: Metadata = {
  title: "Student voices",
  description:
    "Lines from Bloom Nepal School students, taken from writing published on this site.",
  openGraph: {
    title: "Student voices | Bloom Nepal School",
    description:
      "Lines from Bloom Nepal School students, taken from writing published on this site.",
  },
};

export default function StudentVoicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
              From the students
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">Student</span>{" "}
              <span className="text-brandRed">voices</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Reflections and lines from student writing at Bloom Nepal School.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            {studentArticles.map((article) => (
              <figure
                key={article.slug}
                className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm"
              >
                <blockquote className="text-xl md:text-2xl leading-relaxed text-brandBlue font-serif">
                  “{article.excerpt}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-gray-600">
                  {article.author}
                  {article.dateLabel.startsWith("Date not")
                    ? ""
                    : ` · ${article.dateLabel}`}
                </figcaption>
                <Link
                  href={`/stories/articles/${article.slug}`}
                  className="inline-flex items-center mt-4 font-semibold text-brandGreen hover:text-brandBlue transition-colors"
                >
                  Read the piece
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
