import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBanner, { motifForArticle } from "../ArticleBanner";
import { getStudentArticle, studentArticles } from "../articles";

export function generateStaticParams() {
  return studentArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getStudentArticle(slug);

  if (!article) {
    return { title: "Student writing" };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | Bloom Nepal School`,
      description: article.description,
    },
  };
}

export default async function StudentArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getStudentArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brandWhite text-gray-900">
      <ArticleBanner
        kicker="Student writing"
        title={article.title}
        subtitle={`${article.author} · ${article.dateLabel}`}
        motif={motifForArticle(article.slug)}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 text-base font-medium text-brandBlue">
              {article.signature.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/stories/articles"
                className="inline-block bg-brandBlue text-white rounded-2xl px-6 py-3 font-semibold hover:bg-brandBlue/90 transition-colors"
              >
                All student writing
              </Link>
              <Link
                href="/stories/testimonials"
                className="inline-block border border-brandBlue text-brandBlue rounded-2xl px-6 py-3 font-semibold hover:bg-brandBlue/5 transition-colors"
              >
                Student voices
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
