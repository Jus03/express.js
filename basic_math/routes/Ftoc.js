var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('includes/Ftoc',{title : "Farenheit to Celcius",result:null});
}); 

router.post('/',function(req, res, next){
    let fahrenheit = parseFloat(req.body.fahrenheit);

    if(isNaN(fahrenheit)){
        res.render('includes/Ftoc',{ title: "Farenheit to celsius", result: "Invalid Input"});
    }else{
        let celcius = (fahrenheit -32 ) * (5 / 9);
        let result = fahrenheit + '°F = ' + celcius.toFixed(2) + '°C';
        res.render('includes/Ftoc',{ title: "Farenheit to Celsius", result: result});
    }

});
module.exports = router;
