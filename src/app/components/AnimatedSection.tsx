"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (stagger: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: stagger,
    },
  }),
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  stagger = 0,
}) => {
  return (
    <motion.section
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={stagger}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
