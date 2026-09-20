import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useTheme } from "../context/ThemeContext";

/**
 * Interactive particle field — reacts to cursor with attraction + connection lines.
 */
const InteractiveCanvas = ({ reduceMotion, isLight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let frameId;
    let width = 0;
    let height = 0;
    let particles = [];
    const mouse = { x: null, y: null, active: false };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parent = canvas.parentElement;
    const light = !!isLight;

    const resize = () => {
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        ox: 0,
        oy: 0,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1.4 + Math.random() * 2.2,
        hue: Math.random() > 0.45 ? 190 : 265,
        a: light ? 0.28 + Math.random() * 0.32 : 0.35 + Math.random() * 0.4,
      }));
      particles.forEach((p) => {
        p.ox = p.x;
        p.oy = p.y;
      });
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inside) {
        mouse.active = false;
        mouse.x = null;
        mouse.y = null;
        return;
      }

      mouse.active = true;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const glowLightness = light ? 48 : 72;
      const coreLightness = light ? 42 : 80;
      const lineCyan = light
        ? "8, 145, 178"
        : "34, 211, 238";
      const lineViolet = light
        ? "124, 58, 237"
        : "167, 139, 250";
      const spotlightCore = light
        ? "rgba(8, 145, 178, 0.1)"
        : "rgba(34, 211, 238, 0.16)";
      const spotlightMid = light
        ? "rgba(124, 58, 237, 0.06)"
        : "rgba(167, 139, 250, 0.08)";

      // Cursor spotlight
      if (mouse.active && mouse.x != null && !reduceMotion) {
        const spotlight = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          220
        );
        spotlight.addColorStop(0, spotlightCore);
        spotlight.addColorStop(0.45, spotlightMid);
        spotlight.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, width, height);
      }

      for (const p of particles) {
        if (!reduceMotion) {
          // Idle drift
          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
          p.vx *= 0.98;
          p.vy *= 0.98;

          // Attract toward cursor
          if (mouse.active && mouse.x != null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy) || 1;
            if (dist < 220) {
              const force = (1 - dist / 220) * 0.085;
              p.vx += dx * force;
              p.vy += dy * force;
            }
          }

          p.x += p.vx;
          p.y += p.vy;

          // Soft bounds bounce
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
        }

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        glow.addColorStop(
          0,
          `hsla(${p.hue}, 85%, ${glowLightness}%, ${p.a})`
        );
        glow.addColorStop(1, `hsla(${p.hue}, 80%, ${glowLightness - 8}%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, ${coreLightness}%, ${Math.min(1, p.a + 0.2)})`;
        ctx.fill();
      }

      // Connection lines near cursor / between close particles
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];

        if (mouse.active && mouse.x != null) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * (light ? 0.4 : 0.55);
            ctx.strokeStyle = `rgba(${lineCyan}, ${alpha})`;
            ctx.lineWidth = 1.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * (light ? 0.16 : 0.22);
            ctx.strokeStyle = `rgba(${lineViolet}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Cursor core
      if (mouse.active && mouse.x != null && !reduceMotion) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = light
          ? "rgba(8, 145, 178, 0.9)"
          : "rgba(165, 243, 252, 0.95)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = light
          ? "rgba(8, 145, 178, 0.4)"
          : "rgba(34, 211, 238, 0.45)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      frameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion, isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
};

const MagneticOrbs = ({ reduceMotion, isLight }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });
  const invX = useMotionValue(0);
  const invY = useMotionValue(0);
  const six = useSpring(invX, { stiffness: 50, damping: 18 });
  const siy = useSpring(invY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    if (reduceMotion) return undefined;

    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 48;
      const ny = (e.clientY / window.innerHeight - 0.5) * 36;
      mx.set(nx);
      my.set(ny);
      invX.set(-nx * 0.85);
      invY.set(-ny * 0.85);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, invX, invY, reduceMotion]);

  const ring = isLight ? "border-slate-900/10" : "border-white/10";
  const cyanOrb = isLight
    ? "from-cyan-600/20 shadow-[0_0_50px_rgba(8,145,178,0.12)]"
    : "from-cyan-400/25 shadow-[0_0_60px_rgba(34,211,238,0.2)]";
  const violetOrb = isLight
    ? "from-violet-600/20 shadow-[0_0_60px_rgba(124,58,237,0.12)]"
    : "from-violet-400/25 shadow-[0_0_80px_rgba(167,139,250,0.2)]";

  return (
    <>
      <motion.div
        className={`absolute left-[8%] top-[22%] h-40 w-40 rounded-full border ${ring} bg-gradient-to-br ${cyanOrb} to-transparent`}
        style={{ x: sx, y: sy }}
      />
      <motion.div
        className={`absolute right-[12%] top-[28%] h-56 w-56 rounded-full border ${ring} bg-gradient-to-bl ${violetOrb} to-transparent`}
        style={{ x: six, y: siy }}
      />
      <motion.div
        className={`absolute bottom-[18%] right-[28%] h-28 w-28 rounded-full ${
          isLight
            ? "border-cyan-700/15 bg-cyan-600/10"
            : "border-cyan-300/15 bg-cyan-400/15"
        }`}
        style={{ x: sx, y: sy }}
      />
    </>
  );
};

const HeroBackground = () => {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at 20% 20%, rgba(8,145,178,0.1), transparent 50%), radial-gradient(ellipse at 80% 10%, rgba(124,58,237,0.12), transparent 45%), linear-gradient(160deg, var(--hero-base) 0%, var(--hero-mid) 55%, var(--color-primary) 100%)"
            : "radial-gradient(ellipse at 20% 20%, rgba(34,211,238,0.16), transparent 50%), radial-gradient(ellipse at 80% 10%, rgba(167,139,250,0.18), transparent 45%), linear-gradient(160deg, var(--hero-base) 0%, var(--hero-mid) 55%, var(--color-primary) 100%)",
        }}
      />

      <motion.div
        className={`absolute -left-1/4 top-1/4 h-[50%] w-[70%] rounded-[100%] blur-3xl ${
          isLight
            ? "bg-[conic-gradient(from_180deg_at_50%_50%,rgba(8,145,178,0.08),transparent_40%,rgba(124,58,237,0.1),transparent_75%)]"
            : "bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.12),transparent_40%,rgba(167,139,250,0.14),transparent_75%)]"
        }`}
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 25, -10, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-1/4 bottom-0 h-[60%] w-[65%] rounded-[100%] blur-3xl ${
          isLight
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,rgba(99,102,241,0.1),transparent_50%,rgba(8,145,178,0.07),transparent_80%)]"
            : "bg-[conic-gradient(from_90deg_at_50%_50%,rgba(99,102,241,0.16),transparent_50%,rgba(34,211,238,0.1),transparent_80%)]"
        }`}
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, -30, 15, 0], x: [0, -40, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <MagneticOrbs reduceMotion={!!reduceMotion} isLight={isLight} />

      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,color-mix(in_srgb,var(--color-primary)_55%,transparent)_75%,var(--color-primary)_100%)] opacity-80" />

      {/* Interactive layer above ambient so cursor effects stay visible */}
      <InteractiveCanvas reduceMotion={!!reduceMotion} isLight={isLight} />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};

export default HeroBackground;
