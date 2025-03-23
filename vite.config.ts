import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  define: {
    "process.env.VITE_REACT_APP_MAPS_API_KEY": JSON.stringify(process.env.VITE_REACT_APP_MAPS_API_KEY),  }
});
