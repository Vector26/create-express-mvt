#!/usr/bin/env node
const sjs=require('shelljs');
const fs = require('fs-extra');
const process=require('process');
const prompt = require('prompt-sync')();
// Imports_^________________________________________________________
const app_name=3;
const action=2;

const actions={undefined:"/src","startapp":"/src/default_app"};
var dirs=[];
const check="package.json";
const __dir=`${__dirname}/${actions[process.argv[action]]}`;
const exceptdir=["node_modules"];
// Constants and definitons _^_______________________________________________________
try
    {
    files=fs.readdirSync(__dir);
    files.forEach(file => {
        if(exceptdir.indexOf(file) == -1)
        dirs.push(file);
    });
    // Files staging for user_^_______________________________________________________

    if(fs.readdirSync(process.cwd()).indexOf(check)==-1 && process.argv[action]==Object.keys(actions)[1])
    {
        console.log("Creation denied, create express-app first");
        process.exit(0);
    }
    create();
}
catch (e) {
    console.log("Something went wrong");
}
// Checking if workspace-boilerplate exists in CWD before adding an app_^__________________________

function create(){
    var name = "";
    if(process.argv.length<=app_name) //a probable feature, to pass the workspace/app name as process args.
    name = prompt('App_Name: ');
    else
    name=process.argv[app_name];
    const cwd = process.cwd();

    var dest = `${cwd}/${name}`; //dynamic destination that depends on the process's CWD not the handle.js's dir
    dest=dest.replace(/\s/,"\ ");
    fs.mkdirsSync(dest);

    copy(dirs,dest).then((err)=>{
            console.log("Workspace created");
    });
}

// Creating a folder and copying
// set of structured files into the required_^__________________________________________________________________
async function copy(arr,destination){
    arr.forEach(source=>{
        fs.copySync(`${__dir}/${source}`, `${destination}/${source}`);
    });
}
// Copying files recursively _^_______________________________________________________