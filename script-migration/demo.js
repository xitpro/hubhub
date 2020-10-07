const program = require("commander");
const fs = require("fs-extra");
const path = require("path");
const xml2js = require("xml2js");
const directory =
  "C:/ProgramData/Razer/" +
  "Razer Central" +
  "/Accounts/RZR_0280070540119463a0a7bff12753/Emily3/Devices/122/Profiles";
  var PID = 122;
const existDirectory = "C:/ProgramData/Razer/" +
                      "Razer Central" +
"/Accounts/RZR_0280070540119463a0a7bff12753/Emily3/Devices/" + `${PID}` + "/Profiles";

program.version("0.0.1").option("-i, --info", "Add more info");
program
  .command("search [argument]")
  .description("this is the command to find file folder ...")
  .option("-r, --read")
  .option("-s, --small")
  .action(function (searchpath, options) {
    if (options.read) {
      // console.log(searchpath + " path exist  " + options.read);
      fs.readdir(searchpath, (err, files) => {
        if (err) {
          console.log("could not load directory", err);
          process.exit(1);
        }
        console.log("files of array in directory : \n  ", files);
        readFiles(searchpath);
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
 * @see https://facebook.com/xitdev
 */
function readFiles(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function (err, filenames) {
      if (err) return reject(err);
      promiseAllP(filenames, (filename, index, resolve, reject) => {
        fs.readFile(path.resolve(dirname, filename), "utf-8", function (
          err,
          content
        ) {
          if (err) return reject(err);
          return resolve({ filename: filename, contents: content });
        });
      })
        .then((results) => {
          console.log("\n Lets start convert .............");
          convertData(results);
          return resolve(results);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  });
}
function convertData(results) {
  let profiles = [];
  results.forEach((item) => {
    // console.log('******** \n ' + item + "\n ******** \n" )
    // console.log("************** \n" + item.contents + "\n **************");
    xml2js.parseString(item.contents, { trim: true }, (err, result) => {
        if (err) {
          throw err;
        }
        //push object to array profiles
        let profile = {name: '', guid: ''};
        console.log(result.Profile.Name)
        profile.name = result.Profile.Name[0]
        profile.guid = result.Profile.ProfileId[0];
        JSON.parse(JSON.stringify(profile))
        profiles.push(profile);
        console.log('\n **** \n ' + profile.name + '  ' + profile.guid + '  new object')
        // `result` is a JavaScript object
        // convert it to a JSON string
        const json = JSON.stringify(result.Profile);
        // console.log("\n ************ json string ******* \n", json);
        // log JSON string, resolve json in next
        
      });
  });
  console.log(profiles)
  return profiles;
}
/**
 * Promise all
 * @author Chi Vo (vothanhchi179 at gmail dot com)
 */
function promiseAllP(items, block) {
  var promises = [];
  items.forEach(function (item, index) {
    promises.push(
      (function (item, i) {
        return new Promise(function (resolve, reject) {
          return block.apply(this, [item, index, resolve, reject]);
        });
      })(item, index)
    );
  });
  return Promise.all(promises);
}

process.argv[3] = existDirectory;
// console.log(process.argv);
program.parse(process.argv);
