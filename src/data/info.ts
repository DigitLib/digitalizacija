export const info = {
  name: "Дигитализација",
  brief_description: "Овај портал је намењен институцијама културе",
  role: "Подсетник.",
  picture: "/digitalizacija/e-book.png",
  picture_alt: "EBook",
  location: "Србији",
  cv: "/resume.pdf",

  about: {
    description: `На овом порталу постављени су описи корака у процесу дигитализације културног наслеђа.
    Портал је конципиран да служи као подсетник током дигитализације.
    Подсетник се састоји од чланака (у менију "Чланци") који представљају кораке у процесу дигитализације.
    Сваки чланак садржи практичне савете и смернице а неки садрже и видео материјал.`,
    education: [
      {
        title:
          "Едукација и формирање заједнице стручњака за процес дигитализације у установама културе.",
        date: "2024",
        location: "Република Србија",
        gpa: "Министарство Културе РС",
        thesis: "'Обука радника у култури за комплетан процес дигитализације'",
        realisation:
          "Андрија Сагић (Библиотека 'Милутин Бојић') и Милан Јовановић (Народна библиотека Пирот)",
      },
    ],
    experience: [
      {
        title: "Полазници",
        date: "Јун - Јул",
        location: "Онлајн",
        description: "Позив за обуку, избор полазника.",
      },
      {
        title: "Припрема",
        date: "Јул - Август",
        location: "",
        description:
          "Избор и припрема материјала. Израда детаљног плана прилагођен броју полазника",
      },
      {
        title: "Платформа",
        date: "Август - Септембар",
        location: "Онлајн",
        description:
          "Припрема приручника и подсетника. Адаптација дигиталних платформи за комуникацију и размену докумената и искустава.",
      },
      {
        title: "Реализација",
        date: "Октобар",
        location: "Онлајн",
        description:
          "Вишедневна обука онлајн, рад са полазницима према утврђеном плану програма.",
      },
    ],

    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Prank Mastery"], // not used yet
  },

  projects: [
    {
      title: "Bart's Prank Portfolio",
      date: "2024",
      description:
        "An interactive portfolio website showcasing my mischievous coding projects.",
      link: "https://github.com/bartsimpsonfake/prank-portfolio",
      tech: ["React", "Node.js", "MongoDB", "Sarcasm.js"],
      img_alt: "Bart's Portfolio",
      img_path: "/simpsons.png",
    },
    {
      title: "Skateboard Shop",
      date: "2023",
      description:
        "An e-commerce site selling skateboards and prank supplies. No bullies allowed!",
      link: "https://github.com/bartsimpsonfake/skate-shop",
      tech: ["React", "Node.js", "MongoDB", "Skateboard.js"],
      img_alt: "Skateboard Shop",
      img_path: "skateboard.png",
    },
    {
      title: "Comic Book Club",
      date: "2022",
      description:
        "A platform for comic book enthusiasts to discuss and share their collections.",
      link: "https://github.com/bartsimpsonfake/comic-club",
      tech: ["React", "Node.js", "MongoDB", "Comic.js"],
      img_alt: "Comic Book Club",
      img_path: "comics.png",
    },
  ],

  contact: {
    discord: "https://discord.gg/EFnfZaCgWZ",
    github: "https://github.com/DigitLib/digitalizacija",
    handbook: "https://europeana.github.io/fste-digitization-handbook/sr/",
  },
};
