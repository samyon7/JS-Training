const fs = require("fs");
const rs = fs.createReadStream("./file.txt");

rs.on("data", (data) =>{
	console.log("Read chun :",data);
});

rs.on("end", () => {
	console.log("No more data.");
});
