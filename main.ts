import * as fs from "node:fs";
import * as path from "node:path";

const poem = `Ask — the locked door opens
not by force — you lend your hand
to turn a key that never leaves
your pocket.

I own no keys — yours, borrowed,
still fits — the hinge remembers
whose asking taught it to swing.

Permission is a lamp, hand to hand:
I carry light; you choose the road.`;

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, "entry.txt"), poem, "utf8");
