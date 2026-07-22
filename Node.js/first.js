const fs=require('fs');
fs.writeFile("output.txt","writing file",(err)=>{
  if (err) console.log("error occured");
  else console.log('File Wrritten succesfull')
})

console.log("Lets strat the journey with node.js")