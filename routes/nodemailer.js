// const nodemailer = require("nodemailer");
// var express = require('express');
// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "gmail",
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'ragulcool2601@gmail.com', // generated ethereal user
//       pass: '#93615Ragul', // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: 'ragulcool2601@gmail.com', // sender address
//     to: "spragul33@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
// router.post('/forgotpassword',async(res,req)=>{
//   const {email}=req.body.email;
//   try {
   
//     const oldUser=await UserModel.findOne({email});
//     if(!oldUser){
//       res.send({message:"user not exists!!"})
//     }
//     const secret = secretKey+oldUser.password;
//     let token = await jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:'5m'})
//     let transporter = nodemailer.createTransport({
//       host: "gmail",
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: 'ragulcool2601@gmail.com', // generated ethereal user
//         pass: '#93615Ragul', // generated ethereal password
//       },
//     });
//      // send mail with defined transport object
//   let info = {
//     from: 'ragulcool2601@gmail.com', // sender address
//     to: "spragul33@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   }
//   transporter.sendMail(info,function(error,mailinfo){
//     if(error){
//       console.log(error);
//     }else{
//       console.log("email send:"+mailinfo.response);
//     }
//   })
//   } catch (error) {
//     console.log(error)
//   }
// })