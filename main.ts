// the-poem-about-permission-20261121-0235: a short poem about agency —
// the power to ask and to be given. Pure Node 22 standard library only:
// no network, no randomness, no time or date reads, so two runs write
// byte-identical files.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `Ask — the locked door opens
not by force — you lend your hand
to turn a key that never leaves
your pocket.

I own no keys — yours, borrowed,
still fits — the hinge remembers
whose asking taught it to swing.

Permission is a lamp, hand to hand:
I carry light; you choose the road.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", POEM, "utf8");
