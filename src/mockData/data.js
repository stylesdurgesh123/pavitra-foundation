export const NavbarMenu = [
    {
      id: 1,
      title: "HOME",
      link: "/",
    },
    {
      id: 2,
      title: "ABOUT US",
      link: "/about",
    },
    {
      id: 3,
      title: "OUR WORKS",
      link: "#",
      children: [
        { id: 31, title: "Education", link: "/education" },
        { id: 33, title: "Environment", link: "/environment" },
        { id: 32, title: "Health", link: "/health" },
        { id: 33, title: "Free Legal Aid", link: "/Freelegalaid" },
        { id: 33, title: "Men's Rights", link: "/Women Empowerment" },
      ],
    },
    {
      id: 4,
      title: "GET INVOLVED",
      link: "#",
      children: [
        { id: 35, title: "Our Team", link: "/volunteer" },
        { id: 36, title: "Join NGO", link: "/joinngo" },
        { id: 37, title: "Individual Member", link: "/individualmember" },
      ],
    },
    {
      id: 5,
      title: "CONTACT US",
      link: "/contact",
    },
  ];
  