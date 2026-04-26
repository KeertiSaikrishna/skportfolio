import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        table: ({ children }) => (
        <div style={{ overflowX: "auto", margin: "28px 0" }}>
            <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 14,
            border: "1px solid var(--border)",
            borderRadius: 8,
            overflow: "hidden",
            }}>
            {children}
            </table>
        </div>
        ),
        th: ({ children }) => (
        <th style={{
            background: "#0d0d0d",
            color: "#e2e8f0",
            fontWeight: 600,
            padding: "12px 16px",
            textAlign: "left",
            borderBottom: "1px solid #2a2a2a",
        }}>
            {children}
        </th>
        ),
        td: ({ children }) => (
        <td style={{
            padding: "12px 16px",
            borderBottom: "1px solid var(--border)",
            color: "var(--text-2)",
        }}>
            {children}
        </td>
        ),
    };
}