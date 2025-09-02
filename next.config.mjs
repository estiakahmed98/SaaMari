// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ⬅️ enables static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Required for static export if you use next/image
  images: { unoptimized: true },

  // Optional: if your host needs trailing slashes (e.g., GitHub Pages)
  // trailingSlash: true,
};

export default nextConfig;
