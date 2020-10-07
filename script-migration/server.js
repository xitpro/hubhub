const express = require('express');
const app = express();
const http = require('http');
const port = 3000;

app.set('view engine', 'jade');
app.set('views', './views');
const fs = require('fs-extra');
const path = require('path');
const directory =
  "C:\\ProgramData\\Razer\\Razer Central\\Accounts\\RZR_0280070540119463a0a7bff12753\\Emily3\\Devices\\113\\Profiles";

// let files = fs.readdirSync(directory)
// console.log(files)
// fs.readdir(directory)
//    .then((items) => {
//     return Promise.all(items.map((item) => {
//      const itemPath = path.join(directory, item);
//      return fs.stat(itemPath).then((stat) => {
//       if (stat.isDirectory()) {
//        console.log(itemPath)
//       }
//       return path.join(path.basename(directory), item);
//      });
//     }));
//    })
//    .then((paths) => {
//     console.log(paths)
//    })
// const server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     // res.write("Hello Guys ")
//     fs.readFile('index.html', function(err, data){
//         if( err ) {
//             res.writeHead(404)
//             res.write('Can not read file')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
    
// })

// server.listen(port, function(error){
//     if(error){
//         console.log(error)
//     } else {
//         console.log("Server is listening at port " + port)
//     }
// })

app.get('/', function(req, res){
    res.render('index', {title: 'Shop ACC'})                        
})
app.get('/user', function(req, res){
    res.send('USER List')
})
app.listen(port , function(){
    console.log("Server is listening at port " + port)
})