/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional: Add if you're using dynamic routes
  trailingSlash: true,
  // Optional: Add if you're using `next/link` and `next/image`
  // and need to use the `src` prop for images
  images: {
    unoptimized: true,
  },
}

export default nextConfig
