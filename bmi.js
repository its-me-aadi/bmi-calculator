const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/bmi.html");
})
app.post("/",function(req,res){
    var height=req.body.height;
    var Weight=req.body.weight;
    var bmi=Weight/(height*height);
    res.send("bmi = "+ bmi)

})
app.listen(3000,function(){
    console.log("server started at 3000");
})