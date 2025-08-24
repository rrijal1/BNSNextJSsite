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
      className={`relative w-full min-h-[80vh] flex items-center justify-center py-16 md:py-24 bg-gray-50 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
