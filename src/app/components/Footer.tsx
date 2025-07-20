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
        {
          name: "Home",
          outLink: false,
          path: "/",
        },
        {
          name: "Our Values",
          path: "/about",
        },
        {
          name: "Admission",
          path: "/admission",
        },
        {
          name: "Scholarship",
          path: "/scholarship",
        },
        {
          name: "Facilities",
          path: "/facilities",
        },
      ],
    },
    {
      title: "Essentials",
      items: [
        {
          name: "Calendar",
          path: "/calendar",
        },
        {
          name: "Events",
          path: "/events",
        },
        {
          name: "School Bus Route (Lalitpur)",
          path: "https://www.google.com/maps/d/edit?mid=1c3WsDgtHqKTsDgXSqP1-yaBMHB5VCgTU&usp=sharing",
          outLink: true,
          targetBlank: true,
        },
        {
          name: "Contact",
          path: "/contact",
        },
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
          name: "BloomEd",
          path: "http://bloomedn.org",
          outLink: true,
          targetBlank: true,
        },
      ],
    },
  ];
  return (
    <section className="bg-blue-800 p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {footerMenu.map((menuCard) => {
          return (
            <div key={`${menuCard.title}`} className={`footer-menu-card`}>
              <h4 className="uppercase font-medium text-gray-400 mb-4">
                {menuCard.title}
              </h4>
              <ul className="mt-1 space-y-2">
                {menuCard.items.map((menu) => (
                  <li className="" key={menu.path + menu.name}>
                    {menu.outLink ? (
                      <a
                        href={`${menu.path}`}
                        target={menu.targetBlank ? "_blank" : ""}
                        className="text-gray-300 hover:text-white hover:underline"
                      >
                        {" "}
                        {menu.name}
                      </a>
                    ) : (
                      <Link
                        href={`${menu.path}`}
                        className="text-gray-300 hover:text-white hover:underline"
                      >
                        {menu.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="text-center text-sm text-gray-400 mt-8">
        <p>
          Copyright Protected {new Date().getFullYear()} |{" "}
          <Link href="/privacy" className="hover:text-white hover:underline">
            Privacy Policy
          </Link>{" "}
          <span> | </span>
          <Link href="/rules" className="hover:text-white hover:underline">
            Rules and Regulations
          </Link>{" "}
        </p>
      </div>
      <div className="text-center text-sm text-gray-400 mt-2">
        <p>
          Stay In Touch...
          <a
            href="https://www.facebook.com/bloomnepal"
            className="hover:text-white hover:underline"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://www.youtube.com/channel/UC9VQZppX9zCQt5EajiGKPmg"
            className="hover:text-white hover:underline"
          >
            Youtube
          </a>{" "}
        </p>
      </div>
    </section>
  );
}
