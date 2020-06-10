var express = require('express');
var router = express.Router();

/* GET users listing. */
var express = require('express');
var router = express.Router();
//引入数据库模块
var mysql = require('mysql');
var fs = require("fs");
var path = require('path');
const formidable = require('formidable');
//引入数据库配置文件，这个文件是自己建的
var dbconfig = require('../config/dbconfig.json');
// var child-care = require('../config/child-care.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//前端接口----------------------------------------------------------------
//用户登录得到数据库内用户信息
router.post('/yhlogin',function(req,res,next){
  var tel = req.body.telphone;
  var pwd = req.body.pwd;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select telphone,pwd from register",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      result.map((item)=>{
          res.send('success');
        }
      })
    }
  })
})
//用户注册提交上的信息
// 头像：图片选择器得到的base64编码，去除头部信息，转存到本地服务器，
router.post('/register',function(req,res,next){
  // res.send('register');
   var email = req.body.email;
   var pwd = req.body.pwd1;
   console.log(name);
   var head = req.body.files[0].url;

  // var timer = Date.now() ;
  var imgpath = './server/head/'+ telphone+'.png'; 
  var base64 = head.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
  console.log('dataBuffer是否是Buffer对象：'+Buffer.isBuffer(dataBuffer));
  // if(!fs.existsSync('./server/head/')){
  //   fs.mkdir('./server/head/'+cowner+'',function(error){
  //     if(error){
