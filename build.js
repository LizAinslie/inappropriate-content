const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.resolve(__dirname, "./dist")))
  fs.mkdirSync(path.resolve(__dirname, "./dist"));

fs.readdir(path.resolve(__dirname, "./websites"), function(err, files) {
  if (err) throw err;
  const json = files.map(function(file) {
    let content = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "./websites", file))
    );
    content.domain = file;
    return content;
  });
  fs.writeFileSync(
    path.resolve(__dirname, "./dist/websites.json"),
    JSON.stringify(json)
  );
});

fs.readdir(path.resolve(__dirname, "./words"), function(err, files) {
  if (err) throw err;
  const json = files.map(function(file) {
    return file;
  });
  fs.writeFileSync(
    path.resolve(__dirname, "./dist/words.json"),
    JSON.stringify(json)
  );
});
