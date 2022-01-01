const express = require('express');
const app = express.Router();

module.exports = class Admin{
    constructor(conn){
        this.conn=conn;
        this.app=app;
        this.createRoutes();
    }

    getRouter(){
        return this.app;
    }

    createRoutes(){
            // console.log(Object.keys(data.models));    
            // console.log(this.conn.models);
            var list=Object.keys(this.conn.models);

            app.get("/", (req, res) => {
                res.json(list);
            });

            var MODEL_List=[];
            list.map((e)=>{
                var MODEL=this.conn.model(e);
                MODEL_List.push(MODEL);
                this.createRoute(MODEL,e);
            });
            
    }
    createRoute(MODEL,model_name){
        this.CREATE(MODEL,model_name);
        this.READ(MODEL,model_name);
        this.UPDATE(MODEL,model_name);
        this.DELETE(MODEL,model_name);
    }

    CREATE(MODEL,model_name){
        this.app.post(`/${model_name}`, (req, res) => {
            var data=req.body;
            // res.json(data);
                MODEL.validate(data)
                .then(() => {
                    console.log('OK!', data);
                    MODEL.create(data,function(err,item){
                        if(err){
                            console.log(err);
                            res.status(400).json({ message: 'Error' });
                        }
                        else{
                        res.json(item);
                        }
                });
                })
                .catch( err => {
                    console.error('FAILED:',err)
                    res.json("Wrong Schema, This will be reported");
                });
        });
    }

    getSchema(MODEL){
        var data=MODEL.schema.paths;
        var actualSchema={};
        const infoKey="instance"
        Object.keys(data).map((e)=>{
            actualSchema[e]=data[e][infoKey];
        });
        return actualSchema;
    }

    READ(MODEL,model_name){
        this.app.get(`/${model_name}`, (req, res) => {
            var schema=this.getSchema(MODEL);
            MODEL.find({},function(err,item){
                if(err){
                    console.log(err);
                }
                else{
                res.json({"schema":schema,"list":item});
                }
            });
        });
        this.app.get(`/${model_name}/:id`, (req, res) => {
            MODEL.find({_id:req.params.id},function(err,item){
                if(err){
                    console.log(err);
                }
                else{
                res.json(item);
                }
            });
        });
    }
    
    UPDATE(MODEL,model_name){
        this.app.post(`/${model_name}/:id`, (req, res) => {
            var data=req.body;
            // res.json(data);
            var id=req.params.id;
                MODEL.validate(data)
                .then(() => {
                    console.log('OK!', data);
                    MODEL.updateOne({_id:id},data,function(err,item){
                        if(err){
                            console.log(err);
                            res.status(400).json({ message: 'Error' });
                        }
                        else{
                        res.status(200).json(item);
                        }
                });
                })
                .catch( err => {
                    console.error('FAILED:',err)
                    res.json("Wrong Schema, This will be reported");
                });
        });
    }

    DELETE(MODEL,model_name){
        this.app.delete(`/${model_name}`, (req, res) => {
            var data=req.body.list;
            MODEL.deleteMany({_id: { $in: data}},function(err,item){
                if(err){
                    console.log(err);
                }
                else{
                res.json(item);
                }
            });
        });
    }

}

// export default Admin;