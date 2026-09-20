import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.75)}>
      <Tilt
        options={{ max: 12, scale: 1.01, speed: 450 }}
        className="group bg-tertiary/90 backdrop-blur-sm p-5 rounded-2xl sm:w-[360px] w-full border border-white/[0.07] shadow-card hover:border-accent/25 hover:shadow-glow transition-[border-color,box-shadow] duration-500"
      >
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl card-img_hover">
          <img
            src={image}
            alt={name}
            className="project-img w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-0 flex justify-end items-start m-3 gap-2">
            {live_demo_link && (
              <motion.button
                type="button"
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer border border-white/10 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Open live demo of ${name}`}
                title="Live demo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-1/2 h-1/2 text-white"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </motion.button>
            )}
            {source_code_link && (
              <motion.button
                type="button"
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer border border-white/10 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View source on GitHub"
                title="GitHub"
              >
                <img
                  src={github}
                  alt=""
                  className="w-1/2 h-1/2 object-contain"
                />
              </motion.button>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-display font-bold text-[22px] tracking-tight">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
            {description}
          </p>
          {live_demo_link && (
            <a
              href={live_demo_link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-[13px] font-medium text-accent-2 hover:text-accent transition-colors"
            >
              Visit live site →
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[13px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.85)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[1.75]"
        >
          Selected projects that showcase how I approach product UI, data flow,
          and maintainable code—from concept to deployment.
        </motion.p>
      </div>

      <div className="mt-16 sm:mt-20 flex flex-wrap gap-8 justify-start relative z-0 isolate">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
