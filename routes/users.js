var express = require('express');
var router = express.Router();
var familyUser = require('../app/userCreation').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save', function(req, res, next) {
	  var user = new familyUser();
	  var response = user.save(req.param('id'),req.param('name'),req.param('password'));
	  res.send(response);
	});

module.exports = router;
