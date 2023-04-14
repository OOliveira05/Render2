const express = require('express')
//import express from express
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
app.use(cors())

app.get('/', (req,res)=>{
    res.send('Ola Mundo!')
})

app.listen(port,()=>{
    console.log(`Example app listening on ${port}`)
})