import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      host: true,
      port: 5173,
      proxy: {
         api: {
            target: "http://127.0.0.1:4000",
            changeOrigin: true,
            secure: false,
         },
      },
   },
});
