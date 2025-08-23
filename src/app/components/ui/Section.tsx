import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
  return (
    <section className={`py-12 my-8 sm:px-6 md:px-8 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default Section;
