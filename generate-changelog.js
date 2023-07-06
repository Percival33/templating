var Changelog = require("generate-changelog");
var Fs = require("fs");

return Changelog.generate({
  patch: true,
  repoUrl: "https://github.com/Percival33/templating",
}).then(function (changelog) {
  Fs.writeFileSync("./CHANGELOG.md", changelog);
});
