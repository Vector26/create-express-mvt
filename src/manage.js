const fs = require('fs-extra')
const process=require('process');
const prompt = require('prompt-sync')();
const app_name=2;
const action=2;
const actions=["startapp"]
const __dir=__dirname+"\\app1";
const dirs=[];
const exceptdir=["node_modules"];
const dir=["app1"];
files=fs.readdirSync(__dir);
files.forEach(file => {
    // console.log(fc;eaile);
    if(exceptdir.indexOf(file) == -1)
    dirs.push(file);
});
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
    console.log("App created");
});  

async function copy(arr,destination){
    arr.forEach(source=>{
        fs.copySync(`${__dir}\\${source}`, `${destination}\\${source}`);
    });
}