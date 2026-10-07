import { motion } from "framer-motion";

import { styles } from "../styles";
import { resume } from "../assets";
import { socialLinks } from "../constants";
import { staggerContainer, staggerItem } from "../utils/motion";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] mx-auto flex flex-col justify-center pb-28 overflow-hidden">
      <HeroBackground />

      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        animate="show"
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6 sm:gap-8 pt-28 sm:pt-32`}
      >
        <motion.div
          variants={staggerItem}
          className="flex flex-col justify-center items-center mt-3 sm:mt-4"
          aria-hidden
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-accent/40 blur-md animate-pulse-soft" />
            <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-glow-sm" />
          </div>
          <div className="w-px sm:h-72 h-48 mt-3 bg-gradient-to-b from-accent via-accent-2/50 to-transparent" />
        </motion.div>

        <div className="flex-1 space-y-6 sm:space-y-8">
          <motion.p
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel/70 px-3 py-1 text-secondary text-sm sm:text-base font-medium tracking-wide backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
            SDE @ RapidFacto · B.Tech CSE, AKGEC
          </motion.p>

          <motion.div variants={staggerItem} className="space-y-4">
            <p className="text-accent text-[13px] sm:text-sm font-semibold uppercase tracking-[0.18em]">
              Full-Stack Developer · Software Engineer
            </p>
            <h1 className={`${styles.heroHeadText}`}>
              Building{" "}
              <span className="text-gradient-hero">scalable web</span>{" "}
              applications
            </h1>
            <p className={`${styles.heroSubText}`}>
              I build production-ready web applications across the frontend,
              backend, databases, APIs, integrations, and deployment.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold keep-white text-on-accent bg-gradient-to-r from-accent to-accent-2 shadow-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-ink border border-accent/35 bg-accent/10 hover:bg-accent/20 hover:border-accent/55 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-ink border border-edge glass-panel hover:border-accent/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-4 text-sm text-secondary"
          >
            <a
              href="#services"
              className="hover:text-ink underline-offset-4 hover:underline transition-colors"
            >
              Available for freelance projects
            </a>
            <span className="text-edge" aria-hidden>
              ·
            </span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink underline-offset-4 hover:underline transition-colors"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink underline-offset-4 hover:underline transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute xs:bottom-8 bottom-14 left-0 right-0 flex justify-center items-center z-10 pointer-events-none">
        <a
          href="#credibility"
          className="group flex flex-col items-center gap-2 pointer-events-auto"
          aria-label="Scroll to credibility"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-secondary group-hover:text-accent transition-colors">
            Scroll
          </span>
          <div className="w-[34px] h-[60px] rounded-full border-2 border-edge flex justify-center items-start p-2 backdrop-blur-sm bg-panel/40 group-hover:border-accent/50 transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-accent to-accent-2 motion-reduce:animate-none"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
