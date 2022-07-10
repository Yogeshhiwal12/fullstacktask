const express=require('express');
const bodyParser=require("body-parser");
const app =express();
const url=require("url");
let sql;
const cors = require('cors');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./details.db',sqlite.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err);
});
app.use(bodyParser.json());
app.use(cors());
 /*sql= `CREATE TABLE yogesh(ID INTEGER PRIMARY KEY,name,department,email,mobile,address)`;
db.run(sql);*/

app.post("/view",(req,res)=>{
    try{
        const {name, department, email, mobile, address}=req.body;
        sql="INSERT INTO yogesh(name,department,email,mobile,address) VALUES(?,?,?,?,?)";
        db.run(sql,[name,department,email,mobile,address],(err)=>{
           if(err) return res.json({
                status:300, success:false,error:err
            });
            console.log("successfull.input",name,department,email,mobile,address);
        });
        
        res.json({
            status:200,
            success:true,
        });
    }catch(error){
        return res.json({
            status:400,
            success:false,
        });
    }
});

//get req
app.get('/view',(req, res)=>{
    sql= `SELECT * FROM yogesh`;
    try{
        db.all(sql,[],(err,rows)=>{
            if(err) return res.json({
                status:300, success:false,error:err

            });
            return res.json({status:200,data:rows,success:true});
        })
    }catch(error){
        return res.json({
            status:400,
            success:false,
        });
    }
})
app.listen(5000);