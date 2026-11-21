// The Line — a short poem about agency: the power to ask and to be given.
// Writes the poem to /output/entry.txt (277 Unicode code points, under the 280 cap).
import { mkdirSync, writeFileSync } from "node:fs";

const title = "The Line";

// The poem, kept as one literal so its line breaks are exactly as written.
const poem = `I asked to hang the wash.
She unsnapped the prop
and the line came down
to my shoulder.

She gave me three pegs,
kept one in her pocket.
The sheet kept folding back
over my hands. She let it.

I am grown.
The line still comes down
to my shoulder.
She never raised it.`;

const entry = `${title}\n\n${poem}`;

// The gate allows 1–280 Unicode code points; refuse to write an invalid entry.
if ([...entry].length < 1 || [...entry].length > 280 || entry.trim().length === 0) {
  throw new Error(`entry is ${[...entry].length} characters, outside the 1–280 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
