import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { overview, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const focusCopy = {
  "Full-Stack Development": "UI to database—shipped as one coherent product.",
  "React & Frontend": "Interfaces that stay fast, clear, and intentional.",
  "APIs & Backend": "Secure REST services built for real traffic.",
  "Databases & Cloud": "SQL/NoSQL + deploy paths that scale with use.",
};

const About = () => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
        {/* Left — narrative */}
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} mt-1`}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.06, 0.7)}
            className="mt-5 font-display text-[22px] sm:text-[26px] lg:text-[28px] text-white tracking-tight leading-[1.25] max-w-xl"
          >
            <span className="text-gradient-hero">{overview.headline}</span>
          </motion.p>

          <motion.div
            variants={fadeIn("", "", 0.1, 0.7)}
            className="mt-6 space-y-4 max-w-xl border-l border-accent/30 pl-5"
          >
            {overview.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-secondary text-[15px] sm:text-[16px] leading-[1.75]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.15, 0.65)}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
          >
            {overview.highlights.map((item, i) => (
              <div key={item.label} className="min-w-[7rem]">
                <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  <span className="text-gradient-hero">{item.value}</span>
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-secondary">
                  {item.label}
                </p>
                {i < overview.highlights.length - 1 && (
                  <span className="sr-only">·</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — focus areas (no tilt cards) */}
        <motion.aside
          variants={fadeIn("left", "tween", 0.12, 0.75)}
          className="relative"
        >
          <div className="absolute -inset-4 sm:-inset-5 rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] -z-10" />

          <p className="text-[12px] uppercase tracking-[0.2em] text-accent mb-6">
            What I focus on
          </p>

          <ol className="space-y-0 divide-y divide-white/[0.07]">
            {services.map((service, index) => (
              <motion.li
                key={service.title}
                variants={fadeIn("up", "spring", index * 0.08, 0.55)}
                className="group flex gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span className="font-display text-2xl font-bold text-white/15 group-hover:text-accent/50 transition-colors tabular-nums w-8 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-3">
                    <img
                      src={service.icon}
                      alt=""
                      className="mt-0.5 h-8 w-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-[16px] tracking-tight group-hover:text-accent-2 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-secondary leading-relaxed">
                        {focusCopy[service.title] ||
                          "Crafted with care for production use."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 pt-6 border-t border-white/[0.07]">
            <p className="text-[13px] text-secondary leading-relaxed">
              Currently shipping at{" "}
              <span className="text-white font-medium">RapidFacto</span>
              {" · "}
              B.Tech CSE @{" "}
              <span className="text-white font-medium">AKGEC</span>
            </p>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
