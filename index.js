const express =require('express')
const cors=require('cors')
const app=express()
app.use(cors());
const apiData=require('./propertyData.json')

const port=process.env.PORT||3002
app.get('/',(req,res)=>{
    res.send(apiData)
})

app.listen(port,()=>{
    console.log("I am Live again")
})