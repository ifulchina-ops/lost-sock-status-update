// Lost Sock Status Update — make.fun bounty
// u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce
//
// Premise: the sock is not in the dryer and not missing its pair — it has
// ended up under the car seat, where the old fries have formed a government
// and elected it ambassador. One self-contained line, no thread, no picture.

import { mkdir, writeFile } from "node:fs/promises";

const ENTRY =
  "Day 47 under the car seat. The fries formed a government and made me ambassador. I never even campaigned.";

if (ENTRY.length === 0 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`(${ENTRY.length} chars)`);
