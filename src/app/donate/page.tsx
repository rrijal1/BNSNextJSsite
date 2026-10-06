import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Give",
  description:
    "A gift to Bloom Nepal School is received by Bloom Nepal Foundation. This page explains what that gift can stand beside.",
  openGraph: {
    title: "Give | Bloom Nepal School",
    description:
      "A gift to Bloom Nepal School is received by Bloom Nepal Foundation.",
  },
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
              Bloom Nepal Foundation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">A gift is welcome</span>
              <br />
              <span className="text-brandRed">in any amount</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              It is received by Bloom Nepal Foundation. The school page is
              here so you can see what the gift stands beside before you give.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                The building
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Bodhi Borgo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permanent classrooms for Plus Two at the Lalitpur campus,
                planned to open in August 2028, in place of the prefabricated
                rooms. Fundrezzo is the major supporter. Rooms are not named
                for donors.
              </p>
              <Link
                href="/projects#bodhi-borgo"
                className="text-brandBlue font-medium hover:text-brandRed transition-colors"
              >
                Read the building
              </Link>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center px-3 py-1 bg-brandGreen/10 rounded-full text-brandGreen text-xs font-semibold mb-4">
                A student
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Scholarships
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                An ongoing program, separate from the building. The
                foundation’s published figure is USD 1,200 for housing,
                tuition, and books for one child for one year. Families apply
                on the scholarship page.
              </p>
              <Link
                href="/scholarship"
                className="text-brandBlue font-medium hover:text-brandRed transition-colors"
              >
                Scholarship page
              </Link>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 bg-white rounded-2xl border border-gray-100 p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Where the gift goes
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Bloom Nepal Foundation receives the gift. The school does not
              take it on this page.
            </p>
            <a
              href="https://bloomnf.org/donate"
              className="inline-flex mt-6 text-brandBlue font-medium hover:text-brandRed transition-colors"
            >
              Give through the foundation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
