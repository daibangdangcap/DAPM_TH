var khachHangModel=require('../models/khachHangModel')
var khachHangVertificationSchema=require('../models/khachHangVertificationModel')


//
const nodemailer=require('nodemailer')
const bcrypt=require('bcrypt')
const {v4:uuidv4}=require('uuid')
require('dotenv/config')


var dangNhap=async (req)=>{
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'FiletOFish@gmail.com',
            pass:'FiletOFish'
        }
    })
    let message={
        from:''
    }
    transporter.sendMail()
}

module.exports={dangNhap}