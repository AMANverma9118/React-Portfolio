import { motion } from "framer-motion";

/** Custom AV monogram — gradient geometric mark */
const BrandMark = ({ className = "w-9 h-9", animated = true }) => {
  const mark = (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="av-grad" x1="4" y1="6" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="0.55" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="av-soft" x1="20" y1="4" x2="20" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Soft disc */}
      <circle cx="20" cy="20" r="18" fill="url(#av-soft)" />
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#av-grad)"
        strokeWidth="1.25"
        strokeOpacity="0.55"
      />

      {/* Stylized A — left peak */}
      <path
        d="M12.5 28.5 L20 9.5 L27.5 28.5"
        stroke="url(#av-grad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Crossbar of A that doubles as V bridge */}
      <path
        d="M15.2 21.2 H24.8"
        stroke="url(#av-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Inner V notch — unique AV merge */}
      <path
        d="M17.2 28.5 L20 20.8 L22.8 28.5"
        stroke="url(#av-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );

  if (!animated) return mark;

  return (
    <motion.span
      className="inline-flex"
      whileHover={{ rotate: -8, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 380, damping: 18 }}
    >
      {mark}
    </motion.span>
  );
};

export default BrandMark;
