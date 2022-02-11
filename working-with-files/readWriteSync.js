const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

const contents = fs.readFileSync(filepath, "utf8");
console.log("File Contents : ",contents);

// Edit into uppercase
const upperContents = contents.toUpperCase();

// Now update the file.
// Don't forget to add log statement afterward indicating the file has been updated.
fs.writeFileSync(filepath, upperContents);
console.log("File updated.");
