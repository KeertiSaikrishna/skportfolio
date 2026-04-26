import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    // Pass plugin name as a string (not an imported function) — required for Turbopack
    // because JS functions can't be serialized across the Rust boundary.
    remarkPlugins: ["remark-gfm"],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);