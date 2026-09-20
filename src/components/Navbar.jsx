import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
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
              · Developer
            </span>
          </p>
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          <ul className="list-none flex flex-row gap-1">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`relative px-4 py-2 text-[15px] font-medium rounded-full transition-colors ${
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
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center gap-2">
          <ThemeToggle />
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className="nav-menu-icon w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            whileTap={{ scale: 0.92 }}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel p-6 absolute top-[4.5rem] right-4 min-w-[200px] z-20 rounded-2xl shadow-glow"
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
