const mongoose=require('mongoose');

const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    }
})

const mongo_Form=mongoose.model("formSchema",formSchema)
module.exports=mongo_Form;