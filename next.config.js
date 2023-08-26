/* eslint-disable @typescript-eslint/no-var-requires */
const { withKumaUI } = require("@kuma-ui/next-plugin");
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
 
module.exports = withKumaUI(nextConfig);
