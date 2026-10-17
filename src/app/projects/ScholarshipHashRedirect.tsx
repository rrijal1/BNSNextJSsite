"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ScholarshipHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const go = () => {
      if (window.location.hash === "#scholarships") {
        router.replace("/scholarship");
      }
      if (window.location.hash === "#toastmasters") {
        router.replace("/projects/toastmasters");
      }
    };

    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, [router]);

  return null;
}
