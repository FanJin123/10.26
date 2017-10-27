var express = require('express');
var router = express.Router();
var fs=require("fs");
var mysql=require("mysql");
var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123456',
	port:3306
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.connect();
  connection.query("SELECT * FROM ggg.ss",function(err,rows,fields){
  	console.log(rows)

  	res.send(rows);
  })
  connection.end() 
});

module.exports = router;
