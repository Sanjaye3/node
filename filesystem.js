// const fs= require("fs");
// const quote="all is well";
// fs.writeFile("./sampleee.html",quote,(err)=>{
//     console.log("completed writing sample.html");
// });
// const fs= require("fs");
// const quote="live more worry less";


// for(let i=0;i<10;i++) {

// fs.writeFile("backup/sample.html",quote,(err)=>{
// console.log("completed writing sample.html in backupfolder");
// });
// }

const fs= require("fs");
const quote="live more worry less-this is appended";

// writing the file
for(let i=0;i<10;i++) {

fs.writeFile(`./backup/sample-${i}.html`,quote,(err)=>{
console.log(`completed writing sample.html${i} in backupfolder`);
});

}


// appending the data
// fs.appendFile("./sampleee.html",quote,(err)=>{
//     console.log("completed appending");
// });

// reading the data
// fs.readFile("./sampleee.html","utf-8",(err,data)=>{
//     if(err){
//         console.log("reading not done")
//     }
//     console.log("the content is",data)
// })

