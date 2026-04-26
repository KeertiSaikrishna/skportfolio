"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px max(24px, calc((100% - 960px) / 2)) 100px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 400,
          }}
        >
          Let&apos;s build
          <br />
          something{" "}
          <em style={{ fontStyle: "italic", color: "var(--text-2)" }}>great</em>
          <br />
          together.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { label: "Contact me", href: `mailto:${personal.email}` },
            { label: "LinkedIn", href: personal.linkedin }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontSize: 14,
                color: "var(--text-2)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")
              }
            >
              {link.label}
              <span style={{ fontSize: 11, color: "var(--text-3)" }}>↗</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
