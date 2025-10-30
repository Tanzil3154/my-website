import { Download, Mail } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");
  const [progress, setProgress] = useState(0);

  // Track scroll progress for a thin top bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const p = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observe sections to highlight active link
  const sectionIds = useMemo(
    () => ["about", "experience", "education", "projects", "skills", "contact"],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most visible near the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  const linkCls = (id: string) =>
    `relative pb-1 transition-colors ${
      active === id
        ? "text-primary"
        : "text-gray-700 dark:text-gray-300 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-slate-900/70 backdrop-blur">
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-0.5 bg-transparent"
      >
        <div
          className="h-0.5 bg-gradient-to-r from-primary via-sky-400 to-emerald-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary to-sky-500 text-white grid place-items-center font-bold shadow-soft ring-1 ring-inset ring-white/30">
              {profile.name.charAt(0)}
            </span>
            <span
              className="absolute -inset-0.5 rounded-lg bg-gradient-to-tr from-primary/20 to-sky-500/20 blur opacity-0 group-hover:opacity-100 transition"
              aria-hidden
            ></span>
          </div>
          <div>
            <div className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-none">
              {profile.name}
            </div>
            <div className="text-[12px] text-gray-500 dark:text-gray-400 leading-none mt-1">
              {profile.role}
            </div>
          </div>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className={linkCls("about")}>
            About
          </a>
          <a href="#experience" className={linkCls("experience")}>
            Experience
          </a>
          <a href="#education" className={linkCls("education")}>
            Education
          </a>
          <a href="#projects" className={linkCls("projects")}>
            Projects
          </a>
          <a href="#skills" className={linkCls("skills")}>
            Skills
          </a>

          <div className="flex items-center gap-2 pl-2">
            <ThemeToggle />
            {profile.links?.resume && (
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost px-3 py-1.5"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            )}
            <a href="#contact" className="btn-primary px-3 py-1.5 text-sm">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </nav>

        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-gray-200/70 dark:border-gray-700/70 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#about"
              className={`block ${
                active === "about"
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              About
            </a>
            <a
              href="#experience"
              className={`block ${
                active === "experience"
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Experience
            </a>
            <a
              href="#education"
              className={`block ${
                active === "education"
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Education
            </a>
            <a
              href="#projects"
              className={`block ${
                active === "projects"
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`block ${
                active === "skills"
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`block ${
                active === "contact"
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Contact
            </a>
            {profile.links?.resume && (
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noreferrer"
                className="block text-gray-700 dark:text-gray-300"
              >
                Resume
              </a>
            )}
            <a href="#contact" className="block text-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
