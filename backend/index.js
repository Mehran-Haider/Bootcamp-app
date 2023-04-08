var tech = require("express");
const mongoose = require("mongoose");
const model1 = require("./model");
const bodyParser = require('body-parser');
const cors =require("cors");

var app = tech();
const PORT = 4000;

app.listen(PORT, () => {
  console.log("Port is connected");
});
app.use(cors())

app.use(bodyParser.json());

//for creating api
app.get("/", async (req, res) => {
  let user = await model1.find({})
  res.send(user);
});

app.get("/:id", async (req, res) => {
  let user = await model1.findById(req.params.id)
  res.send(user);
});

// for delating   ///////




app.post("/",async (req, res)=>{
  // await model1.create(req.body)
  // res.send("added")
  var user = await model1(req.body);
  user.save()
  .then((a)=>{
    res.send("task done")
  })
});
app.delete("/:id", async(req,res)=>{
  await model1.findByIdAndDelete(req.params.id)
  res.send("deleted")
})
app.put("/:id" , async(req,res)=>{
  const data=await model1.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
  res.send(data)
})

mongoose.set('strictQuery', true);
//mongoose connect
mongoose.connect("mongodb://127.0.0.1:27017/Userdata", { useNewUrlParser: true });
//check mongoose is connect
mongoose.connection.once("open", () => {
  console.log("mongoose connected");
});

 
