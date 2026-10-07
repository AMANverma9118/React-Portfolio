import { motion } from "framer-motion";

import { styles } from "../styles";
import { freelanceServices } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Additional capability</p>
        <h2 className={styles.sectionHeadText}>How I Can Help</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.08, 0.7)}
        className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-2xl leading-relaxed"
      >
        Beyond full-time engineering roles, I also take on focused product work
        for startups and businesses—when the stack and scope are a fit.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {freelanceServices.map((service, index) => (
          <motion.article
            key={service.title}
            variants={fadeIn("up", "tween", 0.05 + index * 0.04, 0.55)}
            className="rounded-2xl border border-edge bg-panel/40 p-5 hover:border-accent/30 transition-colors"
          >
            <h3 className="font-display text-[16px] font-semibold text-ink tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-[13px] text-secondary leading-relaxed">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
