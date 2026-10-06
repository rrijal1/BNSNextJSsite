import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaGraduationCap } from "react-icons/fa";

interface SingularMenuItem {
  name: string;
  path: string;
  outLink?: boolean;
  targetBlank?: boolean;
}

interface GroupMenuItem {
  title: string;
  items: SingularMenuItem[];
}

export default function Footer() {
  const footerMenu: GroupMenuItem[] = [
    {
      title: "About",
      items: [
        { name: "Home", outLink: false, path: "/" },
        { name: "Our Values", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Give", path: "/donate" },
        { name: "Admission", path: "/admission" },
        { name: "Scholarship", path: "/scholarship" },
        { name: "Facilities", path: "/facilities" },
      ],
    },
    {
      title: "Essentials",
      items: [
        { name: "This year", path: "/activities" },
        { name: "Calendar", path: "/calendar" },
        { name: "Events", path: "/events" },
        { name: "Student writing", path: "/stories/articles" },
        { name: "Student voices", path: "/stories/testimonials" },
        {
          name: "School Bus Route (Lalitpur)",
          path: "https://www.google.com/maps/d/edit?mid=1c3WsDgtHqKTsDgXSqP1-yaBMHB5VCgTU&usp=sharing",
          outLink: true,
          targetBlank: true,
        },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Beyond School",
      items: [
        {
          name: "Bloom Nepal Foundation",
          path: "https://bloomnf.org",
          outLink: true,
          targetBlank: true,
        },
        {
          name: "BloomED",
          path: "http://bloomedn.org",
          outLink: true,
          targetBlank: true,
        },
      ],
    },
  ];

  return (
    <footer className="bg-brandBlue py-16 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center text-center lg:text-left mb-12">
          {footerMenu.map((menuCard) => (
            <div key={menuCard.title} className="footer-menu-card">
              <h4 className="text-lg font-semibold text-white mb-6">
                {menuCard.title}
              </h4>
              <ul className="space-y-3">
                {menuCard.items.map((menu) => (
                  <li key={menu.path + menu.name}>
                    {menu.outLink ? (
                      <a
                        href={menu.path}
                        target={menu.targetBlank ? "_blank" : "_self"}
                        rel={menu.targetBlank ? "noopener noreferrer" : ""}
                        className="text-gray-400 hover:text-white/80 transition-all duration-200"
                      >
                        {menu.name}
                      </a>
                    ) : (
                      <Link
                        href={menu.path}
                        className="text-gray-400 hover:text-white/80 transition-all duration-200"
                      >
                        {menu.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-600" />

        {/* Bottom Section with Icons and Enhanced Design */}
        <div className="bg-brandBlue/30 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright with School Icon */}
            <div className="flex items-center space-x-3 text-center lg:text-left">
              <div className="bg-white/10 p-2 rounded-full">
                <FaGraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Bloom Nepal School</p>
                <p className="text-gray-300 text-sm">
                  &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm font-medium">
                Connect with us:
              </span>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/bloomnepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group  hover:bg-brandRed bg-brandGreen p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="Follow us on Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC9VQZppX9zCQt5EajiGKPmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:bg-brandRed bg-brandGreen p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="Subscribe to our YouTube channel"
                >
                  <FaYoutube className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Legal Links with Heart Icon */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-3">
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white hover:underline transition-all duration-200 hover:scale-105"
                >
                  Privacy
                </Link>
                <span className="text-gray-500">•</span>
                <Link
                  href="/rules"
                  className="text-gray-300 hover:text-white hover:underline transition-all duration-200 hover:scale-105"
                >
                  Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
