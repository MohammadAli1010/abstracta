// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
//   allowedDevOrigins: ["https://abstracta.loca.lt"],
// };

// export default nextConfig;

import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing config
  allowedDevOrigins: ["https://abstracta.loca.lt"],

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
