import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = ({ experience, isLight }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isLight
          ? "rgba(255, 255, 255, 0.94)"
          : "rgba(15, 23, 42, 0.92)",
        color: isLight ? "#0f172a" : "#fff",
        border: isLight
          ? "1px solid rgba(15, 23, 42, 0.08)"
          : "1px solid rgba(148, 163, 184, 0.12)",
        backdropFilter: "blur(12px)",
      }}
      contentArrowStyle={{
        borderRight: isLight
          ? "7px solid rgba(255, 255, 255, 0.94)"
          : "7px solid rgba(15, 23, 42, 0.92)",
      }}
      date={experience.date}
      dateClassName="!text-secondary !opacity-90 !text-[13px] sm:!text-sm !font-medium"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: isLight
          ? "0 0 0 4px rgba(244, 247, 251, 0.95)"
          : "0 0 0 4px rgba(15, 23, 42, 0.95)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt=""
            className="w-[58%] h-[58%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-ink text-[22px] font-display font-bold tracking-tight">
          {experience.title}
        </h3>
        <p
          className="text-accent-2 text-[15px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
          {experience.location ? (
            <span className="text-secondary font-medium">
              {" "}
              · {experience.location}
            </span>
          ) : null}
        </p>
      </div>

      <ul className="mt-5 list-none ml-0 space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-[14px] pl-4 border-l-2 border-accent/35 leading-relaxed tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.tech?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.tech.map((item) => (
            <span
              key={`${experience.company_name}-${item}`}
              className="text-[12px] font-medium px-2.5 py-1 rounded-full border border-edge bg-panel/60 text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Professional background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-center text-secondary text-[15px] sm:text-[16px] leading-relaxed">
          Roles, impact, and technologies—written for recruiters who need the
          signal quickly.
        </p>
      </motion.div>

      <div className="mt-16 sm:mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isLight={isLight}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
