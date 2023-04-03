import nodemailer from 'nodemailer'
 import path from 'path';
export const mail=(otp,email,url)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'infocbs869@gmail.com',
          pass: 'nqckcnvulorsbezu'
        }
      });
    //   transporter.use('compile', hbs({
    //     viewEngine:'express-handlebars',
    //     viewPath:path.join(__dirname,'views')
    //   }));

      var mailOptions = {
        from: 'KITO',
        to: `${email}`,
        subject: 'Password reset',
        template:'email',
        html:`<b>your otp is ${otp} and url is ${url}</b>`,
   
      };
      
      transporter.sendMail(mailOptions,function(error, info){
        if (error) {
          // console.log(error);
          // res.render('index',{err:"errr"})
        } else {
          console.log('Email sent: ' + info.response);
          
        //    res.render('index',{succ:"suc"});
          
        }
      });
}