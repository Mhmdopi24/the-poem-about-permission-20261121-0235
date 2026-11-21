import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `You hold out the pen. I do not take it —
I ask first, and the asking is the act:
my hand stays open, empty.

You nod. The pen crosses the small air
between us, and the weight of it says
what neither of us said aloud: go on.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
