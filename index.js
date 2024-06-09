const express = require('express')
const app = express()
const fs=require('fs');
try{
    app.get('/',(req,res)=>{
    let datetime = new Date()
    fs.writeFileSync('datetime.txt', datetime.toString())
    let data= fs.readFileSync('datetime.txt','utf-8')
    res.send(data)})
app.listen(8000)
}catch(err)
{ console.log(err)}

   

