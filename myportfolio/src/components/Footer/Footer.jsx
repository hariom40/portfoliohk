import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
} from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    {
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/hariom94/",
      label: "LeetCode",
    },
    {
      icon: <SiGeeksforgeeks />,
      link: "https://www.geeksforgeeks.org/user/hariom94/",
      label: "GeeksforGeeks",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/hari-om123",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/hariom40",
      label: "GitHub",
    },
    {
      icon: <SiCodechef />,
      link: "https://www.codechef.com/users/hariom86",
      label: "CodeChef",
    },
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gray-900">
      <div className="container mx-auto text-center">
        {/* Logo / Name */}
        <h2 className="text-xl font-semibold text-purple-500">Hari Om</h2>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-purple-500 text-sm sm:text-base"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <ul className="flex justify-center gap-4 mt-6">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${item.label} profile`}
                className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Hariom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
