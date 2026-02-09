const express=require("express");//this is also used to importing purpose
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();//create express application for app

app.use(cors());
app.use(express.json());

//db connection 
mongoose.connect("mongodb://localhost:27017/vcetstudents")// object name vcetstudents
  .then(() => console.log("MongoDB Connected"))//then is similar to try 
  .catch(err=> console.log(err))//it shows the error
    const Studentschema=new mongoose.Schema({
    name: String,
    course: String
  });

  const Student=mongoose.model("Student",Studentschema);//changing data into model to train
   //create
   app.post("/add",async(req,res)=>{
    const student=new Student(req.body);
    await student.save();
    res.send("Students Added");
  });
  //read
  app.get("/students",async(req,res)=>{
    const data=await Student.find();
    res.json(data);
  });
  //delete
  app.delete("/delete/:id",async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);// it find id and delete it
    res.send("student deleted");
  });
  //server start
   app.listen(5000,()=>{
    console.log("backend is running on port 5000")
 });
