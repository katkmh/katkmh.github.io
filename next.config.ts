import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/kats-app",
  reactCompiler: true,
};

export default nextConfig;
