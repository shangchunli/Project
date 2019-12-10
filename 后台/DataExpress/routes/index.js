var express = require('express');
var router = express.Router();
//引入数据库模块
var mysql = require('mysql');
//引入数据库配置文件，这个文件是自己建的
var dbconfig = require('../config/dbconfig.json');
// var child-care = require('../config/child-care.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//前端接口----------------------------------------------------------------
//用户登录得到数据库内用户信息
router.get('/yhlogin',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select telphone,pwd from register",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})
//用户注册提交上的信息
router.post('/register',function(req,res,next){
   var name =req.body.names;
   var telphone = req.body.tel;
   var email = req.body.email;
   var pwd = req.body.pwd1;
   var con = mysql.createConnection(dbconfig);
   con.connect();
   con.query("insert into register(name,telphone,email,pwd) values(?,?,?,?)",[name,telphone,email,pwd],function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send('success');
      }
    })
  
})
router.get('/chapters',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select title,content from chapters',function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})
router.post('/add',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  // console.log(req.body);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('insert into chapters(title,content) values(?,?)',[title,content],function(err,result){
    if(err){
      console.log(2);
      console.log(err);
    }else{
      res.send('success')
    }
  })
})

//后台接口------------------------------------------------------------------
//登录页面
router.get('/login',function(req,res,next){
  res.render('login');
})
//登录验证
router.post('/login',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select username,pwd from managers',function(err,result){
    if(err){
      console.log(err);
    }else{
      for(var i =0;i<result.length;i++){
        if(req.body.username==result[i].username&&req.body.pwd==result[i].pwd){ 
          res.end('success');
        }
      }
      res.end('login fail');
    }
  })
})
//首页-----------------------------------------------
router.get('/home',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from register",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('home');
    }
  })
})
//用户管理-----------------------------------------
//显示所有注册用户信息
router.get('/usersList',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from register",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('userslist',{usersList:result})
    }
  })
})
//删除已注册用户信息，同时删除数据库内信息
router.get('/del',function(req,res,next){
  var id = req.query.id;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from register where id =?",[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      res.end('shanle')

    }
  })
})
//帖子管理-----------------------------------------------
router.get('/chapter',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapter',{usersList:result})
    }
  })
})
//系统管理-----------------------------------------------
router.get('/system',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from managers",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('system',{usersList:result})
    }
  })
})



// router.get('/del',function(req,res,next){
//   var chapterId = req.query.chapterid;
//   var con = mysql.createConnection(dbconfig);
//   con.connect();
//   con.query("delete from chapters where chapterid=?",[chapterId],function(err,result){
//     if(err){
//       console.log(err);
//     }else{
//       res.end('delect success');
//     }
//   })
// })
//update chapters set content=? where chapterid=?

module.exports = router;
