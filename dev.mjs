import { spawn } from "node:child_process";

const env = {
  ...process.env,
  PORT: process.env.PORT ?? "8080",
  BASE_PATH: process.env.BASE_PATH ?? "/",
};

const child = spawn(
  "pnpm",
  ["--filter", "@workspace/linkedinflow", "run", "dev"],
  {
    stdio: "inherit",
    env,
    shell: process.platform === "win32",
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});