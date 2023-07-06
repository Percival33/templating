const fs = require("fs");
const Mustache = require("mustache");

const render = (file) => {
  try {
    // load data from json
    const template = fs.readFileSync("template.mustache", "utf8");
    const data = JSON.parse(fs.readFileSync(`./data/${file}.json`, "utf8"));
    // console.log(template);

    const content = Mustache.render(template, data);

    // console.log(content);
    if (!fs.existsSync("./output")) {
      fs.mkdirSync("./output");
    }
    fs.writeFileSync(`./output/${data.model}Model.js`, content);
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "render") {
  render(process.argv[3]);
  console.log("Rendered template!");
}

module.exports = render;
