import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(() => ({
  // QUAN TRỌNG: tên repo của bạn
  base: "/kingbull-web/",
  plugins: [react(), componentTagger()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  server: { host: "::", port: 8080 },
  preview: { port: 8080 },
  // Nếu muốn build thẳng ra docs luôn, bật dòng dưới:
  // build: { outDir: "docs" },
}));
