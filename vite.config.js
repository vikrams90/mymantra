import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy: {
  //   "/api": {
  //     target: "http://52.90.114.34:3000",
  //     changeOrigin: true,
  //     secure: false,
  //     // rewrite: (path) => path.replace(/^\/api/, ''),
  //   },
  // },
});
