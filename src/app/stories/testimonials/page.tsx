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
    <main className="min-h-screen bg-brandWhite text-gray-900">
      <section className="bg-gradient-to-br from-brandBlue via-brandBlue to-brandGreen text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center px-4 py-2 bg-white/15 rounded-full text-sm font-medium mb-6">
              From the students
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Student voices
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed">
              Each line below is taken from a piece the student wrote. The full
              wording is on the writing page.
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
                className="rounded-2xl border border-[#eadfce] bg-[#faf7f1] p-6 md:p-8"
              >
                <blockquote className="text-xl md:text-2xl leading-relaxed text-brandBlue font-serif">
                  “{article.excerpt}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-gray-600">
                  {article.author} · {article.dateLabel}
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
