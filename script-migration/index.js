const program = require("commander");
const fs = require("fs-extra");
const path = require("path");
const directory =
  "C:/ProgramData/Razer/" +
  "Razer Central" +
  "/Accounts/RZR_0280070540119463a0a7bff12753/Emily3/Devices/122/Profiles";

program.version("0.0.1").option("-i, --info", "Add more info");
program
  .command("search [argument]")
  .description("this is the command to find file folder ...")
  .option("-b, --big")
  .option("-s, --small")
  .action(function (searchpath, options) {
    if (options.big) {
      console.log(searchpath + " path exist  " + options.big);
      let filename = "",
          size = 0;
      fs.readdir(searchpath, (err, files) => {
        if (err) {
          console.log("could not load directory", err);
          process.exit(1);
        }
        console.log('xxx ', files);
        readFiles(searchpath)
        files.forEach(function (file, index) {
          //Get directory path
          var directoryPath = path.join(searchpath, file);
          // console.log("xxxxx " + directoryPath) 
          // var fizeSize = getFileSizeInBytes(fromPath);
          // if (fizeSize > size) {
          //   size = fizeSize;
          //   filename = file;
          // }
        });
        // console.log("Biggest file is " + filename + " " + size + " bytes");
      });
    }
    if (options.small) {
      console.log(searchpath + "   " + options.small);
      console.log("script demo " + searchpath);
    }
  });

/**
* read files
* @param dirname string
* @return Promise
* @author Chi Vo (vothanhchi179 at gmail dot com)
* @see http://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
*/
function readFiles(dirname) {
  return new Promise((resolve, reject) => {
      fs.readdir(dirname, function(err, filenames) {
          if (err) return reject(err);
          promiseAllP(filenames,
          (filename,index,resolve,reject) =>  {
              fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
                  if (err) return reject(err);
                  return resolve({filename: filename, contents: content});
              });
          })
          .then(results => {
            console.log(results);
              return resolve(results);
          })
          .catch(error => {
              return reject(error);
          });
      });
});
};

/**
 * Promise all
 * @author Chi Vo (vothanhchi179 at gmail dot com)
 */
function promiseAllP(items, block) {
  var promises = [];
  items.forEach(function(item,index) {
      promises.push( function(item,i) {
          return new Promise(function(resolve, reject) {
              return block.apply(this,[item,index,resolve,reject]);
          });
      }(item,index))
  });
  return Promise.all(promises);
};

function readFileContent(directoryPath) {
  fs.readFile(directoryPath, function read(err, data){
    if (err) {
      throw err;
    }
    const content = data
    console.log("xxxxx " + content)
  });
}
function getFileSizeInBytes(filename) {
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
}
// var getXMLFile = function(path, callback) {
//   console.log(path)
//   xhr.open('GET', path);
//   xhr.setRequestHeader("Content-Type", "text/xml");
//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200){
//       callback(xhr.responseXML)
//     }
//   };
//   xhr.send(); 
// }
// getXMLFile(fromPath, function(xml){
// let parser = new DOMParser();
// let xmlDom = parser.parseFromString(xml, "application/xml");
// let datas = xmlDom.querySelectorAll("Devices");
// console.log("xxxx ", xmlDom);
// console.log("xxxx ", datas);
// });
process.argv[3] = directory;
console.log(process.argv);
program.parse(process.argv);
