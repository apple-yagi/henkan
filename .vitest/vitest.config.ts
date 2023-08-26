import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import KumaUI from "@kuma-ui/vite";

export default defineConfig({
  plugins: [react(), KumaUI()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./.vitest/setup.ts"],
  },
});
