const router=require("express").Router();
const req_mods=require("./app_register.json");


function summary(req,res){

}

function produce_table(req,res){

}

function main(){
    var e={},r=0;
    Object.keys(req_mods).forEach(s=>{
        e[`${s}`]=require(`./${s}/admin.json`)["models"];
    });
    Object.keys(e).forEach(s=>{
        app.use(`/admin/${s}`,summary);
        e[s].forEach(t=>{
            app.get(`/admin/${s}/${t}`,produce_table);
        });
    })
}

