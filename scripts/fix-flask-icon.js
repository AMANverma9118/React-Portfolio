const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "src/assets/tech/flask_si.svg");
let svg = fs.readFileSync(src, "utf8");
svg = svg
  .replace(/fill="#111111"/gi, 'fill="#e2e8f0"')
  .replace(/fill="#000000"/gi, 'fill="#e2e8f0"')
  .replace(/fill="black"/gi, 'fill="#e2e8f0"');

fs.writeFileSync(path.join(__dirname, "src/assets/tech/flask_light.svg"), svg);

sharp(Buffer.from(svg), { density: 300 })
  .resize(512, 512, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(path.join(__dirname, "src/assets/tech/flask.png"))
  .then(() => console.log("flask.png lightened ok"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
