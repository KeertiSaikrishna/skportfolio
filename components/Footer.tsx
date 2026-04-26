export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "24px",
        textAlign: "center",
        fontSize: 12,
        color: "var(--text-3)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <p>© {year} Sai Krishna Keerti · Built with Next.js & Tailwind · Deployed on Vercel</p>
    </footer>
  );
}
