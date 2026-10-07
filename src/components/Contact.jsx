import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { resume } from "../assets";
import { socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const channels = [
  {
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    hint: "Recruiters & project briefs",
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: socialLinks.linkedin,
    hint: "Experience & network",
  },
  {
    label: "GitHub",
    value: "AMANverma9118",
    href: socialLinks.github,
    hint: "Code & repositories",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: resume,
    hint: "For hiring managers",
    download: true,
  },
];

const fieldClass =
  "peer w-full bg-transparent border-0 border-b border-edge px-0 py-3 text-ink placeholder:text-secondary/50 outline-none transition-[border-color] duration-300 focus:border-accent-2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = String(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || ""
    ).trim();
    const templateId = String(
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || ""
    ).trim();
    const publicKey = String(
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || ""
    ).trim();
    const toEmail = String(
      import.meta.env.VITE_APP_EMAILJS_TO_EMAIL || socialLinks.email
    ).trim();

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({
        type: "error",
        message: "Unable to send right now. Please email me directly.",
      });
      return;
    }

    const templateParams = {
      from_name: form.name,
      to_name: "Aman",
      from_email: form.email,
      reply_to: form.email,
      to_email: toEmail,
      message: form.message,
      user_name: form.name,
      user_email: form.email,
      name: form.name,
      email: form.email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, { publicKey })
      .then(() => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Message sent. I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setStatus({
          type: "error",
          message: "Unable to send right now. Please email me directly.",
        });
      });
  };

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />

      <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Contact</p>
            <h2 className={`${styles.sectionHeadText} mt-1`}>
              Interested in working together?
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.08, 0.7)}
            className="mt-4 text-secondary text-[16px] sm:text-[17px] leading-relaxed max-w-md"
          >
            Open to full-time Full-Stack / Software Engineer roles. If you have
            a product to build, you can also reach out about project work.
          </motion.p>

          <motion.ul
            variants={fadeIn("up", "tween", 0.18, 0.7)}
            className="mt-10 space-y-0 divide-y divide-edge border-y border-edge"
          >
            {channels.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              const props = item.href
                ? {
                    href: item.href,
                    target:
                      item.href.startsWith("http") || item.download
                        ? "_blank"
                        : undefined,
                    rel:
                      item.href.startsWith("http") || item.download
                        ? "noreferrer"
                        : undefined,
                    download: item.download || undefined,
                  }
                : {};

              return (
                <li key={item.label}>
                  <Wrapper
                    {...props}
                    className={`group flex items-center justify-between gap-4 py-4 transition-colors ${
                      item.href ? "hover:text-accent-2 cursor-pointer" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[15px] sm:text-[16px] text-ink font-medium truncate group-hover:text-accent-2 transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline text-[12px] text-secondary/80">
                        {item.hint}
                      </span>
                      {item.href && (
                        <span className="text-secondary group-hover:text-accent-2 group-hover:translate-x-0.5 transition-all">
                          →
                        </span>
                      )}
                    </div>
                  </Wrapper>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <motion.div
          variants={fadeIn("left", "tween", 0.15, 0.75)}
          className="relative"
        >
          <div
            className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-edge -z-10"
            aria-hidden
          />

          <p className="font-display text-lg text-ink font-semibold tracking-tight mb-2">
            Send a message
          </p>
          <p className="text-[13px] text-secondary mb-8">
            Roles, collaborations, or project ideas—include a little context.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <label className="block">
              <span className="text-[12px] uppercase tracking-[0.18em] text-secondary">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={fieldClass}
                required
                autoComplete="name"
              />
            </label>

            <label className="block">
              <span className="text-[12px] uppercase tracking-[0.18em] text-secondary">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={fieldClass}
                required
                autoComplete="email"
              />
            </label>

            <label className="block">
              <span className="text-[12px] uppercase tracking-[0.18em] text-secondary">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Role, timeline, or project overview…"
                className={`${fieldClass} resize-none min-h-[120px]`}
                required
              />
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-[14px] font-semibold keep-white text-on-accent shadow-glow-sm disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? "Sending…" : "Send message"}
                {!loading && <span aria-hidden>↗</span>}
              </motion.button>

              <AnimatePresence mode="wait">
                {status && (
                  <motion.p
                    key={status.message}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-[13px] font-medium ${
                      status.type === "success"
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                    role="status"
                  >
                    {status.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
