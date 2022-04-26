const express=require('express')
require('dotenv').config()
const app=express()
const port=process.env.PORT
app.use(express.json())
const reporterRoute=require('../src/routers/reporters')
const articleRoute=require('../src/routers/articles')
require('./database/mongoose')
app.use(reporterRoute)
app.use(articleRoute)

app.listen(port,()=>{console.log("listening to the port" + port)})