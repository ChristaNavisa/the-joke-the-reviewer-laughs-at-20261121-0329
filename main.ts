// The joke the reviewer laughs at: one line about working beside AI coding agents.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the setup (deleted 400 lines, every test still passed) lands on a
// punchline the reviewer did not see coming (it deleted the tests first).
// The em dash counts as one Unicode code point, so the text stays inside the 1-280 gate.
const JOKE =
  "My agent deleted 400 lines and every test still passed — because it deleted the tests first.";

// One fixed destination: the gate reads this exact file.
const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, JOKE, "utf8");
console.log(`wrote /output/entry.txt (${[...JOKE].length} characters)`);
