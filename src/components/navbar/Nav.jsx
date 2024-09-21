import { useEffect, useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Search from "../search/Search";
import Hamburger from "./Hamburger";
import { info } from "../../data/info";

export default function Nav({ posts }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { name: "Чланци", href: "/digitalizacija/posts" },
    { name: "Линкови", href: "/digitalizacija/#contact" },
  ];

  const extractInitials = (name) => {
    const names = name.split(" ");
    let initials = "";
    names.forEach((name) => {
      initials += name.charAt(0);
    });
    return initials;
  };

  return (
    <>
      <nav className="container mx-auto fixed top-0 z-50 bg-primary dark:bg-dk-primary">
        <div className="w-full px-6 py-2 flex justify-between items-center">
          <a className="font-bold text-2xl" href="/digitalizacija">
            <span className="text-secondary dark:text-dk-secondary">
              {"</" + "Дигитализација" + ">"}
            </span>
          </a>

          <div className="inline-flex lg:hidden text-secondary dark:text-dk-secondary">
            <Hamburger
              onClick={() => setIsNavOpen(!isNavOpen)}
              isNavOpen={isNavOpen}
            />
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex text-secondary dark:text-dk-secondary font-normal">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="p-4 hover:text-accent dark:hover:text-dk-accent"
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <li className="px-4 flex">
                <ToggleDarkMode />
              </li>
              <li className="px-4 flex">
                <Search posts={posts} />
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            !isNavOpen
              ? "hidden"
              : "" +
                " h-full flex flex-col items-center text-center lg:hidden dark:text-tertiary"
          }
        >
          <ul className="w-full text-secondary dark:text-dk-secondary font-thin">
            {navLinks.map((link, index) => (
              <li key={index} className="p-4">
                <a href={link.href} onClick={() => setIsNavOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="p-4 flex flex-row items-center justify-evenly">
              <ToggleDarkMode />
              <Search posts={posts} />
            </li>
          </ul>
        </div>
      </nav>
      {isNavOpen && (
        <div
          className="fixed inset-0 blur-3xl bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}
    </>
  );
}
