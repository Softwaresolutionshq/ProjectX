'use strict';
const nodemailer = require('nodemailer');

function EmailVerification(tomail){
	this.gmailVerification = new Gmail(tomail);
}

EmailVerification.prototype.sentmail=function(){
   var code = Math.floor(Math.random() * 100000000000000);
   this.gmailVerification.gmailSend(code);
};

function Gmail(tomail){

   var config = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'familytreedonotreplay', // generated ethereal user
            pass: 'TreeFamily@1234'  // generated ethereal password
        }
      };
   this.tomail = tomail;
   this.transporter =  nodemailer.createTransport(config);
}

Gmail.prototype.gmailSend=function(code){

var mailOptions = {
        from: 'familytreedonotreplay@gmail.com', // sender address
        to: this.tomail, // list of receivers
        subject: 'Verification mail donot replay', // Subject line
        text: '', // plain text body
        html: '<b>Click the URL for verification</b></br></br></br>' 
              + '<a href="http://162.250.190.189:3000/email/verification?code='+code+'">'
              +'http://162.250.190.189:3000/email/verification?code='+code+'</a>'// html body
    };
	console.log('send mail:'+this.tomail+" :"+code);
 this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });

};



exports.EmailVerification = EmailVerification;
