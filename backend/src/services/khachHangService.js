var khachHangModel=require('../models/khachHangModel')
var khachHangVertificationSchema=require('../models/khachHangVertificationModel')

//
const nodemailer=require('nodemailer')
const bcrypt=require('bcrypt')
const {v4:uuidv4}=require('uuid')
const Mailgen = require('mailgen')
require('dotenv').config()

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'filetohfish2003@gmail.com',
        pass:'adlw mhvi rmbo wpar'
    }
})


transporter.verify((error,success)=>{
    if(error) console.log(error)
    else{
        console.log("Success")
    }
})
var dangKy=async (req)=>{
    try{
        var user=new khachHangModel({
            hoTen:req.body.hoTen,
            email:req.body.email,
            sdt:req.body.sdt,
            matKhau:req.body.matKhau,
            verified:false
        })
        const salt=await bcrypt.genSalt(10)
        const hashPass=await bcrypt.hash(user.matKhau,salt)
        user.matKhau=hashPass
        await user.save()
        var mailOption={
            from:' "verify your email" <filetohfish2003@gmail.com>',
            to:user.email,
            subject:'Filet O Fish - verify your email',
            html: `<h2>Hi ${user.hoTen}! Thanks for your registering on our site</h2>
                    <h4>Please verify your mail to continue...</h4>
                    <a href="http://${req.headers.host}/khachhang/verify-email?token=${user.email}">Verify your email</a>
            `
        }

        transporter.sendMail(mailOption,function(error,info){
            if(error) console.log(error)
            else{
                console.log("verification your email successful!")
            }
        })
        return user
    }catch(error)
    {
        console.log(error)
    }
}

var getVerify=async(req,res)=>{
    const email=req.query.token
    const user=await khachHangModel.findOne({email:email})
    if(user)
    {
        user.verified=true
        await user.save()
    }
}


module.exports={dangKy,getVerify}