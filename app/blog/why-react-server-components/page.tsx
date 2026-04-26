import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
    title: "Why React Server Components? — Sai Krishna Keerti",
    description: "You've been using Next.js for a while. You know getServerSideProps, you've seen 'use client'. But do you actually know why RSC exists?",
    openGraph: {
        title: "Why React Server Components? The Problem Nobody Fully Explained",
        description: "From CSR to SSR to RSC — a deep dive into why the ecosystem evolved, with real performance numbers.",
        url: "https://saikrishnakeerti.dev/blog/why-react-server-components",
        type: "article",
    },
    };

    export default function Page() {
    return (
        <article
        style={{
            padding: "80px max(24px, calc((100% - 720px) / 2)) 100px",
        }}
        >
        {/* Title block */}
        <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>
            <p style={{
            fontSize: 11,
            fontWeight: 500,
            color: "var(--text-3)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
            }}>
            React · Next.js · Performance
            </p>
            <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 16,
            }}>
            Why React Server Components?{" "}
            <em style={{ fontStyle: "italic", color: "var(--text-2)" }}>
                The Problem Nobody Fully Explained
            </em>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "var(--text-3)" }}>
            <span>Sai Krishna Keerti</span>
            <span>·</span>
            <span>April 26, 2026</span>
            <span>·</span>
            <span>18 min read</span>
            </div>
        </div>

        <Content />
        </article>
    );
}