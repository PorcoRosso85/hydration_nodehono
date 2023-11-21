import { defineConfig } from "vite";
import devServer from "@hono/vite-dev-server";
import pages from "@hono/vite-cloudflare-pages";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        lib: {
          entry: "./src/clients/index.ts",
          formats: ["es"],
          fileName: "client",
          name: "client",
        },
        rollupOptions: {
          output: {
            dir: "./dist/static",
          },
        },
        emptyOutDir: false,
        copyPublicDir: false,
      },
    };
  } else {
    return {
      plugins: [
        pages(),
        devServer({
          entry: "./src/index.ts",
        }),
      ],
    };
  }
});
