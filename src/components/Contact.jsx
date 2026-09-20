import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const channels = [
  {
    label: "Email",
    value: "aman.verma3497924@gmail.com",
    href: "mailto:aman.verma3497924@gmail.com",
    hint: "Best for detailed briefs",
  },
  {
    label: "Phone",
    value: "+91 91183 59330",
    href: "tel:+919118359330",
    hint: "Call or WhatsApp",
  },
  {
    label: "GitHub",
    value: "AMANverma9118",
    href: "https://github.com/AMANverma9118",
    hint: "Code & projects",
  },
  {
    label: "Based in",
    value: "Ghaziabad, UP",
    href: null,
    hint: "Open to remote",
  },
];

const fieldClass =
  "peer w-full bg-transparent border-0 border-b border-white/15 px-0 py-3 text-white placeholder:text-secondary/50 outline-none transition-[border-color] duration-300 focus:border-accent-2";

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
      import.meta.env.VITE_APP_EMAILJS_TO_EMAIL ||
        "aman.verma3497924@gmail.com"
    ).trim();

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setStatus({
        type: "error",
        message: "Unable to send right now. Please try again later.",
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
      // Common EmailJS default template aliases
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
          message: "Unable to send right now. Please try again later.",
        });
      });
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-accent-2/10 blur-3xl" />

      <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
        {/* Left — story + channels */}
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText} mt-1`}>
              Let&apos;s talk.
            </h3>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.08, 0.7)}
            className="mt-4 text-secondary text-[16px] sm:text-[17px] leading-relaxed max-w-md"
          >
            Building something ambitious? Need a full-stack partner for product,
            APIs, or performance work—I&apos;m easy to reach.
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0.12, 0.65)}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[12px] font-medium text-emerald-300/95 tracking-wide">
              Available for roles & freelance
            </span>
          </motion.div>

          <motion.ul
            variants={fadeIn("up", "tween", 0.18, 0.7)}
            className="mt-10 space-y-0 divide-y divide-white/[0.07] border-y border-white/[0.07]"
          >
            {channels.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              const props = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith("http") ? "_blank" : undefined,
                    rel: item.href.startsWith("http") ? "noreferrer" : undefined,
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
                      <p className="mt-1 text-[15px] sm:text-[16px] text-white font-medium truncate group-hover:text-accent-2 transition-colors">
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

        {/* Right — underline form (no heavy card chrome) */}
        <motion.div
          variants={fadeIn("left", "tween", 0.15, 0.75)}
          className="relative"
        >
          <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] -z-10" />

          <p className="font-display text-lg text-white/90 font-semibold tracking-tight mb-8">
            Send a message
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
                placeholder="Project idea, timeline, or just hello…"
                className={`${fieldClass} resize-none min-h-[120px]`}
                required
              />
            </label>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-[14px] font-semibold keep-white text-on-accent shadow-glow-sm disabled:opacity-60 disabled:cursor-not-allowed"
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
