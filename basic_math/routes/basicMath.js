var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('basicMath',{ title: 'Basic Math', num1: null, num2: null,sum:null});
});



router.post('/',(req, res)=>{
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const sum = num1 + num2;

  res.render('basicMath',{title: "basicMath",num1, num2,sum});
});

module.exports = router;