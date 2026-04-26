"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

function SkillCard({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      style={{
        background: "var(--surface)",
        borderRadius: 8,
        padding: "16px 18px",
      }}
    >
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{name}</p>
      <div
        style={{
          height: 2,
          background: "var(--border-mid)",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.1 }}
          style={{ height: 2, background: "var(--text)", borderRadius: 99 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px max(24px, calc((100% - 960px) / 2))",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 40,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 500,
            color: "var(--text-3)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Skills
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 12,
        }}
      >
        {skills.map((s, i) => (
          <SkillCard key={s.name} name={s.name} level={s.level} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
