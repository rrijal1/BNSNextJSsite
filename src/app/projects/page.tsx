import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScholarshipHashRedirect from "./ScholarshipHashRedirect";

export const metadata: Metadata = {
  title: "Bodhi Borgo",
  description:
    "Bodhi Borgo is the permanent classroom building for the Plus Two program at Bloom Nepal School, Lalitpur, planned to open in August 2028.",
  openGraph: {
    title: "Bodhi Borgo | Bloom Nepal School",
    description:
      "Permanent classrooms for Plus Two at the Lalitpur campus, planned to open in August 2028.",
    images: [
      {
        url: "/projects/bodhi-borgo.jpg",
        alt: "Proposed view of Bodhi Borgo at Bloom Nepal School",
      },
    ],
  },
};

const measures = [
  {
    value: "7,187.25",
    unit: "sq ft",
    label: "Land",
    detail: "667.72 m² · 21 aana (1 ropani 5 aana)",
  },
  {
    value: "3,873.55",
    unit: "sq ft",
    label: "Footprint",
    detail: "359.86 m²",
  },
  {
    value: "7,747.10",
    unit: "sq ft",
    label: "Built-up area",
    detail: "719.73 m²",
  },
];

const otherProjects = [
  {
    href: "/projects/toastmasters",
    kicker: "Speaking",
    title: "Toastmasters",
    summary:
      "A club for students. The first year trains 25 students. They then teach the next class, so speaking stays in the school.",
    link: "The speaking club",
  },
  {
    href: "/scholarship",
    kicker: "A student",
    title: "Scholarship",
    summary:
      "A merit and need-based scholarship, so a student can learn without that financial barrier. Families apply on the scholarship page.",
    link: "The scholarship",
  },
  {
    href: "/projects/ai",
    kicker: "Learning",
    title: "AI initiative",
    summary:
      "The school will implement Google’s open-source Gemma. Physical AI for teaching and learning is the future goal.",
    link: "The initiative",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <ScholarshipHashRedirect />
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
              Lalitpur campus
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">Bodhi Borgo</span>
              <br />
              <span className="text-brandRed">Permanent classrooms</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A permanent building for the Plus Two program, planned to open in
              August 2028. 
            </p>
          </div>
        </div>
      </section>

      <section id="bodhi-borgo" className="scroll-mt-28 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                  The building
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Classrooms for Grades 11 and 12
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Plus Two is the final two years of the Secondary Education
                    Program in Nepal. Bodhi Borgo is the
                    permanent home planned for that program at the Lalitpur
                    campus.
                  </p>
                  <p>
                    The building will be located on this plot with details below. 
                  </p>
                </div>
              </div>
              <figure className="relative min-h-72 lg:min-h-full bg-gray-50">
                <Image
                  src="/projects/bodhi-borgo.jpg"
                  alt="Proposed view of Bodhi Borgo, a classroom building for Bloom Nepal School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </figure>
            </div>
            <p className="px-8 lg:px-12 py-4 text-sm text-gray-500 border-t border-gray-100">
              A proposed view of the building. It is a design drawing, not a
              photograph of finished construction.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-4">
                The plot
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Measured areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
                Land, footprint, and built-up area as recorded for Bodhi
                Borgo. Metric figures are conversions of those measurements.

              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {measures.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
                >
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-extrabold text-brandBlue tabular-nums">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500">{item.unit}</p>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Details</h3>
              <p className="text-gray-600 leading-relaxed">
                The proposal shows a white classroom block with open balconies
                and planting along the rails, a glazed ground floor, and a
                stair tower with a tall window. The school seal is on the
                front wall.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                Support
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Made with FAR
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bodhi Borgo, this milestone building, is made through the
                  support of Fondazione Albero Rosso (FAR). Further buildings
                  will follow. The school would welcome a collaboration with
                  you and your organization.
                </p>
                <p>
                  A gift is received by Bloom Nepal Foundation.{" "}
                  <a
                    href="https://bloomnf.org/donate"
                    className="text-brandBlue font-medium hover:text-brandRed transition-colors"
                  >
                    The foundation’s giving page
                  </a>{" "}
                  is where a gift is made.{" "}
                  <Link
                    href="/donate"
                    className="text-brandBlue font-medium hover:text-brandRed transition-colors"
                  >
                    How a gift is received
                  </Link>{" "}
                  is explained on the school site.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center px-3 py-1 bg-brandGreen/10 rounded-full text-brandGreen text-xs font-semibold mb-4">
                Timing
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                August 2028
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The building is planned to be in use from August 2028, which
                  is the start of that academic year for Plus Two.
                </p>
                <p>
                  Until then, the program uses prefabricated rooms. Bodhi
                  Borgo is the replacement for those rooms, not an additional
                  campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-4">
                Also at the school
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Other projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brandBlue/20 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brandGreen">
                    {project.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-brandBlue transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-gray-600 leading-relaxed">
                    {project.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center font-semibold text-brandBlue group-hover:text-brandRed transition-colors">
                    {project.link}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
