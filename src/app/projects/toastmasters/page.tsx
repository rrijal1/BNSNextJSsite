import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toastmasters",
  description:
    "A Toastmasters club for students at Bloom Nepal School. The first year trains 25 students with local clubs in Nepal. Those students then teach the next class.",
  openGraph: {
    title: "Toastmasters | Bloom Nepal School",
    description:
      "A speaking club that begins with 25 students and stays in the school because they train the next class.",
  },
};

const measures = [
  {
    value: "25",
    unit: "students",
    label: "First group",
    detail:
      "One group in the first year, small enough that every student speaks.",
  },
  {
    value: "Class to class",
    unit: "how it continues",
    label: "After the first year",
    detail:
      "Those students train others. The skill passes on, and the club stays in the school.",
  },
  {
    value: "USD 4,000",
    unit: "for the year",
    label: "First-year cost",
    detail:
      "About the cost of training all 25 students for one year, with local Toastmasters clubs in Nepal.",
  },
];

export default function ToastmastersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-brandBlue/10 via-white to-brandGreen/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6">
              Lalitpur campus
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-brandBlue">Toastmasters</span>
              <br />
              <span className="text-brandRed">A club for students</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The club begins with 25 students in the first year. Those
              students then train others, so the skill passes from class to
              class and Toastmasters becomes a lasting part of the school.
              Building communication skills is a major goal of our education.
            </p>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center px-3 py-1 bg-brandGreen/10 rounded-full text-brandGreen text-xs font-semibold mb-4">
                The club
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Speaking as part of an education
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
                <p>
                  Written work can be prepared quietly. A student still has
                  to stand and make a case in their own voice.
                </p>
                <p>
                  The club is for prepared speeches, speaking on a topic given
                  in the moment, and listening well enough to say what worked.
                  Students take turns in the chair. The program has not
                  started. What follows is the plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-4">
                The first year
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Twenty-five, then the next class
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
                The year is arranged with local Toastmasters clubs in Nepal.
                The cost below is for that training year, for the whole group.
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
                  <p
                    className={`mt-3 font-extrabold leading-tight text-brandBlue ${
                      item.value.length > 8 ? "text-2xl" : "text-3xl"
                    }`}
                  >
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
                How the year is used
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A teacher leads the first group, and a weekly hour is kept
                  in a room that holds 25. Each meeting has a student
                  presiding, prepared speeches, a short round of speaking
                  without preparation, and evaluations. The roles rotate, so
                  the practice is not left with one confident speaker.
                </p>
                <p>
                  By the end of the year, several of the 25 can run that
                  meeting and teach it. The agenda is written down for the
                  teachers who follow. About USD 4,000 covers this training
                  year for all 25 students together.
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
                After the first year
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                The skill stays in the school
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The second year does not begin from nothing. Students from
                  the first group work with their class teacher. A short
                  speaking period in class follows the meeting they already
                  know.
                </p>
                <p>
                  New students join the training group, learn that meeting,
                  and take it back to their own class. In this way the skill
                  passes from class to class, and Toastmasters remains part of
                  the school.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center px-3 py-1 bg-brandGreen/10 rounded-full text-brandGreen text-xs font-semibold mb-4">
                Support
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Opening the first year
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The gift that opens the club is about USD 4,000. It trains
                  the first 25 students for a year with local Toastmasters
                  clubs in Nepal. Those students then teach the next class.
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
                  is explained on the school site. A supporter is named when
                  the school writes about the program.
                </p>
                <p>
                  Write to{" "}
                  <a
                    href="mailto:rijal.ramk@bloomed.org.np?subject=Toastmasters%20at%20Bloom"
                    className="text-brandBlue font-medium hover:text-brandRed transition-colors"
                  >
                    rijal.ramk@bloomed.org.np
                  </a>{" "}
                  to support the first year, or to help the teacher start the
                  group. The first year begins when the teacher, the room, and
                  the training with a local club are in place.
                </p>
              </div>
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
