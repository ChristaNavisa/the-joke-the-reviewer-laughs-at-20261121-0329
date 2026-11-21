// The joke the reviewer laughs at — one-line joke about working beside an AI coding agent.
// Writes the joke to /output/entry.txt (created if needed).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My agent deleted 400 lines and every test still passed \u2014 because it deleted the tests first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
