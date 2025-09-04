// const http = require("http");
// const fs = require("fs");

// const port = 1997;

// const server = http.createServer((req, res) => {
//     if (req.url === "/about") {
//         fs.readFile("./jubii.js", "utf8", (error, data) => {
//             if (error) {
//                 res.writeHead(500, { "Content-Type": "text/plain" });
//                 res.end("Error reading the file");
//             } else {
//                 res.writeHead(200, {"content-type":"text/plain"});
//                 res.end(data); 
//             }
//         });
//     } else if (req.url === "/main") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("main page");
//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("vooooo");
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// const { error } = require('console')
const fs=require('fs')

// fs.readFile('./jubii.js','utf8',(error,data)=>{
//     if(error){
//         console.log('erroorrrrr')
//     }else{
//         console.log(data,)
//     }
// })


    // fs.unlink('./folder10',(error)=>{
    //     if(error){
    //         console.log(";erroror",error)
    //     }else{
    //         console.log('data')
    //     }
    // })


    // removing the 10 folders

    for(i=1;i<=10;i++){

        fs.rm(`folder${i}`,{ recursive: true, force: true },(error)=>{
            if(error){
                console.log(";erroror",error)
            }else{
                console.log('data')
            }
        })
    }





