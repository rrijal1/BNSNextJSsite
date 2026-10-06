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
    detail: "359.86 m² · 53.89% of the plot",
  },
  {
    value: "7,747.10",
    unit: "sq ft",
    label: "Built-up area",
    detail: "719.73 m² · twice the footprint",
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
              August 2028, in place of the prefabricated rooms now in use.
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
                    Plus Two is the two years after the Secondary Education
                    Examination: Grade 11 and Grade 12. Bodhi Borgo is the
                    permanent home planned for that program at the Lalitpur
                    campus.
                  </p>
                  <p>
                    Students in the program will otherwise be taught in
                    prefabricated rooms. Those rooms are an interim
                    arrangement. The new building is intended to replace them
                    when it opens in August 2028.
                  </p>
                  <p>
                    The figures below are for this plot only. They are not the
                    area of the whole Lalitpur campus.
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
                One aana is taken as 342.25 square feet, so the land is
                exactly 21 aana.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How the three figures relate
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The footprint covers 53.89 percent of the plot. The built-up
                  area is exactly twice the footprint, 7,747.10 divided by
                  3,873.55. Built-up area divided by land is 1.08.
                </p>
                <p>
                  The proposal shows a white classroom block with open
                  balconies and planting along the rails, a glazed ground
                  floor, and a stair tower with a tall window. The school seal
                  is on the front wall. Open balconies and the stair are part
                  of the drawing; they are not automatically included in the
                  built-up figure above.
                </p>
              </div>
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
                Who is already behind it
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundrezzo is the major supporter. Further support is welcome.
                </p>
                <p>
                  Rooms are not named for donors. A supporter may instead be
                  offered an education place for a student of their choice.
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

      <section id="toastmasters" className="scroll-mt-28 py-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-4">
                Speaking
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Toastmasters
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
                A path for prepared speeches, impromptu speaking, and
                listening. Written work is increasingly easy to produce with
                software. A student still has to stand up and make a case in
                their own voice. The program has not started. What follows is
                the plan for starting it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <p className="text-sm font-medium text-gray-500">First year</p>
                <p className="mt-3 text-3xl font-extrabold text-brandBlue">
                  25
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  One group of 25 students. That is the workshop size
                  Toastmasters sets for its Youth Leadership Program, and it
                  is the size at which everyone in the room can speak.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <p className="text-sm font-medium text-gray-500">
                  The whole school
                </p>
                <p className="mt-3 text-3xl font-extrabold text-brandBlue">
                  28
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Groups of 25, not one larger meeting. The school has more
                  than 700 students, so full coverage is about 28 groups. A
                  bigger room would mean fewer students actually speak.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <p className="text-sm font-medium text-gray-500">
                  First-year cost
                </p>
                <p className="mt-3 text-3xl font-extrabold text-brandBlue">
                  USD 250
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Paid to Toastmasters International for one Gavel Club. After
                  that, the published renewal is USD 125 a year for the whole
                  club, not per student.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-12 shadow-sm mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why the fee stays small
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
                <p>
                  Students under 18 cannot charter an ordinary Toastmasters
                  club. The form Toastmasters provides for them is a Gavel
                  Club. Its published charges are a certification fee of USD
                  125, paid once, and annual dues of USD 125. Those dues cover
                  the club however many students are in it. The annual term
                  runs from 1 November to 31 October, and renewal is due by 1
                  November. A club that certifies mid-year pays a prorated
                  first year.
                </p>
                <p>
                  An ordinary club is a different product. It needs 20 members
                  aged 18 or over. Each of them pays USD 144 a year, plus a
                  one-time joining fee of USD 25, and the club pays a charter
                  fee of USD 125. Twenty adult members would cost about USD
                  3,505 in the first year. The school plan does not use that.
                  One Gavel Club is enough, and a counselor does not have to
                  be a Toastmasters member. The counselor does have to be over
                  18 and has to follow Nepali rules on staff working with
                  students.
                </p>
                <p>
                  These figures are Toastmasters International’s published
                  fees. They are not a quote from the school, and Toastmasters
                  can change them. Digital officer guides and education
                  materials come with certification. The school provides the
                  room, the teacher, and a timer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  First year
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-600 leading-relaxed">
                  <li>
                    Appoint one teacher as counselor and reserve a weekly hour
                    in a room that holds 25.
                  </li>
                  <li>
                    File the Gavel Club request for certification and pay the
                    USD 250.
                  </li>
                  <li>
                    Choose 25 students. Each week the meeting has a presiding
                    officer, prepared speeches, an impromptu speaking round,
                    and evaluations. Students rotate the roles.
                  </li>
                  <li>
                    By the end of the year, four or five of them can run that
                    meeting without the counselor speaking for them, and the
                    agenda is written down for the next teachers.
                  </li>
                </ol>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Reaching every student
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    From the second year, a trained student and the class
                    teacher run a short speaking period in their own class, on
                    the same agenda. The group of 25 stays as the training
                    group. New chairs learn the meeting there, then go back to
                    their class.
                  </p>
                  <p>
                    Each new class is another 25 speakers. The Toastmasters
                    invoice does not grow with them. What grows is teacher
                    time: one short period a week in each class, using an
                    agenda the first group has already proved.
                  </p>
                  <p>
                    Putting all 700 students on individual memberships is not
                    the plan. At USD 144 a student, that would be about USD
                    100,800 a year, and most of them are too young for an
                    ordinary club.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How a sponsor takes part
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
                <p>
                  The gift that opens the program is USD 250, paid so the
                  school can send Toastmasters its certification fee and the
                  first year’s dues. A sponsor who wants to keep it open can
                  add USD 125 for each further year. Because the fee is for
                  the club, that gift covers every student the school later
                  brings into the speaking periods.
                </p>
                <p>
                  The plan is that the club keeps a school name, so it does
                  not depend on one gift. The sponsor is credited when the
                  school writes about the program. A sponsor who already
                  belongs to a Toastmasters club can also evaluate a meeting.
                  Anyone else is welcome to sit in on one.
                </p>
                <p>
                  Write to{" "}
                  <a
                    href="mailto:rijal.ramk@bloomed.org.np?subject=Toastmasters%20at%20Bloom"
                    className="text-brandBlue font-medium hover:text-brandRed transition-colors"
                  >
                    rijal.ramk@bloomed.org.np
                  </a>{" "}
                  if you want to pay the first year, fund a run of renewals,
                  or help the counselor start the group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
