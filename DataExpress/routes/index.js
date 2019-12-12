var express = require('express');
var router = express.Router();
//引入数据库模块
var mysql = require('mysql');
var fs = require("fs");
//引入数据库配置文件，这个文件是自己建的
var dbconfig = require('../config/dbconfig.json');
// var child-care = require('../config/child-care.json');
// let user = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//前端接口----------------------------------------------------------------
//用户登录得到数据库内用户信息
router.get('/yhlogin',function(req,res,next){
  // user=req.body.names;
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
// console.log(user);
//用户注册提交上的信息
router.post('/register',function(req,res,next){
   var name =req.body.names;
   var telphone = req.body.tel;
   var email = req.body.email;
   var pwd = req.body.pwd1;
   var head = req.body.files[0].url;
   console.log(head);
  // 头像：图片选择器得到的base64编码，去除头部信息，转存到本地服务器，
    var base64Data = head.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = Buffer.from(base64Data, 'base64');
    fs.writeFile("image.png", dataBuffer, function(err) {
        if(err){
          console.log(err);
        }else{
          console.log("保存成功！");
        }
    });
   var con = mysql.createConnection(dbconfig);
   con.connect();
   con.query("insert into register(name,telphone,email,pwd,head) values(?,?,?,?,?)",[name,telphone,email,pwd,head],function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send('success');
      }
    })
  
})
//页面渲染==========================================================
//疾病页面渲染
router.get('/jibing',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,tab,owner from chapters',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
  //用户发帖
router.post('/addchapters',function(req,res,next){
  console.log(req.body);
  res.send('hehe');
})

//将帖子内容标签传给前端---详情页渲染
router.get('/ppp',function(req,res,next){
  res.send('<p>hahaha</p>')
})
// 已获取当前登录用户user,等待获得帖子id
router.post('/cookie', function(req,res,next){
  var user = req.body.userId;
  var chapterId = req.body.chapterId;
  console.log("user:"+user,"chapterId:"+chapterId);
  var con  = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into mycollect(telphone,chapterid) values(?,?)",[user,chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(' collect success')
    }
  })
})
//所有帖子
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
//add帖子请求
router.post('/add',function(req,res,next){
    var x = req.body;
    console.log(x);
  
  })
// router.post('/add',function(req,res,next){
//   var title = req.body.title;
//   var content = req.body.content;
//   // console.log(req.body);
//   var con = mysql.createConnection(dbconfig);
//   con.connect();
//   con.query('insert into chapters(title,content) values(?,?)',[title,content],function(err,result){
//     if(err){
//       console.log(2);
//       console.log(err);
//     }else{
//       res.send('success')
//     }
//   })
// })

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
