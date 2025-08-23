"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// --- Data ---
interface SingularMenuItem {
  type: "singular";
  text: string;
  linkTo: string;
}

interface GroupMenuItem {
  type: "group";
  text: string;
  items: SingularMenuItem[];
}

type MenuItem = SingularMenuItem | GroupMenuItem;

export const menus: MenuItem[] = [
  {
    type: "group",
    text: "About US",
    items: [
      { type: "singular", text: "Our values", linkTo: "/about" },
      { type: "singular", text: "Facilities", linkTo: "/facilities" },
      { type: "singular", text: "Team", linkTo: "/team" },
      { type: "singular", text: "Careers", linkTo: "/careers" },
    ],
  },
  {
    type: "group",
    text: "Academics and Events",
    items: [
      { type: "singular", text: "Academics", linkTo: "/academics" },
      { type: "singular", text: "Calendar", linkTo: "/calendar" },
      { type: "singular", text: "Club Events", linkTo: "/events" },
    ],
  },
  { type: "singular", text: "Stories", linkTo: "/stories" },
  {
    type: "group",
    text: "Admission",
    items: [
      { type: "singular", text: "How To Apply", linkTo: "/admission" },
      { type: "singular", text: "Scholarship", linkTo: "/scholarship" },
      { type: "singular", text: "Fees", linkTo: "/fees" },
    ],
  },
];

// --- Helper Hook ---
const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

// --- Sub-Components ---
const MenuGroup = ({
  menuItem,
  onLinkClick,
}: {
  menuItem: GroupMenuItem;
  onLinkClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left font-medium py-2 px-4 lg:px-1 lg:mr-4 my-2 lg:my-0 text-white hover:text-white/80 transition-all duration-200"
      >
        {menuItem.text}
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:absolute lg:py-2 bg-brandBlue/90 lg:shadow-lg lg:rounded-md w-full lg:w-48 border border-white/20"
          >
            {menuItem.items.map((item) => (
              <li key={item.linkTo}>
                <Link
                  href={item.linkTo}
                  className="capitalize font-medium block my-1 py-2 px-8 text-white hover:bg-white/20 hover:text-white transition-all duration-200"
                  onClick={handleLinkClick}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const Menu = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  return (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center">
      {menus.map((menuItem) => (
        <li key={menuItem.text} className="w-full lg:w-auto">
          {menuItem.type === "group" ? (
            <MenuGroup
              menuItem={menuItem}
              onLinkClick={onLinkClick || (() => {})}
            />
          ) : (
            <Link
              href={menuItem.linkTo}
              className="block lg:inline-block px-4 py-2 mx-2 text-white hover:text-white/80 transition-all duration-200"
              onClick={onLinkClick}
            >
              {menuItem.text}
            </Link>
          )}
        </li>
      ))}
      <li className="w-full lg:w-auto">
        <Link
          className="block lg:inline-block px-4 py-2 mx-2 text-white hover:text-white/80 transition-all duration-200"
          href="/contact"
          onClick={onLinkClick}
        >
          Contact
        </Link>
      </li>
      <li className="w-full lg:w-auto mt-4 lg:mt-0">
        <a
          className="block lg:inline-block px-6 py-2 mx-2 text-white bg-brandRed rounded-md hover:bg-brandRed/80 transition-all duration-200 text-center focus:outline-none shadow-sm hover:shadow-md"
          href="https://bloomnf.org/gift-education"
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </a>
      </li>
    </ul>
  );
};

// --- Main Header Component ---
export default function Header({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`bg-brandBlue shadow-md lg:sticky lg:top-0 z-20 ${className || ""}`}
      id="header"
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        <Link href="/">
          <Image
            src="/logo-bloom.png"
            alt="Bloom Nepal School Logo"
            width={75}
            height={75}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center">
          <Menu />
        </nav>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none focus:ring-0 outline-none border-none no-outline"
            onClick={() => {
              const newMenuOpenState = !menuOpen;
              setMenuOpen(newMenuOpenState);
            }}
          >
            {menuOpen ? (
              <FaTimes className="w-7 h-7" />
            ) : (
              <FaBars className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-brandBlue/95 shadow-md overflow-hidden"
          >
            <Menu onLinkClick={() => setMenuOpen(false)} />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
