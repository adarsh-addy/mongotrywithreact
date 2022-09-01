require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/userRoute')
const cors=require('cors')


const URL=process.env.MONGODB_URL

mongoose.connect(URL)
.then(()=>console.log("MONGODB connected"))
.catch((error)=>console.error(error))

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(cors());

app.use("/routes",router);

app.use("*",(req,res)=>{
    res.json({msg:"URL not found"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running ${PORT}`));