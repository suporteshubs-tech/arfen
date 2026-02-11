import { execSync } from "child_process";

try {
  console.log("[v0] Generating new pnpm-lock.yaml...");
  execSync("pnpm install --no-frozen-lockfile", {
    cwd: "/vercel/share/v0-project",
    stdio: "inherit",
  });
  console.log("[v0] Lockfile generated successfully!");
} catch (err) {
  console.error("[v0] pnpm install failed, trying with --force...");
  try {
    execSync("pnpm install --no-frozen-lockfile --force", {
      cwd: "/vercel/share/v0-project",
      stdio: "inherit",
    });
    console.log("[v0] Lockfile generated with --force!");
  } catch (err2) {
    console.error("[v0] Failed:", err2.message);
  }
}
