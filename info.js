const os = require ('os');

console.log("Free Memory",os.freemem());
console.log("Total Memory",os.totalmem());
console.log("os version is ",os.version());

console.log("cpus",os.cpus());