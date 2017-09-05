var express = require('express');
var router = express.Router();
var email = require('../app/email/verificationmail').EmailVerification;
/* GET users listing. */
router.get('/send', function(req, res, next) {
  res.send('Send verification mail');
	try{
	var ema = new email(req.param('emailId'));
		ema.sentmail();
	}catch(error){
		console.log('messagge:'+error.message);
	}
});

router.get('/verification', function(req, res, next) {
  res.send('Mail verified : '+req.param('code'));
	
});

module.exports = router;
