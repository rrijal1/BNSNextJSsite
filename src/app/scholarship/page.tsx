import ScholarshipStories from "@/app/components/scholarships/ScholarshipStories";
import Image from "next/image";
import ScholarshipApplicationForm from "../components/scholarships/ScholarshipApplicationForm";
import { FaHeart } from "react-icons/fa";

const scholarshipStats = [
  { number: "250+", label: "Scholarships Awarded", icon: "🎓" },
  { number: "100%", label: "Graduates in Top Colleges", icon: "🏆" },
  { number: "25%", label: "Students Receiving Aid", icon: "💝" },
  { number: "35+", label: "Districts Represented", icon: "🗺️" },
];

const scholarshipBenefits = [
  {
    title: "Full Tuition Coverage",
    description: "Complete coverage of tuition fees for deserving students",
    icon: "💰",
    color: "brandGreen",
  },
  {
    title: "Learning Resources",
    description: "Books, supplies, and digital learning materials included",
    icon: "📚",
    color: "brandBlue",
  },
  {
    title: "Mentorship Program",
    description: "Personal guidance from teachers and senior students",
    icon: "🤝",
    color: "brandRed",
  },
  {
    title: "Career Guidance",
    description: "College preparation and career counseling support",
    icon: "🎯",
    color: "brandGreen",
  },
];

const eligibilityCriteria = [
  {
    title: "Academic Excellence",
    description: "Top performer in your current school with strong grades",
    icon: "📈",
    requirement: "Class topper or top 3 students",
  },
  {
    title: "Community School Background",
    description: "Studying at a community school for the last 3 years",
    icon: "🏫",
    requirement: "3+ years at community school",
  },
  {
    title: "Financial Need",
    description: "Family unable to afford quality education expenses",
    icon: "💸",
    requirement: "Demonstrated financial need",
  },
  {
    title: "Motivation & Dedication",
    description: "Strong commitment to learning from student and parents",
    icon: "🔥",
    requirement: "High motivation to excel",
  },
];

export default async function ScholarshipPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-brandGreen/10 via-white to-brandBlue/5 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="lg:flex items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                  Scholarship Program
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                    Education for{" "}
                    <span className="bg-gradient-to-r from-brandGreen to-green-600 bg-clip-text text-transparent">
                      Every
                    </span>
                    <br />
                    Deserving Student
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                    Quality education should be accessible to students from all
                    economic backgrounds. Join our scholarship program and
                    unlock your potential.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <a
                    href="#apply"
                    className="inline-flex items-center justify-center px-8 py-4 bg-brandGreen text-white rounded-2xl font-semibold hover:bg-brandGreen/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Apply for Scholarship
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                  <a
                    href="#eligibility"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-brandGreen text-brandGreen rounded-2xl font-semibold hover:bg-brandGreen hover:text-white transition-all duration-300"
                  >
                    Check Eligibility
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <Image
                      src="/HomePageImageDrone.jpg"
                      alt="Bloom Nepal School students"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="absolute -top-4 -right-4 w-15 h-15 bg-brandWhite rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce">
                    <Image
                      src="/logo-bloom.png"
                      alt="Bloom Nepal School Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brandBlue rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-brandGreen">Impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Through the generosity of donors worldwide and Bloom Nepal
                Foundation, we&apos;ve transformed hundreds of lives
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {scholarshipStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group-hover:border-brandGreen/20">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold text-brandGreen mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Stories Section */}
      <section className="py-20 bg-gradient-to-br from-brandRed/5 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brandRed/10 rounded-full text-brandRed text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-brandRed">#Scholar</span>Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our scholarship recipients and discover how education has
                transformed their lives and communities
              </p>
            </div>

            <ScholarshipStories />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brandBlue/10 rounded-full text-brandBlue text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Scholarship Benefits
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What You&apos;ll <span className="text-brandBlue">Receive</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive scholarship program covers more than just
                tuition - we invest in your complete educational journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scholarshipBenefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group-hover:border-brandGreen/20">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-${benefit.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-2xl">{benefit.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brandGreen transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section
        id="eligibility"
        className="py-20 bg-gradient-to-br from-brandBlue/5 to-brandGreen/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brandRed/10 rounded-full text-brandRed text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Eligibility Criteria
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Do You <span className="text-brandRed">Qualify?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Check if you meet our scholarship requirements. We believe in
                potential and are looking for dedicated students who need
                financial support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group-hover:border-brandRed/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brandRed/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{criteria.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brandRed transition-colors">
                          {criteria.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {criteria.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-brandRed/10 rounded-full text-brandRed text-sm font-medium">
                          {criteria.requirement}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                Apply Now
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Start Your Journey to{" "}
                <span className="text-brandGreen">Bloom</span>
              </h2>
              <p className="text-xl text-gray-600">
                Ready to apply for our scholarship program? Fill out the form
                below to get started.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <ScholarshipApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-20 bg-gradient-to-br from-brandGreen/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="lg:flex items-center gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className="relative">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <Image
                      src="/HomePageImageDrone.jpg"
                      alt="Bloom Nepal Foundation support"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-brandGreen rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    <span className="text-center leading-tight">
                      Help
                      <br />
                      Others
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-brandGreen/10 rounded-full text-brandGreen text-sm font-medium">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                  Support Education
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Powered by{" "}
                  <span className="text-brandGreen">
                    Bloom Nepal Foundation
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  All our scholarships are provided by{" "}
                  <strong className="text-brandGreen font-semibold">
                    Bloom Nepal Foundation
                  </strong>{" "}
                  through the generosity of donors around the world. Together,
                  we&apos;re making quality education accessible to deserving
                  students.
                </p>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brandGreen/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-brandGreen"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Help Us Reach More Students
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        If you know someone who deserves our scholarship but
                        might not know about it, please connect them with us.
                        Your referral could change a life.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://bloomnf.org/gift-education"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-brandGreen text-white rounded-2xl font-semibold hover:bg-brandGreen/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Support a Student
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://bloomnf.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-brandGreen text-brandGreen rounded-2xl font-semibold hover:bg-brandGreen hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
