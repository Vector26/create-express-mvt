#!/usr/bin/env node
const sjs=require('shelljs');
const fs = require('fs-extra');
const process=require('process');
const prompt = require('prompt-sync')();
// Imports
const app_name=3;
const action=2;
const actions={undefined:"\\src","startapp":"\\src\\app1"};
var dirs=[];
const check="package.json";
const __dir=`${__dirname}\\${actions[process.argv[action]]}`;
const exceptdir=["node_modules"];
// Constants and definitons
files=fs.readdirSync(__dir);
files.forEach(file => {
    if(exceptdir.indexOf(file) == -1)
    dirs.push(file);
});
if(fs.readdirSync(process.cwd()).indexOf(check)==-1 && process.argv[action]==Object.keys(actions)[1])
{
    console.log("Creation denied, create express-app first");
    process.exit(0);
}
function create(){
    var name = "";
    if(process.argv.length<=app_name)
    name = prompt('App_Name: ');
    else
    name=process.argv[app_name];
    const cwd = process.cwd();

    var dest = `${cwd}\\${name}`;
    dest=dest.replace(/\s/,"\ ");
    fs.mkdirsSync(dest);

    copy(dirs,dest).then((err)=>{
            console.log("Workspace created");
    });
}
async function copy(arr,destination){
    arr.forEach(source=>{
        fs.copySync(`${__dir}\\${source}`, `${destination}\\${source}`);
    });
}

create();