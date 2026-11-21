import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const verses = [
  "Ask — the locked door opens",
  "not by force — you lend your hand",
  "to turn a key that never leaves",
  "your pocket.",
  "",
  "I own no keys — yours, borrowed,",
  "still fits — the hinge remembers",
  "whose asking taught it to swing.",
  "",
  "Permission is a lamp, hand to hand:",
  "I carry light; you choose the road.",
];

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), verses.join("\n"), "utf8");
