import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Bloom Nepal School</h1>
          <p className="mt-4 text-lg">
            One of our founders, Ram K. Rijal, was inspired by his highly talented peers while doing his undergraduate at MIT. Soon he noticed a trend among his friends, which was that they all had the opportunity to explore their area of interest from a small age.
          </p>
          <p className="mt-4 text-lg">
            With the aim of establishing learning institutions in his home country, Nepal, of similar culture, Mr. Rijal returned home soon after finishing his finals (not even waiting for the graduation ceremony) to materialize his idea. The result, today, is Bloom Nepal School.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">A Humble Beginning</h2>
          <p className="mt-4 text-lg">
            Started with just 17 students in 2013, we now have more than 700 in two schools across the country, and we are growing!
          </p>
          <p className="mt-2 text-lg">
            Read more in Bloom Nepal's story covered in Pestalozzi News.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">The magic is in the attitude stats are the proof</h2>
          <p className="mt-4 text-lg">
            Our graduates have gone on to be UWC scholars in the US, Thailand, and many more countries. More than 80% are studying with scholarships in the top +2 colleges and universities in the country. Better yet, this is just the beginning.
          </p>
          <p className="mt-2 text-lg">
            The success of our graduates is the success of our, what might at first look like, eccentric, pedagogies. Especially our philosophy of Passion-Based Learning. Find more below!
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Passion Based Learning</h3>
              <p className="mt-2">
                Our approach to education is holistic. We believe that sport is a form of education as much as is solving mathematical equations. We value every passion. Find how we align students' passion with academics.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Finding Passion at Bloom</h3>
              <p className="mt-2">
                One might wonder how Bloom enables students to find their passion before letting them pursue them. As we have seen at Bloom, passion is contagious. Our finding is that growing up in an environment full of passionate teachers and friends who participate and organize various events throughout the year enables new students to discover their passion too.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">Enabling Students' Creation</h2>
          <p className="mt-4 text-lg">
            Bloom is nothing but an institution that enables students to discover and pursue their passion. It is the students who are the real rockstars.
          </p>
          <p className="mt-2 text-lg">
            If you want to find out what our students are doing, the following links should guide you.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="/stories" className="text-blue-600 hover:underline">Stories of Bloom by Students and Teachers</a>
            <a href="/events" className="text-blue-600 hover:underline">Student Club Events</a>
            <a href="/calendar" className="text-blue-600 hover:underline">Calendar of Events</a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">Education For All</h2>
          <p className="mt-4 text-lg">
            Bloom is an incredibly diverse family of students. Our students come from more than 35 districts from the rugged Himalayas, hills, and the arable Terai. This has only been possible because of the scholarship we award through the Bloom Nepal Foundation.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="/scholarship" className="text-blue-600 hover:underline">Applying for Scholarship</a>
            <a href="/support" className="text-blue-600 hover:underline">Supporting Scholarship Fund</a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">Be Bold</h2>
          <p className="mt-4 text-lg">
            Embrace change. Be a Bloom Nepal Student.
          </p>
          <a href="/admission" className="mt-4 inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">Admission</a>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center">Associated With</h2>
          <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
            <Image src="/google-logo.svg" alt="Google Logo" width={100} height={50} />
            <Image src="/zayed-sustainability-prize-logo.svg" alt="Zayed Sustainability Prize Logo" width={100} height={50} />
            <Image src="/bloom-ed-logo.svg" alt="Bloom Ed Logo" width={100} height={50} />
            <Image src="/canopy-nepal-logo.svg" alt="Canopy Nepal Logo" width={100} height={50} />
            <Image src="/mit-solve-logo.svg" alt="MIT Solve Logo" width={100} height={50} />
          </div>
        </div>
      </div>
    </main>
  );
}
