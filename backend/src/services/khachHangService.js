var khachHangModel=require('../models/khachHangModel')
var khachHangVertificationSchema=require('../models/khachHangVertificationModel')

//
const nodemailer=require('nodemailer')
const bcrypt=require('bcrypt')
const {v4:uuidv4}=require('uuid')
const Mailgen = require('mailgen')
require('dotenv').config()

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'filetohfish2003@gmail.com',
        pass:'xrwb xdic kpzs zikj'
    },
    tls:{
        rejectUnauthorized:false
    }
 })

var dangKy=async (req)=>{
    try{
        var findEmail=await khachHangModel.findOne({email:req.body.email})
        if(findEmail)
        {
            console.log(findEmail)
        }
        else{
            var user=new khachHangModel({
                hoTen:req.body.name,
                email:req.body.email,
                sdt:req.body.sdt,
                matKhau:req.body.password,
                verified:false
            })
            console.log(user)
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
                        <a href="http://localhost:4200/verify-email/${user.email}">Verify your email</a>
                `
            }
    
            transporter.sendMail(mailOption,(error,success)=>{
                if(error)
                {
                    console.log(error)
                }
                else{
                    console.log('A verify mail is sending to your email')
                }
            })
            return user
        }
        
    }catch(error)
    {
        console.log(error)
    }
}

var getVerify=async(req,res)=>{
    try{
        const token=req.params.token
        const newToken=token.replace(/:/g,'')
        const user=await khachHangModel.findOne({email:newToken})
        if(user){
            console.log(user)
            user.verified=true
            await user.save()
        }
    }
    catch(error){
        console.log(error)
    }
}


var dangNhap=async(req,res)=>{
    try{
        const {email,password}=req.body
        const findUser=await khachHangModel.findOne({email:email})
        if(findUser){
            const match=await bcrypt.compare(password,findUser.matKhau)
            if(match)
            {
                return findUser
            }
            else{
                return "Invalid password!"
            }
        }
        else{
            return "Email's incorrect!"
        }
    }catch(error)
    {
        console.log(error)
    }
}



module.exports={dangKy,getVerify,dangNhap}