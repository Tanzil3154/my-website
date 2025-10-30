import fs from "node:fs";
import path from "node:path";
import pdfParse from "pdf-parse";

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error("Usage: node tools/extract-resume.mjs <path-to-pdf>");
    process.exit(1);
  }
  const filePath = path.resolve(arg);
  const data = fs.readFileSync(filePath);
  const res = await pdfParse(data);
  // Print raw text for manual review
  console.log("--- PDF TEXT START ---");
  console.log(res.text);
  console.log("--- PDF TEXT END ---");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
