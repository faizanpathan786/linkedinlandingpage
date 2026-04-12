import { cpSync, rmSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = resolve(root, "artifacts/linkedinflow/dist/public");

// Copy to both possible locations so Vercel finds it
// regardless of whether Root Directory is empty or set to artifacts/api-server
const destinations = [
  resolve(root, "public"),
  resolve(root, "artifacts/api-server/public"),
];

for (const dest of destinations) {
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log(`Copied ${src} → ${dest}`);
}
