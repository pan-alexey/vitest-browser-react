import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  plugins: [react()],
  test: {
    include: ["src/example.test.tsx"],
    setupFiles: ["./setup-file.ts"],
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      name: "chromium", // browser name is required
      headless: false,
    },
  },
}));
