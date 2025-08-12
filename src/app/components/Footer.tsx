import React from "react";
import Link from "next/link";

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
        { name: "Admission", path: "/admission" },
        { name: "Scholarship", path: "/scholarship" },
        { name: "Facilities", path: "/facilities" },
      ],
    },
    {
      title: "Essentials",
      items: [
        { name: "Calendar", path: "/calendar" },
        { name: "Events", path: "/events" },
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
    <footer className="bg-footerBlue py-12 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center text-center lg:text-left">
          {footerMenu.map((menuCard) => (
            <div key={menuCard.title} className="footer-menu-card">
              <h4 className="uppercase font-semibold text-gray-300 mb-4">
                {menuCard.title}
              </h4>
              <ul className="space-y-2">
                {menuCard.items.map((menu) => (
                  <li key={menu.path + menu.name}>
                    {menu.outLink ? (
                      <a
                        href={menu.path}
                        target={menu.targetBlank ? "_blank" : "_self"}
                        rel={menu.targetBlank ? "noopener noreferrer" : ""}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {menu.name}
                      </a>
                    ) : (
                      <Link
                        href={menu.path}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
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

        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">
            Follow us on{" "}
            <a
              href="https://www.facebook.com/bloomnepal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://www.youtube.com/channel/UC9VQZppX9zCQt5EajiGKPmg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              YouTube
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Bloom Nepal School. All Rights
            Reserved.
          </p>
          <p className="mt-2">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/rules"
              className="hover:text-white transition-colors duration-200"
            >
              Rules and Regulations
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
