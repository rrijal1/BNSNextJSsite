"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CTAInlink from "@/app/components/CTAInLink";
import Submit from "@/app/components/Submit";
import { validateEmail } from "@/utils/form";

const links = {
  admissionForm:
    "https://drive.google.com/file/d/11PbZ3tpteOvFjQE17cJpfYfQmgUp-jVL/view",
  sampleEntranceQuestions: {
    1: "https://drive.google.com/file/d/1c51MFByyF_8Rqv0lHmEoEv2Hf4x0E6Ql/view",
    2: "https://drive.google.com/file/d/116B6TsGwAfm5Qjm3Yh0dmwmBOu9O0dJT/view",
    3: "https://drive.google.com/file/d/1dX5WF4643-4cGxiio4oZRc6ZLQu7YEuL/view",
    4: "https://drive.google.com/file/d/1kAZsxRRlglHgmOt433SqGo5n0eEyKQi3/view",
    5: "https://drive.google.com/file/d/1lXDXLTVl5XCq7amBNh7k3BZ11H3_rINA/view",
    6: "https://drive.google.com/file/d/1G0ilmmqzleqRqKpUGsSFISyViD8cC6Yy/view",
    7: "https://drive.google.com/file/d/1XobaNDmN1DO8hw8GnSWTr4x96ZL2flnJ/view",
    8: "https://drive.google.com/file/d/15qH4bRUmfWGzFKSuHKTtgoTtC1Qb-29w/view",
  } as Record<number, string>,
};

function SectionHero() {
  return (
    <section className="pb-16 mt-20 lg:border-r lg:border-b md:border-gray-600">
      <div className="section-for-small-devices lg:flex">
        <div className="lg:w-1/2 lg:pr-8 mt-8">
          <h2 className="section-head md:text-6xl text-3xl leading-none text-left">
            Be a <span className="md:text-6xl text-3xl text-red-800">Bloom </span>
            Nepal Student
          </h2>
          <div className="mt-4 lg:hidden section-image-fix">
            <Image
              src="/file.svg"
              alt="students standing"
              width={800}
              height={600}
              className="mt-4"
            />
          </div>
          <p className="mt-4 md:mt-8">
            Be a part of the school that&apos;s futuristic, teaches empathy, and
            provides an environment for fostering each child&apos;s special area of
            interest.
          </p>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:pl-8">
          <Image
            src="/globe.svg"
            alt="Hexagonal Photo Collection of Students"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

function AdmissionProcess() {
  const steps = useMemo(
    () => [
      `We usually take admission for students from grade 1 to 8. If you are going to be in any of those grades in the upcoming school year, fill out the admission form below!`,
      `We meet online or at Bloom Nepal School for your Entrance Exam. (don’t be nervous, we’ve got sample questions below :)`,
      `We review your Exam (this is pretty quick; usually < 24 hrs), and set a meeting with your parent and you and consider your admission based on entrance exam, extra curricular involvement, and interpersonal qualities.`,
    ],
    []
  );

  return (
    <section className="lg:border-l lg:border-b border-gray-600">
      <div className="section-for-small-devices">
        <h1 className="section-head">
          <span className="text-blue-800 md:text-gray-800">Admission</span>{" "}
          Process
        </h1>
        <ol className="mt-4 list-outside pl-5 md:text-gray-900 md:mt-8">
          {steps.map((item) => (
            <li className="mt-2 list-disc" key={item}>
              {item}
            </li>
          ))}
          <li className="font-medium mt-2 list-disc">
            You&apos;re a Bloom Nepal student now. <span>Yayy!</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

function DownloadSampleQuestions() {
  const [grade, setGrade] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [agreed, setAgreed] = useState<boolean>(false);
  const [cantGetQuestions, setCantGetQuestions] = useState<boolean>(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState<boolean>(false);

  const gradeNum = Number(grade);
  const formValid =
    gradeNum >= 1 &&
    gradeNum <= 10 &&
    validateEmail(email) &&
    agreed;

  useEffect(() => {
    if (formValid) setDisplayErrorMessage(false);
  }, [formValid]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (formValid) {
      setSubmitted(true);
    } else {
      setDisplayErrorMessage(true);
      e.preventDefault();
      return;
    }

    const link = links.sampleEntranceQuestions[gradeNum];
    if (link) {
      // open in new tab
      window.open(link, "_blank");
    } else {
      e.preventDefault();
      setCantGetQuestions(true);
    }
  };

  return (
    <form id="sampleQuestions" className="mt-2 md:mt-6 lg:w-4/5" onSubmit={handleSubmit}>
      {!submitted && (
        <h3 className="section-head text-lg mt-4 text-blue-800 md:font-medium md:mt-12">
          Download Sample Questions
        </h3>
      )}
      {displayErrorMessage && (
        <h4 className="mt-2 text-red-800 text-base font-medium">
          Sorry, one or more fields on the form below aren&apos;t correct!
        </h4>
      )}
      <div>
        {!submitted ? (
          <div>
            <div className="form-field">
              <div className="form-label">
                <label htmlFor="grade">Applying For Grade (1-10)</label>
              </div>
              <input
                type="number"
                required
                id="grade"
                placeholder="6"
                value={grade}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === "" || (/^\d+$/.test(v) && Number(v) >= 1 && Number(v) <= 10)) {
                    setGrade(v);
                  }
                }}
              />
            </div>
            <div className="form-field">
              <div className="form-label">
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                required
                id="email"
                placeholder="bikas@bloomn.edu.np"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <input
                type="checkbox"
                required
                id="checkbox"
                className="inline w-auto"
                checked={agreed}
                onChange={() => setAgreed((s) => !s)}
              />
              <label htmlFor="checkbox" className="text-sm inline leading-snug">
                By clicking here, I confirm that I am not using the material provided for commercial purpose.
              </label>
            </div>
            <Submit
              text="REQUEST DOWNLOAD"
              className={` text-white inline-block mb-4  ${formValid ? "bg-green-600 hover:bg-green-800" : "bg-blue-800 hover:bg-blue-900"}`}
            />
          </div>
        ) : (
          <></>
        )}
        {submitted && !cantGetQuestions && (
          <div>
            <h4 className="text-2xl font-medium">Good Luck</h4>
            <p className="mt-2">
              Thank you for checking out our sample entrance questions, we wish you the very best for your entrance exam.
            </p>
          </div>
        )}
        {submitted && cantGetQuestions && (
          <div>
            <h4 className="text-2xl font-medium text-blue-800">Apologies</h4>
            <p className="mt-2">
              {grade === "10"
                ? "Sorry, we don\'t take admission for grade 10."
                : grade === "9"
                ? "We do take limited admission for grade 9 but don\'t take entrace exam. Please contact the school office for details on how to apply."
                : `Sorry, we don\'t have sample entrance questions for grade ${grade} currently. Please check back in the future.`}
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

function FirstStepForm({ takingAdmission, admissionGrades }: { takingAdmission: boolean; admissionGrades: string }) {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [displayErrorMessage, setDisplayErrorMessage] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const formValid = (phone.trim().length >= 9 && phone.trim().length <= 15) || validateEmail(email);

  useEffect(() => {
    if (formValid) setDisplayErrorMessage(false);
  }, [formValid]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (formValid) {
      setSubmitted(true);
      if (takingAdmission) {
        window.open(links.admissionForm, "_blank");
      }
    } else {
      setDisplayErrorMessage(true);
      e.preventDefault();
    }
  };

  return (
    <div>
      {!submitted && takingAdmission && (
        <div>
          <div className="bg-green-600 text-sm text-white px-4 my-6">
            We’re currently taking admission for grades {admissionGrades} for limited seats!
          </div>
          <p className="mt-2 md:mt-8 md:text-left">To download the admission form, please fill out the form below.</p>
          <p className="mt-4 md:mt-4 md:text-left">
            The admission form can be submitted through email to {" "}
            <a href="mailto:info@bloomn.edu.np" className="in-link">info@bloomn.edu.np</a> or brought to the concerned school.
          </p>
        </div>
      )}
      {!submitted && !takingAdmission && (
        <p className="my-6 md:px-4 text-sm bg-red-800 text-white">
          Sorry, we aren’t taking any admission currently. Please fill the form below and we will contact you when admission reopens.
        </p>
      )}

      <form id="contact" className="mt-2 md:mt-8" onSubmit={handleSubmit}>
        {!submitted ? (
          <div>
            {displayErrorMessage && (
              <p className="text-red-800 text-base font-medium">
                Sorry, one or more fields on the form below aren&apos;t correct!
              </p>
            )}
            <div className="form-field">
              <div className="form-label">
                <label htmlFor="phoneNumber" className="">Phone Number</label>
              </div>
              <input
                type="tel"
                id="phoneNumber"
                required={email === ""}
                placeholder="eg. 9846062210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-field">
              <div className="form-label">
                <label htmlFor="ContactEmail" className="">Email</label>
              </div>

              <input
                type="email"
                required={phone === ""}
                id="ContactEmail"
                placeholder="eg. joe@bloomn.edu.np"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Submit
              text={`${takingAdmission ? "Get Admission Form" : "Contact Me"}`}
              className={` text-white inline-block mb-4 ${formValid ? "bg-green-600 hover:bg-green-800" : " bg-blue-800 hover:bg-blue-900"}`}
            />
          </div>
        ) : (
          <div className="mt-4">
            {takingAdmission ? (
              <div>
                <h4>Thank you for downloading our admission form.</h4>
                <p className="mt-2">
                  Please note that you may submit the admission from online or by visiting the concerned school.
                </p>
              </div>
            ) : (
              <div>
                <h4>We got you!</h4>
                <p className="mt-2">We will let you know once we are open for admission.</p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default function AdmissionPage() {
  // In Gatsby version, this came from Sanity via GraphQL.
  // For now, we hardcode but you can fetch from Sanity later.
  const takingAdmission = true;
  const admissionGrades = "1-8";

  return (
    <div>
      <SectionHero />
      <AdmissionProcess />
      <section className="lg:border-r lg:border-b border-gray-600 ">
        <div className="section-for-small-devices lg:flex items-center">
          <div className="md:w-1/2 lg:pr-8 hidden lg:block">
            <Image
              src="/window.svg"
              alt="two girl students posing for a photo"
              width={800}
              height={600}
              className="mt-4"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="section-head">Scholarship</h2>
            <div className="mt-4 lg:hidden section-image-fix">
              <Image
                src="/window.svg"
                alt="two girl students posing for a photo"
                width={800}
                height={600}
                className="mt-4"
              />
            </div>
            <p className="mt-4 md:mt-6">
              We know that education will have the most impact the lives of those who cannot afford to pay for it. To address this paradox, we set up
              <strong className="font-medium external-link"> <a href="https://bloomnf.org/" className="in-link">Bloom Nepal Foundation</a></strong> that provides scholarship to those families.
            </p>
            <div className="lg:mx-auto lg:flex lg:justify-start lg:mt-4 mt-12">
              <CTAInlink linkto="/scholarship/#apply" text="apply" className="bg-blue-800 hover:bg-blue-900 " />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:border-l lg:border-b border-gray-600" id="entrance">
        <div className="section-for-small-devices">
          <h2 className="section-head">
            <span className="text-red-800 md:text-gray-800">Entrance</span> Details
          </h2>
          <ul className="mt-4 list-disc pl-4 md:text-gray-800 md:mt-8">
            <li>Examination may be conducted online/in-person.</li>
            <li>You need to take the examination yourself; any help by third person isn&apos;t allowed.</li>
            <li>Subjects covered in exam vary by grade. See sample questions below.</li>
            <li>Entrance exam is just one part of the holistic application process. It is a major but not the only determining factor for admission.</li>
            <li>Come prepared, but don’t be nervous.</li>
            <li>Make sure you practice the sample questions.</li>
          </ul>
          <DownloadSampleQuestions />
        </div>
      </section>

      <section className="lg:border-r lg:border-b border-gray-600">
        <div className="section-for-small-devices">
          <div className="lg:w-4/5">
            <h3 className="section-head md:text-left">
              KickStart your Journey to <span className="text-red-800">Bloom</span>
            </h3>

            <div className="mt-4">
              <FirstStepForm takingAdmission={takingAdmission} admissionGrades={admissionGrades} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
