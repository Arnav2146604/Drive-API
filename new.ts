var ps = require("prompt-sync");
//const prompt=ps();

// import fs from "fs";
// import path from "path";
var fs=require("fs");
var path = require("path");


let command=ps("Enter the command  ");
let cmdarray=command.split(" ");


function pwd()
{
    console.log(process.cwd());
}

function ls(dir:string =".")
{
    fs.readdir(dir, (err, files) => {
            if (err) throw err;
            console.log(files.join("\n"));
          });
}


function cp(src:string , dest:string) {
  fs.copyFile(src, dest, (err) => {
    if (err) throw err;
    console.log(`${src} was copied to ${dest}`);
  });
};


function mv(src:string,dest:string) {
  fs.rename(src, dest, (err) => {
    if (err) throw err;
    console.log(`${src} was moved to ${dest}`);
  });
};


function mkdir(dir:string){
  fs.mkdir(dir, (err) => {
    if (err) throw err;
    console.log(`Directory "${dir}" created`);
  });
};


function rm(file:string) {
  fs.unlink(file, (err) => {
    if (err) throw err;
    console.log(`${file} was deleted`);
  });
};


switch (cmdarray[0]) {
  case "ls":
    ls(cmdarray[1]);
    break;
  case "cp":
    cp(cmdarray[1],cmdarray[2]);
    break;
  case "mv":
    mv(cmdarray[1],cmdarray[2]);
    break;
  case "mkdir":
    mkdir(cmdarray[1]);
    break;
  case "rm":
    rm(cmdarray[1]);
    break;
  case "pwd":
    pwd();
    break;
  default:
    console.log("Invalid command");
    break;
}