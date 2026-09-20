import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { techCategories, technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const techSrc = (tech, isLight) =>
  isLight && tech.iconLight ? tech.iconLight : tech.icon;

const MarqueeRow = ({ items, reverse = false, duration = 40, isLight }) => (
  <div className="relative overflow-hidden masked-marquee py-2">
    <motion.div
      className="flex w-max gap-10 sm:gap-14"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items].map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="tech-chip flex h-9 w-9 items-center justify-center rounded-full">
            <img
              src={techSrc(tech, isLight)}
              alt=""
              className="h-5 w-5 object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.opacity = "0.35";
              }}
            />
          </span>
          <span className="text-[13px] sm:text-sm text-secondary whitespace-nowrap tracking-wide">
            {tech.name}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

const Tech = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const visible = useMemo(() => {
    if (active === "All") return technologies;
    return technologies.filter((t) => t.category === active);
  }, [active]);

  const rowA = technologies.slice(0, Math.ceil(technologies.length / 2));
  const rowB = technologies.slice(Math.ceil(technologies.length / 2));

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My stack</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.75)}
        className="mt-4 text-secondary text-[17px] max-w-2xl mx-auto text-center leading-relaxed"
      >
        A living toolkit—hover a mark to name it, filter to focus a layer of the
        stack.
      </motion.p>

      {/* Signature dual marquees */}
      <motion.div
        variants={fadeIn("up", "tween", 0.12, 0.7)}
        className="mt-12 space-y-3 rounded-[2rem] border border-edge bg-panel/40 py-6"
      >
        <MarqueeRow items={rowA} duration={48} isLight={isLight} />
        <MarqueeRow items={rowB} reverse duration={56} isLight={isLight} />
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.15, 0.5)}
        className="mt-10 flex flex-wrap items-center justify-center gap-2"
      >
        {techCategories.map((cat) => {
          const isActive = active === cat;
          const count =
            cat === "All"
              ? technologies.length
              : technologies.filter((t) => t.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 border ${
                isActive
                  ? "border-accent/45 bg-panel text-ink"
                  : "border-transparent text-secondary hover:text-ink hover:bg-panel/60"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-[11px] opacity-55">{count}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Icon constellation — unique focus view */}
      <div className="relative mt-12 min-h-[220px] sm:min-h-[260px]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[min(70vw,320px)] w-[min(70vw,320px)] rounded-full border border-dashed border-edge" />
          <div className="absolute h-[min(48vw,210px)] w-[min(48vw,210px)] rounded-full border border-edge/60" />
        </div>

        <ul className="relative z-[1] mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-5 sm:gap-7 px-2 py-8">
          {visible.map((tech, index) => {
            const isHot = hovered === tech.name;
            return (
              <motion.li
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.02, 0.3),
                }}
                onMouseEnter={() => setHovered(tech.name)}
                onMouseLeave={() => setHovered(null)}
                className="list-none"
              >
                <button
                  type="button"
                  className={`tech-chip group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full transition-all duration-300 ${
                    isHot
                      ? "tech-chip--hot scale-110"
                      : "hover:scale-[1.04]"
                  }`}
                  aria-label={tech.name}
                >
                  <img
                    src={techSrc(tech, isLight)}
                    alt={tech.name}
                    className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.35";
                    }}
                  />
                  <span
                    className={`pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-all duration-200 border ${
                      isHot
                        ? "opacity-100 translate-y-0 text-ink bg-panel border-edge"
                        : "opacity-0 translate-y-1 text-secondary border-transparent"
                    }`}
                  >
                    {tech.name}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        <p className="text-center text-[12px] text-secondary/70 tracking-wide">
          {active === "All"
            ? "Full constellation"
            : `${active} · ${visible.length} tools`}
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
