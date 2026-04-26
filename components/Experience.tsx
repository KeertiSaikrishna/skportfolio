"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "80px max(24px, calc((100% - 960px) / 2))",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Eyebrow */}
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
          Experience
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>

      <div>
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: 40,
              padding: "36px 0",
              borderBottom: i < experience.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            {/* Left meta */}
            <div style={{ paddingTop: 3 }}>
              <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 4 }}>
                {job.period}
              </p>
              <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>
                {job.company}
              </p>
              <p style={{ fontSize: 12, color: "var(--text-3)" }}>{job.location}</p>
            </div>

            {/* Right body */}
            <div>
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 22,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  marginBottom: 14,
                }}
              >
                {job.role}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
                {job.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: 14,
                      color: "var(--text-2)",
                      lineHeight: 1.7,
                      paddingLeft: 16,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 10,
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--border-mid)",
                        display: "inline-block",
                      }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {job.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      color: "var(--text-2)",
                      border: "1px solid var(--border-mid)",
                      borderRadius: 99,
                      padding: "3px 10px",
                      background: "var(--bg)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
