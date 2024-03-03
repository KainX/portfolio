/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    images: { unoptimized: true },
    output: "export",  // enables static exports
    reactStrictMode: true,
};

export default nextConfig;
