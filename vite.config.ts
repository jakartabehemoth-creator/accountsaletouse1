import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the type for mode to avoid implicit any
export default defineConfig(({ mode }: { mode: string }) => ({
  base: "/accountsaletouses/", // if you want a base path
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
