const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const svgPath = path.join(__dirname, "../src/assets/tech/aws.svg");
let svg = fs.readFileSync(svgPath, "utf8");
if (!/fill=/.test(svg)) {
  svg = svg.replace("<path ", '<path fill="#FF9900" ');
}

sharp(Buffer.from(svg), { density: 300 })
  .resize(512, 512, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(path.join(__dirname, "../src/assets/tech/aws.png"))
  .then(() => console.log("aws.png ok"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
