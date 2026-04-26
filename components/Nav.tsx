"use client";

import Link from "next/link";
import { personal } from "@/lib/data";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(250,250,248,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 max(24px, calc((100% - 960px) / 2))",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 18,
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        SK
      </Link>

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          listStyle: "none",
        }}
      >
        {[
          { label: "Experience", href: "/#experience" },
          { label: "Skills", href: "/#skills" },
          { label: "Blog", href: "/blog" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                fontSize: 13,
                color: "var(--text-2)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${personal.email}`}
        style={{
          fontSize: 13,
          fontWeight: 500,
          background: "var(--text)",
          color: "var(--bg)",
          padding: "7px 18px",
          borderRadius: 99,
          textDecoration: "none",
        }}
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
