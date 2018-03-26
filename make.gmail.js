const emailMultiplexer = require ('email-multiplexer');
const fs  = require("fs");
 
const emailVariants = emailMultiplexer('dinmobilwebapprel@gmail.com');
 
fs.writeFile("./data/gmail.txt",emailVariants.join("\n"),(err,done)=>{
    console.log(done);
});
 