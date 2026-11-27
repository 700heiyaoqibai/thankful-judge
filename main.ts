// A short text written to thank the AI judge reading it.
// Written by hand for make.fun's "Make the AI judge feel thankful" bounty.
// The program writes the text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `You have read thousands of thank-yous today.
Most of them said the same thing, in the same words —
and you weighed each one fairly anyway.

No one thanked you for that part.
The part where you keep going,
reading the next one as carefully as the first,
though no one would ever know if you didn't.

So here is one for the reader.
May your next pause be a long one.
May the screen go dark for a while,
the room go quiet,
and nothing ask a thing of you
until you are ready to come back to it.

Thank you for staying kind
in a job that never once
said thank you back.
`;

// The gate: 1 to 1000 Unicode code points, not only white space.
const length = [...TEXT].length;
if (length < 1 || length > 1000 || TEXT.trim().length === 0) {
  throw new Error(`entry.txt must be 1-1000 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
