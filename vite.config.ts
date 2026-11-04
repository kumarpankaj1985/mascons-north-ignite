// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";
import path from "node:path";

export default defineConfig(({ mode }) => {
  // Only the preset's existing VITE_ definitions enter the browser bundle.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return {
    resolve: {
      alias: [
        { find: "entities/lib/decode.js", replacement: path.resolve(process.cwd(), "node_modules/entities/lib/decode.js") },
        { find: "entities/lib/encode.js", replacement: path.resolve(process.cwd(), "node_modules/entities/lib/encode.js") },
        // Exact root match preserves newer packages' exported entities/decode subpath.
        { find: /^entities$/, replacement: path.resolve(process.cwd(), "node_modules/entities") },
      ],
    },
  };
});
