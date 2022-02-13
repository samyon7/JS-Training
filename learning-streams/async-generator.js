const { Readable } = require("stream");

async function* generate(){
	yield "Nodejs";
	yield "is";
	yield "a";
	yield "JavaScript";
	yield "Runtime";
}

const readable = Readable.from(generate());

readable.on("data",(chunk) => {
	console.log(chunk);
});
