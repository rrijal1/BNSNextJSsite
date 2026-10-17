import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI initiative",
  description:
    "Bloom Nepal School will implement Google’s open-source Gemma. Physical AI for teaching and learning is the future goal.",
  openGraph: {
    title: "AI initiative | Bloom Nepal School",
    description:
      "Google’s open-source Gemma in the school, with physical AI for teaching and learning as the future goal.",
  },
};

export default function AiInitiativePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
              Lalitpur campus
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">AI initiative</span>
              <br />
              <span className="text-brandRed">Tools for learning</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The school will implement Google’s open-source Gemma, so
              students can use it in their learning. Physical AI for teaching
              and learning is the future goal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                The initiative
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Google’s open-source Gemma
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The school will implement Gemma, Google’s open-source model,
                  for teaching and learning. Students and teachers will work
                  with it in the school, so the practice belongs to the
                  classroom.
                </p>
                <p>
                  The purpose is their learning: to study with the tool, and
                  to understand what it can do.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center px-3 py-1 bg-brandGreen/10 rounded-full text-brandGreen text-xs font-semibold mb-4">
                The later goal
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Physical AI for teaching and learning
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Physical AI is the future goal. Gemma is the step the school
                  is taking now. The later work is intelligence that can take
                  part in the classroom itself, in the teaching and in the
                  learning.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-6 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
              Support
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Collaboration is welcome
            </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A partner, a teacher, or a gift can help the school put
                  these tools in students’ hands. Write to{" "}
                  <a
                    href="mailto:info@bloom.edu.np?subject=AI%20initiative%20at%20Bloom"
                    className="text-brandBlue font-medium hover:text-brandRed transition-colors"
                  >
                    info@bloom.edu.np
                  </a>
                  .
                </p>
                <p>
                  A gift is received by Bloom Nepal Foundation.{" "}
                  <a
                    href="https://bloomnf.org/donate"
                    className="text-brandBlue font-medium hover:text-brandRed transition-colors"
                  >
                    The foundation’s giving page
                  </a>{" "}
                  is where a gift is made.
                </p>
              </div>
            </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center font-semibold text-brandBlue hover:text-brandRed transition-colors"
            >
              Bodhi Borgo, the classroom building
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
