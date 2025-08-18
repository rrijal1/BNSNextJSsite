import BannerInfo from "@/app/components/BannerInfo";
import ScholarshipStories from "@/app/components/scholarships/ScholarshipStories";
import Image from "next/image";
import Link from "next/link";

const bannerStats = [
  { head: "250+", description: "Scholarships till date" },
  {
    head: "100%",
    description:
      "Scholarship recipients who have gone to top colleges after graduation",
  },
  { head: "25%", description: "Current students receiving some financial aid" },
  {
    head: "35+",
    description: "Districts represented by scholarship recipients",
  },
];

export default async function ScholarshipPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 py-16 w-full lg:border-r lg:border-b border-gray-600 lg:text-center md:pb-20 md:mt-16 lg:px-20">
        <div className="section-for-small-devices">
          <Image
            src="/bloomie.png"
            alt="A young female student"
            width={400}
            height={305}
          />
          <h3 className="section-head mt-4 text-4xl xl:text-5xl">
            Quality education should be accessible to people from{" "}
            <span className="text-red-700">all economic backgrounds.</span>
          </h3>
        </div>
      </section>

      {/* About scholarship */}
      <section className="lg:border-b lg:border-l border-gray-600 ">
        <div className="section-for-small-devices">
          <h1 className="section-head text-left my-0 lg:text-center">
            About Our <span className="text-red-800">Scholarship</span>
          </h1>
          <div className="lg:flex mt-2 lg:mt-12">
            <div className="lg:w-1/2 lg:pr-8">
              <div className="section-image-fix">
                <Image
                  className="mt-4 lg:hidden"
                  src="/bloomie.png"
                  width={400}
                  height={205}
                  alt="Two Boy Students Standing"
                />
              </div>
              <p className="mt-2">
                Bloom Nepal School provides merit based financial aid to
                students from economically disadvantaged background. In some
                circumstances, like if you’re really dedicated but haven’t had
                the opportunity to show your academic abilities, we might be
                able to provide you financial aid irrespective to your prior
                academic record.
              </p>
              <p className="mt-4">
                All our scholarships are provided by{" "}
                <a href="https://bloomnf.org/" className="external-url">
                  Bloom&nbsp;Nepal&nbsp;Foundation
                </a>{" "}
                through the generosity of donors around the world.
              </p>
              <p className="mt-4 ">
                <a
                  href="https://bloomnf.org/gift-education"
                  className="external-url"
                >
                  Here is how you can support too.
                </a>
              </p>
            </div>
            <div className="lg:w-1/2 lg-8">
              <Image
                className="mt-4 hidden lg:block"
                src="/bloomie.png"
                width={400}
                height={200}
                alt="Two Boy Students Standing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <div className="bg-transparent mt-16 lg:mt-24">
        <section className="m-0 p-0 bg-transparent">
          <h2 className="text-center section-head text-blue-800 lg:px-16">
            <span className="text-red-800">#scholar</span>stories
          </h2>
          <p className="lg:px-16 text-center mt-2 md:mt-4 lg:mb-6">
            Bloom Scholarship Recipients&apos; Stories
          </p>
          <ScholarshipStories />
        </section>
      </div>

      {/* Banner Stats */}
      <section className="lg:border-b lg:border-l border-gray-600">
        <div className="section-for-small-devices lg:flex lg:flex-row-reverse md:px-32 lg:px-0">
          <div className="flex-wrap lg:w-1/2 lg:pl-8">
            {bannerStats.map((b, i) => (
              <BannerInfo
                key={i}
                head={b.head}
                text={b.description}
                odd={i % 2 === 1}
              />
            ))}
          </div>
          <div className="lg:w-1/2 lg:pl-8 lg:flex lg:flex-col md:justify-center items-center">
            <h2 className="hidden lg:block section-head text-center">
              Be a <span className="text-red-700">Bloom </span> Nepal Scholar
            </h2>
            <p className="text-center mt-8">
              <Link
                href="/scholarship/#apply"
                className="hover:border-blue-900 md:block md:mt-8"
              >
                <span className="border-b-2 border-red-900">
                  Learn How to Apply{" "}
                  <span className="font-semibold emo">&darr;</span>
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section id="apply" className="lg:border-b lg:border-r border-gray-600">
        <div className="section-for-small-devices">
          <h3 className="section-head">How To Apply</h3>
          <p className="mt-4 md:mt-8">
            First make sure you qualify for scholarship at Bloom. The
            requirements are listed below.
          </p>
          <ul className="mt-2 pl-4">
            <li className="list-disc">
              You’ve been studying at a community school for the last 3 years.
            </li>
            <li className="list-disc">You are the topper of your class.</li>
            <li className="list-disc">
              You and your parents are highly motivated.
            </li>
            <li className="list-disc">
              Your family cannot afford paying for education at Bloom.
            </li>
          </ul>
          <p className="mt-4">
            If you qualify all the requirements listed above, or you have a
            special story that you think might qualify you for a scholarship, we
            would like to hear from you. The following are the documents we
            would need.
          </p>
          <ul className="mt-2 pl-4 disc">
            <li>
              Most recent 2 years of academic mark sheet from your previous
              school.
            </li>
            <li>
              Your birth certificate (copy), Father’s or Mother’s citizenship
              card (copy).
            </li>
          </ul>
          <h4 className="section-head text-base mt-4 text-red-800 md:mt-12">
            Submitting the Application
          </h4>
          <p className="mt-2">
            You may{" "}
            <a href="mailto:info@bloomn.edu.np" className="in-link">
              email us
            </a>{" "}
            the documents or have someone bring it to the school in Lalitpur.
            After reviewing your documents, we will contact you. If you’re
            selected in the first round, you will have to sit for an entrance
            exam. Then your admission will be finalized after we review your
            case more thoroughly.
          </p>
          <p className="mt-2">
            Anytime in the process, you may{" "}
            <Link href="/contact" className="in-link">
              contact us.
            </Link>{" "}
            Please feel free; we would love to guide you through.
          </p>
        </div>
      </section>

      {/* Closing section */}
      <section className="pb-20 lg:border-b lg:border-l border-gray-600">
        <div className="section-for-small-devices lg:flex lg:items-center">
          <div className="hidden lg:block w-1/2 lg:pr-8">
            <Image
              src="/bloomie.png"
              width={400}
              height={205}
              alt="A female student doing her homework"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="section-head text-blue-900 text-left ">
              Request to Readers
            </h3>
            <div className="mt-6 lg:hidden section-image-fix">
              <Image
                src="/bloomie.png"
                width={400}
                height={250}
                alt="A female student doing her homework"
              />
            </div>
            <p className="mt-6">
              It’s a tragedy that the message about our scholarship often
              doesn’t reach those who need it the most and would qualify to
              receive it. If you come across someone who you think deserves our
              scholarship, we request you to connect them with us. Thank You.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
