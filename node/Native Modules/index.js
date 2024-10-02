var fs = require("fs");

// fs.writeFile("message.txt","hello from priyanshu", (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
//   });

fs.readFile("./message.txt", 'utf8', (err,data) => {
  if (err) throw err;
  console.log(data);
}); 