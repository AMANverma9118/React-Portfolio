import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks, socialLinks } from "../constants";
import { menu, close, resume } from "../assets";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "glass-panel border-b border-edge shadow-card"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Primary"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <BrandMark className="w-9 h-9" />
          <p className="text-ink text-[17px] font-display font-bold cursor-pointer tracking-tight">
            Aman
            <span className="sm:inline hidden text-secondary font-sans font-medium">
              {" "}
              · Full-Stack
            </span>
          </p>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <ul className="list-none flex flex-row gap-0.5">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`relative px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-medium rounded-full transition-colors ${
                    active === nav.title
                      ? "text-ink"
                      : "text-secondary hover:text-ink"
                  }`}
                >
                  {active === nav.title && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-panel border border-edge"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-[1]">{nav.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-full border border-accent/35 bg-accent/10 px-3.5 py-2 text-[13px] font-semibold text-ink hover:bg-accent/20 transition-colors"
          >
            Resume
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="ml-1 p-2 text-secondary hover:text-ink transition-colors"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56A10.52 10.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-secondary hover:text-ink transition-colors"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center gap-2">
          <a
            href={resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-[12px] font-semibold text-ink"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="p-1"
            aria-expanded={toggle}
            aria-controls="mobile-nav"
            aria-label={toggle ? "Close menu" : "Open menu"}
            onClick={() => setToggle(!toggle)}
          >
            <motion.img
              src={toggle ? close : menu}
              alt=""
              className="nav-menu-icon w-[28px] h-[28px] object-contain"
              whileTap={{ scale: 0.92 }}
            />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                id="mobile-nav"
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel p-6 absolute top-[4.5rem] right-4 min-w-[220px] z-20 rounded-2xl shadow-card"
              >
                <ul className="list-none flex flex-col gap-1">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                          active === nav.title
                            ? "text-ink bg-panel"
                            : "text-secondary hover:text-ink hover:bg-panel/60"
                        }`}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-edge flex gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-secondary hover:text-ink"
                  >
                    GitHub
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-secondary hover:text-ink"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
