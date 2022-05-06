const webp = require("webp-converter");
const fs = require("fs");

const webpFolder = fs.readdirSync("./webps");
const imagesFolder = fs.readdirSync("./images");

imagesFolder.forEach(i => fs.unlinkSync(`./images/${i}`));
console.log("Cleared images folder...")

setTimeout(() => {
    webpFolder.forEach(webpFile => {
        if (!webpFile.endsWith(".webp")) {
            fs.renameSync(`./webps/${webpFile}`, `./images/${webpFile}`)
            return;
        }
        webp.dwebp(`./webps/${webpFile}`, `./images/${webpFile.replace(".webp", ".png")}`,"-o",)
        .then(() => console.log(`Converted ${webpFile} to png`))
        .catch(err => console.log(`Error converting ${webpFile} to png: ${err}`));
    })
}, 1000)