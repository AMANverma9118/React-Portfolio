import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { overview, services } from "../constants";
import { resume } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const focusCopy = {
  "Full-Stack Development":
    "UI to database—shipped as one coherent product.",
  "React & Frontend": "Interfaces that stay fast, clear, and intentional.",
  "APIs & Backend": "Secure REST services built for real traffic.",
  "Databases & Cloud": "SQL/NoSQL and deploy paths that scale with use.",
};

const About = () => {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} mt-1`}>About Me</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.06, 0.7)}
            className="mt-5 font-display text-[22px] sm:text-[26px] lg:text-[28px] text-ink tracking-tight leading-[1.25] max-w-xl"
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
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-ink border border-accent/35 bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-secondary border border-edge hover:text-ink hover:border-accent/40 transition-colors"
            >
              View experience
            </a>
          </motion.div>
        </div>

        <motion.aside
          variants={fadeIn("left", "tween", 0.12, 0.75)}
          className="relative"
        >
          <div
            className="absolute -inset-4 sm:-inset-5 rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-edge -z-10"
            aria-hidden
          />

          <p className="text-[12px] uppercase tracking-[0.2em] text-accent mb-6">
            Engineering focus
          </p>

          <ol className="space-y-0 divide-y divide-edge">
            {services.map((service, index) => (
              <motion.li
                key={service.title}
                variants={fadeIn("up", "spring", index * 0.08, 0.55)}
                className="group flex gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span className="font-display text-2xl font-bold text-ink/15 group-hover:text-accent/50 transition-colors tabular-nums w-8 shrink-0">
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
                      <h3 className="text-ink font-semibold text-[16px] tracking-tight group-hover:text-accent-2 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-secondary leading-relaxed">
                        {focusCopy[service.title]}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 pt-6 border-t border-edge">
            <p className="text-[13px] text-secondary leading-relaxed">
              Currently shipping at{" "}
              <span className="text-ink font-medium">RapidFacto</span>
              {" · "}
              B.Tech CSE @ <span className="text-ink font-medium">AKGEC</span>
            </p>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
