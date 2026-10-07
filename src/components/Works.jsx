import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCarousel = ({ images, name, fit = "cover" }) => {
  const slides = images?.length ? images : [];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3800);
    return () => clearInterval(id);
  }, [slides.length, paused]);

  if (!slides.length) return null;

  const go = (dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  const imgClass =
    fit === "contain"
      ? "project-img w-full h-full object-contain object-center"
      : "project-img w-full h-full object-cover object-top";

  return (
    <div
      className={`relative w-full h-[230px] overflow-hidden rounded-2xl ${
        fit === "contain"
          ? "bg-[#ebe4d8]"
          : "bg-black-100 card-img_hover"
      }`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={slides[index]}
          src={slides[index]}
          alt={`${name} screenshot ${index + 1}`}
          className={`absolute inset-0 ${imgClass} rounded-2xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          draggable={false}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 keep-white text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70 ${
              paused
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1 pointer-events-none"
            }`}
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 keep-white text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70 ${
              paused
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-1 pointer-events-none"
            }`}
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div
            className={`absolute bottom-2.5 left-0 right-0 z-10 flex justify-center gap-1.5 transition-opacity duration-200 ${
              paused ? "opacity-100" : "opacity-70"
            }`}
          >
            {slides.map((_, i) => (
              <button
                key={`${name}-dot-${i}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-5 bg-accent-2"
                    : "w-1.5 bg-white/55 hover:bg-white/80"
                }`}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  purpose,
  contribution,
  features,
  challenge,
  tags,
  image,
  images,
  source_code_link,
  live_demo_link,
  imageFit,
}) => {
  const slides = images?.length ? images : image ? [image] : [];
  const fit = imageFit || (images?.length > 1 ? "contain" : "cover");

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.75)}
      className="h-full"
    >
      <Tilt
        options={{ max: 8, scale: 1.005, speed: 450 }}
        className="group flex h-full flex-col bg-tertiary/90 backdrop-blur-sm p-5 rounded-2xl w-full border border-edge shadow-card hover:border-accent/25 transition-[border-color,box-shadow] duration-500"
      >
        <div className="relative shrink-0">
          <ProjectCarousel images={slides} name={name} fit={fit} />
          <div className="absolute inset-0 flex justify-end items-start m-3 gap-2 pointer-events-none z-20">
            {live_demo_link && (
              <motion.button
                type="button"
                onClick={() => window.open(live_demo_link, "_blank")}
                className="pointer-events-auto black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer border border-white/10 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
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
                  className="w-1/2 h-1/2 keep-white text-white"
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
                className="pointer-events-auto black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer border border-white/10 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
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

        <div className="mt-5 flex flex-1 flex-col">
          <h3 className="text-ink font-display font-bold text-[22px] tracking-tight min-h-[2.75rem] leading-snug">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            <span className="text-ink/80 font-medium">Purpose: </span>
            {purpose || description}
          </p>
          {contribution ? (
            <p className="mt-2 text-secondary text-[13px] leading-relaxed">
              <span className="text-ink/80 font-medium">What I built: </span>
              {contribution}
            </p>
          ) : null}
          {features?.length ? (
            <ul className="mt-3 space-y-1.5">
              {features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="text-[12px] text-secondary leading-snug pl-3 border-l border-accent/30"
                >
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}
          {challenge ? (
            <p className="mt-3 text-[12px] text-secondary/90 leading-relaxed italic">
              Challenge: {challenge}
            </p>
          ) : null}
          <div className="mt-3 min-h-[1.25rem] flex flex-wrap gap-x-4 gap-y-1">
            {live_demo_link ? (
              <a
                href={live_demo_link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-[13px] font-medium text-accent-2 hover:text-accent transition-colors"
              >
                Live demo →
              </a>
            ) : null}
            {source_code_link ? (
              <a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-[13px] font-medium text-secondary hover:text-ink transition-colors"
              >
                GitHub →
              </a>
            ) : null}
          </div>

          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[13px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.85)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[1.75]"
        >
          Engineering-focused builds—architecture, APIs, data, integrations,
          and deployment—not just UI demos.
        </motion.p>
      </div>

      <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch relative z-0 isolate">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
