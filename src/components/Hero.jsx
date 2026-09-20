import { motion } from "framer-motion";

import { styles } from "../styles";
import { resume } from "../assets";
import { staggerContainer, staggerItem } from "../utils/motion";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] mx-auto flex flex-col justify-center pb-24 overflow-hidden">
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
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-accent-2/95 text-sm sm:text-base font-medium tracking-wide backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
            SDE @ RapidFacto · B.Tech CSE, AKGEC
          </motion.p>

          <motion.div variants={staggerItem} className="space-y-4">
            <h1
              className={`${styles.heroHeadText} drop-shadow-[0_0_40px_rgba(34,211,238,0.15)]`}
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient-hero">Aman</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              I build production full-stack apps—React UIs, secure REST APIs,
              and data layers that stay fast under real users.
            </p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold keep-white text-on-accent bg-gradient-to-r from-accent to-accent-2 shadow-glow-sm"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 48px -8px rgba(167,139,250,0.55)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              View projects
            </motion.a>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-ink border border-accent/35 bg-accent/10 hover:bg-accent/20 hover:border-accent/55 transition-colors"
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-ink border border-edge glass-panel hover:border-accent/40 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let&apos;s talk
            </motion.a>
            <a
              href="https://github.com/AMANverma9118"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-secondary hover:text-ink underline-offset-4 hover:underline transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute xs:bottom-8 bottom-16 left-0 right-0 flex justify-center items-center z-10 pointer-events-none">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 pointer-events-auto"
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
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-accent to-accent-2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
