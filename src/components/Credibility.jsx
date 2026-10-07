import { motion } from "framer-motion";

import { credibility } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Credibility = () => {
  return (
    <motion.ul
      variants={fadeIn("up", "tween", 0.05, 0.6)}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      aria-label="Professional credibility"
    >
      {credibility.map((item) => (
        <li
          key={item.label}
          className="rounded-2xl border border-edge bg-panel/50 px-4 py-5 sm:px-5 sm:py-6 text-center"
        >
          <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            <span className="text-gradient-hero">{item.value}</span>
          </p>
          <p className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-secondary">
            {item.label}
          </p>
        </li>
      ))}
    </motion.ul>
  );
};

export default SectionWrapper(Credibility, "credibility");
