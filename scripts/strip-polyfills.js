/**
 * Strip Next.js built-in polyfills for modern browsers.
 *
 * Next.js unconditionally bundles polyfill-module.js which includes
 * Array.prototype.at, .flat, .flatMap, Object.fromEntries, Object.hasOwn,
 * String.prototype.trimEnd/trimStart — all natively supported in our
 * browserslist targets (Chrome 119+, Safari 17.2+).
 *
 * This script runs as a postinstall hook to replace the polyfill with a no-op,
 * saving ~14 KiB from the client JS bundle.
 */
const fs = require("fs");
const path = require("path");

const polyfillPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "next",
  "dist",
  "build",
  "polyfills",
  "polyfill-module.js"
);

if (fs.existsSync(polyfillPath)) {
  fs.writeFileSync(polyfillPath, "/* polyfills stripped for modern browsers */");
  console.log("Stripped Next.js module polyfills for modern browsers");
} else {
  console.log("polyfill-module.js not found, skipping");
}
