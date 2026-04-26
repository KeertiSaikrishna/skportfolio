"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPreview() {
  return (
    <section
      id="blog"
      style={{
        padding: "80px max(24px, calc((100% - 960px) / 2))",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "var(--text-3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            From the blog
          </span>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <Link
          href="/blog"
          style={{
            fontSize: 12,
            color: "var(--text-2)",
            textDecoration: "none",
            marginLeft: 16,
            whiteSpace: "nowrap",
          }}
        >
          All posts →
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
          >
            <Link
              href={post.published ? `/blog/${post.slug}` : "/blog"}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                background: "var(--bg)",
                cursor: post.published ? "pointer" : "default",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mid)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                {post.tag}
              </span>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-2)",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {post.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 4,
                }}
              >
                <span style={{ fontSize: 11, color: "var(--text-3)" }}>{post.readTime}</span>
                {!post.published && (
                  <span
                    style={{
                      fontSize: 10,
                      color: "var(--text-3)",
                      border: "1px dashed var(--border-mid)",
                      padding: "2px 8px",
                      borderRadius: 99,
                    }}
                  >
                    Coming soon
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
