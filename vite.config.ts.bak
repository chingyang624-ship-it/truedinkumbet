import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), spaFallbackPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});

function spaFallbackPlugin(): Plugin {
  return {
    name: "spa-fallback",
    apply: "serve",
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          // 如果不是文件请求，让 Vite 处理
          if (!req.url.includes(".") || req.url.endsWith(".html")) {
            req.url = "/";
          }
          next();
        });
      };
    },
  };
}
