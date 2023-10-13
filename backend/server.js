const express=require('express')
const app= express()
const mongoose=require('mongoose')
const cors=require('cors')
const multer=require('multer')
const route=require('./routes/route')

app.use(cors())
app.listen(3800,()=>{
    mongoose.connect('mongodb+srv://DOANPHANMEMTH:DOANPHANMEMTH@cluster0.lxlha7v.mongodb.net/dapmth').then(()=> console.log('Connected to Mongo Successfully'))
    .catch(error=>handleError(error));
})
