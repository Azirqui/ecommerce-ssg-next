/** @type {import('next').NextConfig} */
const nextConfig = {output: "export",
    basePath: "/ecommerce-ssg-next",  // <=== enables static exports
    reactStrictMode: true,};

export default nextConfig;
