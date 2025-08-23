import React from "react";

interface HeroSectionProps {
  children: React.ReactNode;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`hero-section relative w-full min-h-[80vh] flex flex-col md:flex-row md:flex-nowrap items-center justify-center gap-8 px-6 py-12 bg-gray-100 my-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default HeroSection;
