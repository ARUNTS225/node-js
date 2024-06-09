const express = require('express')
const app = express()
const fs=require('fs');
const PORT = process.env.PORT || 8000
try{
    app.get('/',(req,res)=>{
    let datetime = new Date()
    fs.writeFileSync('datetime.txt', datetime.toString())
    let data= fs.readFileSync('datetime.txt','utf-8')
    res.send(data + '<h1>created by Arun</h1>')})
app.listen(PORT)
}catch(err)
{ console.log(err)}

   

