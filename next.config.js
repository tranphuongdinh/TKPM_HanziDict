/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["firebasestorage.googleapis.com"],
        formats: ["image/avif", "image/webp"],
    },
		pwa: {
			dest: "public",
			register: true,
			skipWaiting: true,
			disable: process.env.NODE_ENV === "development",
		}
};

module.exports = withPWA(nextConfig);
