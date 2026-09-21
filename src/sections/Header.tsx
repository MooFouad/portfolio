"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Handle home section at the top
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10">
      <a href="#projects" className="skip-link">Skip to content</a>
      <nav aria-label="Main" className="flex gap-1 border border-white/15 rounded-full bg-gray-950/60 backdrop-blur-md shadow-lg shadow-black/20">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-current={activeSection === item.id ? "page" : undefined}
            className={`nav-item transition-all duration-300 ${
              activeSection === item.id
                ? "bg-white text-gray-900"
                : item.id === "contact"
                ? "hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
