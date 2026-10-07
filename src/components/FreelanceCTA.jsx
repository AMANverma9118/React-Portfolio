import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const FreelanceCTA = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.05, 0.65)}
      className="rounded-3xl border border-edge bg-panel/50 px-6 py-10 sm:px-10 sm:py-12 text-center"
    >
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
        Have a project in mind?
      </h2>
      <p className="mt-3 mx-auto max-w-2xl text-secondary text-[15px] sm:text-[16px] leading-relaxed">
        I also work with startups and businesses to build complete web
        applications from frontend to backend and deployment.
      </p>
      <a
        href="#contact"
        className="mt-7 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold keep-white text-on-accent bg-gradient-to-r from-accent to-accent-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
      >
        Start a Project
      </a>
    </motion.div>
  );
};

export default SectionWrapper(FreelanceCTA, "freelance");
