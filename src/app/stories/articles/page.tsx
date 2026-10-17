import type { Metadata } from "next";
import Link from "next/link";
import ArticleBanner from "./ArticleBanner";
import { studentArticles } from "./articles";

export const metadata: Metadata = {
  title: "Student writing",
  description:
    "Pieces written by students at Bloom Nepal School, in their own words.",
  openGraph: {
    title: "Student writing | Bloom Nepal School",
    description:
      "Pieces written by students at Bloom Nepal School, in their own words.",
  },
};

export default function StudentWritingPage() {
  return (
    <main className="min-h-screen bg-brandWhite text-gray-900">
      <ArticleBanner kicker="From the students" title="Student writing" />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            {studentArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm"
              >
                <p className="text-sm text-brandBlue mb-2">
                  {article.author} · {article.dateLabel}
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-3">
                  <Link
                    href={`/stories/articles/${article.slug}`}
                    className="hover:text-brandBlue transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {article.description}
                </p>
                <Link
                  href={`/stories/articles/${article.slug}`}
                  className="inline-flex items-center font-semibold text-brandBlue hover:text-brandRed transition-colors"
                >
                  Read the piece
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
