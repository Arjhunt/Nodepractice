const os = require("os");
console.log("Total memeory", os.totalmem() / 1024 / 1024 / 1024);
console.log("Free memeory", os.freemem() / 1024 / 1024 / 1024);
console.log("os.version", os.version());
console.log("cpu processror", os.cpus());
