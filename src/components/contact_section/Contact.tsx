import { useEffect } from "react";
import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
  size: "md" | "lg";
}

export default function Contact({ contact, size }: ContactProps) {
  const socialMediaLinks = [
    // Fix this if you add or remove social media links in info.ts
    {
      name: "github",
      icon: "fab fa-github",
      link: contact.github,
      link_alt: "GitHub",
    },
    {
      name: "discord",
      icon: "fa-brands fa-discord",
      link: contact.discord,
      link_alt: "Discord",
    },
    {
      name: "handbook",
      icon: "fa-solid fa-book",
      link: contact.handbook,
      link_alt: "Europeana Handbook",
    },
    {
      name: "rss",
      icon: "fas fa-rss",
      link: "/digitalizacija/rss.xml",
      link_alt: "RSS Feed",
    },
  ];

  return (
    <div className={"flex flex-row items-center container justify-around"}>
      {socialMediaLinks.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target="_blank"
          rel="noreferrer"
          className={
            "text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent " +
            (size === "md" ? "text-3xl lg:text-4xl" : "text-5xl lg:text-9xl")
          }
          aria-label={socialMedia.link_alt}
        >
          <i className={socialMedia.icon}></i>
        </a>
      ))}
    </div>
  );
}
