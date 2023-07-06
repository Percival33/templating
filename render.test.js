const fs = require("fs");
const Mustache = require("mustache");
const render = require("./render");

const mockTemplate = fs.readFileSync("template.mustache");

jest.mock("fs");
jest.mock("Mustache");

describe("render.js tests", () => {
  it("should correctly render template", () => {
    const mockData = {
      imports: [],
      name: "dummy",
      Name: "dummy",
      model: "dummy",
    };

    fs.readFileSync.mockImplementation((path) => {
      if (path === "template.mustache") {
        return mockTemplate;
      } else {
        return JSON.stringify(mockData);
      }
    });

    fs.existsSync.mockReturnValue(true);

    Mustache.render.mockReturnValue(
      "const mongoose = require('mongoose');\n\n\nconst dummySchema = new mongoose.Schema(\n  {\n  }\n);\nconst dummy = mongoose.model('dummy', dummySchema);\nmodule.exports = dummy;\n"
    );

    render("dummy");

    // Verify that the methods were called with the correct arguments
    expect(fs.readFileSync).toHaveBeenCalledWith("template.mustache", "utf8");
    expect(fs.readFileSync).toHaveBeenCalledWith("./data/dummy.json", "utf8");
    expect(Mustache.render).toHaveBeenCalledWith(mockTemplate, mockData);
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "./output/dummyModel.js",
      "const mongoose = require('mongoose');\n\n\nconst dummySchema = new mongoose.Schema(\n  {\n  }\n);\nconst dummy = mongoose.model('dummy', dummySchema);\nmodule.exports = dummy;\n"
    );
  });

  it("should create output directory if it does not exist", () => {
    fs.existsSync.mockReturnValue(false);

    render("dummy");

    // Verify that fs.mkdirSync was called
    expect(fs.mkdirSync).toHaveBeenCalledWith("./output");
  });
});
