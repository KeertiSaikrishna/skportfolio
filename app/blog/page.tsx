"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          style={{
            padding: "80px max(24px, calc((100% - 960px) / 2)) 60px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "var(--text-3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Writing on frontend<br />
            <em style={{ fontStyle: "italic", color: "var(--text-2)" }}>engineering</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: 15, color: "var(--text-2)", maxWidth: 480, lineHeight: 1.7 }}
          >
            Practical articles on React, performance, architecture, and the craft of building great web products.
          </motion.p>
        </section>

        <section
          style={{
            padding: "60px max(24px, calc((100% - 960px) / 2)) 100px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              >
                <Link
                  href={post.published ? `/blog/${post.slug}` : "#"}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    alignItems: "center",
                    gap: 24,
                    padding: "24px 28px",
                    background: "var(--bg)",
                    textDecoration: "none",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "var(--surface)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
                  }
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                    }}
                  >
                    {post.tag}
                  </span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", lineHeight: 1.4, marginBottom: 4 }}>
                      {post.title}
                    </p>
                    <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>
                      {post.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, minWidth: 80 }}>
                    <span style={{ fontSize: 11, color: "var(--text-3)" }}>{post.readTime}</span>
                    {!post.published && (
                      <span
                        style={{
                          fontSize: 10,
                          color: "var(--text-3)",
                          border: "1px dashed var(--border-mid)",
                          padding: "2px 8px",
                          borderRadius: 99,
                          whiteSpace: "nowrap",
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
      </main>
      <Footer />
    </>
  );
}
