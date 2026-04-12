import { cpSync, rmSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = resolve(root, "artifacts/linkedinflow/dist/public");
const dest = resolve(root, "_site");

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
console.log(`Copied build output to ${dest}`);
