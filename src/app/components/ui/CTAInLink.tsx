import Link from "next/link";

export default function CTAInlink({
  linkto,
  className = "",
  children, // Use children instead of text
}: {
  linkto: string;
  className?: string;
  children: React.ReactNode; // Add children type
}) {
  return (
    <Link
      href={linkto}
      className={`inline-block px-6 py-2 rounded transition-colors duration-200 ${className}`}
    >
      {children} {/* Use children here */}
    </Link>
  );
}
