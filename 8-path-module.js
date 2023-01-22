const path = require("path");

console.log("seperator", path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log("filePath", filePath);

const base = path.basename(filePath);
console.log("base", base);

const absolute = path.resolve("content", "subfolder", "test.txt");
console.log("absolute", absolute);
