const fs=require('fs');

// fs. readFile('./Node.js/output.txt','utf8',(err,data)=>{
//   console.log(err,data);
// })

// const a1=fs. readFileSync('./Node.js/output.txt','utf8');
// console.log(a1);

// console.log("Reading the file");

fs.writeFile('./Node.js/output1.txt','Hello, World! This is a test file.',()=>{
  console.log("File written successfully");
});
