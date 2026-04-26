"use client";

import { motion } from "framer-motion";
import { personal, stats } from "@/lib/data";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
});

export default function Hero() {
  return (
    <section
      style={{
        padding: "100px max(24px, calc((100% - 960px) / 2)) 88px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Availability badge */}
      <motion.div {...fade(0.1)} style={{ marginBottom: 28 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontSize: 12,
            color: "var(--green)",
            background: "var(--green-bg)",
            padding: "5px 13px",
            borderRadius: 99,
          }}
        >
          <span
            className="pulse"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--green)",
              display: "inline-block",
            }}
          />
          {personal.availability}
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        {...fade(0.2)}
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(42px, 7vw, 68px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          marginBottom: 8,
        }}
      >
        Sai Krishna
        <br />
        <em style={{ color: "var(--text-2)", fontStyle: "italic" }}>Keerti</em>
      </motion.h1>

      {/* Role */}
      <motion.p
        {...fade(0.3)}
        style={{
          fontSize: 16,
          color: "var(--text-2)",
          fontWeight: 300,
          marginBottom: 24,
        }}
      >
        {personal.role} — {personal.stack}
      </motion.p>

      {/* Bio */}
      <motion.p
        {...fade(0.4)}
        style={{
          fontSize: 16,
          color: "var(--text-2)",
          lineHeight: 1.75,
          maxWidth: 520,
          marginBottom: 36,
        }}
      >
        {personal.bio}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fade(0.5)}
        style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 0 }}
      >
        <a
          href={`mailto:${personal.email}`}
          style={{
            fontSize: 14,
            fontWeight: 500,
            background: "var(--text)",
            color: "var(--bg)",
            padding: "10px 22px",
            borderRadius: 99,
            textDecoration: "none",
          }}
        >
          Get in touch
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 14,
            fontWeight: 400,
            background: "transparent",
            color: "var(--text)",
            border: "1px solid var(--border-mid)",
            padding: "10px 22px",
            borderRadius: 99,
            textDecoration: "none",
          }}
        >
          LinkedIn ↗
        </a>
        <a
          href="/blog"
          style={{
            fontSize: 14,
            fontWeight: 400,
            background: "transparent",
            color: "var(--text)",
            border: "1px solid var(--border-mid)",
            padding: "10px 22px",
            borderRadius: 99,
            textDecoration: "none",
          }}
        >
          Read the blog
        </a>
      </motion.div>

      {/* Stats */}
      {/* <motion.div
        {...fade(0.65)}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: 1,
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          marginTop: 56,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "var(--bg)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 28,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--text-3)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </motion.div> */}
    </section>
  );
}
