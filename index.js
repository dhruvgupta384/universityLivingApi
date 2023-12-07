const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors());
// const apiData=require('./propertyData.json')

mongoose.connect('mongodb+srv://dhruvGupta:1234@cluster0.ij2fd.mongodb.net/chapterkings').then((db)=>{
    console.log("Connected")
})
.catch((err)=>{
    console.error("Not Connected",err)
})

const Propertyschema=new mongoose.Schema({
    unit:String,
    rent:String,
    deposit:String,
    aminities:String,
    i:String,
    space:Object,
    propertyName:String,
    suiteName:String,
    perWeekPrice:String
}, { collection: 'propertyData' })

const propData=mongoose.model('Property',Propertyschema)
const port=process.env.PORT||3002

app.get('/',async (req,res)=>{
    const data=await propData.find({});
    // console.log(data)
    res.send(data)
})

app.listen(port,()=>{
    console.log("I am Live again")
})