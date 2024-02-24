import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbulPlugin from "vite-plugin-istanbul";

export default defineConfig({
  plugins: [
    react(),
    istanbulPlugin({
      include: "src/*",
      exclude: ["node_modules", "dist"],
      extension: [".ts", ".tsx"],
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/root/pages"),
      "@forms": path.resolve(__dirname, "./src/auth/forms"),
    },
  },
  server: {
    watch: {
      ignored: path.resolve(__dirname, "./coverage"),
    },
  },
});
