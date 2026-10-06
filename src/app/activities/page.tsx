import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "This year",
  description:
    "Bloom Nepal School in 2083: the Lalitpur Rato Machhindranath Cup, a 4.0 SEE result, municipal awards, and the public examinations students sit.",
  openGraph: {
    title: "This year | Bloom Nepal School",
    description:
      "Champions of the Lalitpur district Rato Machhindranath Cup, a 4.0 SEE result, and awards from Mahalaxmi Municipality.",
    images: [
      {
        url: "/activities/rato-machhindranath-squad.jpg",
        alt: "Bloom Nepal School with the Rato Machhindranath Cup",
      },
    ],
  },
};

const awards = [
  {
    name: "Isaac Shahi",
    detail:
      "Scored in the final, and 10 goals across the tournament. Top scorer.",
  },
  {
    name: "Anubhav Rasaili",
    detail: "Scored the deciding goal in the final. Player of the match.",
  },
  {
    name: "Amit Rawal",
    detail: "Named best goalkeeper of the tournament.",
  },
];

const earlierTitles = [
  { cup: "3rd Baburam Pokhrel Cup", team: "Senior" },
  { cup: "Galaxy Cup", team: "Senior" },
  { cup: "Mahalaxmi Nagarpalika Open Futsal", team: "Senior" },
  { cup: "2nd Nirmal Jyoti Cup", team: "Junior" },
];

const felicitation = [
  {
    label: "SEE topper",
    name: "Somya Thapa",
    detail: "A perfect 4.0 GPA, the first in the school’s history.",
  },
  {
    label: "BLE second topper",
    name: "Eshana Bhandari",
    detail: "3.97 GPA in the Basic Level Examination.",
  },
  {
    label: "SEE 2081",
    name: "Best Computer Teacher",
    detail: "Municipal recognition for a Bloom teacher.",
  },
  {
    label: "BLE 2081",
    name: "Best Math Teacher",
    detail: "Municipal recognition for a Bloom teacher.",
  },
];

export default function ActivitiesPage() {
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
              <span className="text-brandBlue">This year</span>
              <br />
              <span className="text-brandRed">at Bloom</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A district cup, a perfect SEE result, and awards from the
              municipality. Each result here comes from a public report or
              from the school’s own letters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                  Futsal
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Rato Machhindranath Cup 2083
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Bloom Nepal School won the Lalitpur district inter-school
                    tournament. The final, on Saturday 19 September 2026, was
                    2–1 against Deepmala Secondary School.
                  </p>
                  <p>
                    Lucky Star Youth Club organised it as a 7-a-side
                    competition at Sunakothi Sporting Club, in Lalitpur
                    Metropolitan City. Forty-one schools from the district
                    were drawn into 16 groups. Each group’s winner and runner-up
                    went into a knockout. Play ran from 29 Bhadra to 3 Ashwin
                    2083.
                  </p>
                  <p>
                    Isaac Shahi and Anubhav Rasaili scored the two goals.
                    Deepmala’s goal was scored by Samraj Tamang.
                  </p>
                </div>
              </div>
              <figure className="relative min-h-80 lg:min-h-full bg-gray-50">
                <Image
                  src="/activities/rato-machhindranath-squad.jpg"
                  alt="Bloom Nepal School holding the winner’s cheque for the Rato Machhindranath Cup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                />
              </figure>
            </div>
            <p className="px-8 lg:px-12 py-4 text-sm text-gray-500 border-t border-gray-100">
              The squad with the winner’s cheque for Rs 50,000. Reported by{" "}
              <a
                href="https://www.goalnepal.com/np/news/detail/12501"
                className="text-brandBlue hover:text-brandRed transition-colors"
              >
                Goal Nepal
              </a>
              {", "}
              19 September 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div
                key={award.name}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
              >
                <p className="text-sm font-medium text-gray-500">Named in the report</p>
                <h3 className="mt-3 text-2xl font-bold text-brandBlue">
                  {award.name}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {award.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                What the winners received
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Rs 50,000, the three-year Rato Machhindranath running trophy,
                  medals, and certificates.
                </p>
                <p>
                  The school pledged half of its prize, Rs 25,000, to people
                  affected by the sudden flood on the Bhotekoshi in Rasuwa.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Titles from the year before
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                The 2082 season, as reported in our New Year letter. First
                place in each.
              </p>
              <ul className="divide-y divide-gray-100">
                {earlierTitles.map((title) => (
                  <li
                    key={title.cup}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <p className="font-medium text-gray-900">{title.cup}</p>
                    <p className="text-sm text-gray-500 shrink-0">{title.team}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/activities/rato-machhindranath-team.jpg"
                  alt="The Bloom Nepal School squad with the Rato Machhindranath Cup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <figcaption className="px-6 py-4 text-sm text-gray-500">
                The squad after the final, with the cup and the individual
                trophies.
              </figcaption>
            </figure>
            <figure className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/activities/rato-machhindranath-trophy.jpg"
                  alt="The Rato Machhindranath Cup trophy, marked विजेता"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <figcaption className="px-6 py-4 text-sm text-gray-500">
                The winner’s trophy. The plaque reads विजेता, winner of the
                Rato Machhindranath Cup.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 p-8 lg:p-12 shadow-sm text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-4">
              From the students
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Student writing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              The pieces the students wrote are on Stories, in their own words.
            </p>
            <Link
              href="/stories#writing"
              className="inline-flex items-center font-semibold text-brandBlue hover:text-brandRed transition-colors"
            >
              Read the student writing
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="examinations" className="scroll-mt-28 py-16 bg-gradient-to-br from-brandBlue/5 via-white to-brandGreen/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-4">
                Examinations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Basic Level and SEE
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
                Mahalaxmi Municipality honoured outstanding students, teachers,
                and schools in Magh 2082. Bloom was recognised in every
                category.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {felicitation.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
                >
                  <p className="text-sm font-medium text-gray-500">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-bold text-brandBlue">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="inline-flex items-center px-3 py-1 bg-brandBlue/10 rounded-full text-brandBlue text-xs font-semibold mb-4">
                  Grade 8
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Basic Level Examination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Basic Level Examination closes Grade 8 and is conducted
                  by the local government. The 2082 results were released
                  through each school’s ledger on the national education
                  information system. The school table for that year will be
                  added here when it is published.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="inline-flex items-center px-3 py-1 bg-brandGreen/10 rounded-full text-brandGreen text-xs font-semibold mb-4">
                  Grade 10
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  SEE
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Secondary Education Examination is the national Grade 10
                  examination, graded on a 4.0 scale by the National
                  Examinations Board. The SEE 2082 results were published on 11
                  May 2026. The school table for that batch will be added here
                  when it is published.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    University
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Graduates already named on the school site are in{" "}
                    <a
                      href="/#alumni"
                      className="text-brandBlue hover:text-brandRed transition-colors"
                    >
                      Alumni Highlights
                    </a>
                    . A longer placement list belongs on this page when it is
                    the school’s own list.
                  </p>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                    The photograph is the ground at the Lalitpur campus, with
                    the Himalaya beyond. It is not the Sunakothi final.
                  </p>
                </div>
                <figure className="relative min-h-64 bg-gray-50">
                  <Image
                    src="/activities/ground-and-himalaya.jpg"
                    alt="A football goal in the foreground, with the Himalaya beyond the buildings"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
