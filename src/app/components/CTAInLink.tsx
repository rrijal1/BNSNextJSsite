import Link from "next/link";

export default function CTAInlink({
  linkto,
  text,
  className = "",
}: {
  linkto: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={linkto}
      className={`inline-block px-6 py-2 text-white rounded ${className}`}
    >
      {text}
    </Link>
  );
}
