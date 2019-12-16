var express = require('express');
var router = express.Router();
//引入数据库模块
var mysql = require('mysql');
var fs = require("fs");
var path = require('path');
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
        if(item.telphone==tel&&item.pwd==pwd){
          res.send('success');
        }
      })
    }
  })
})
//用户注册提交上的信息
router.post('/register',function(req,res,next){
  // res.send('register');
   var name =req.body.names;
   var telphone = req.body.tel;
   var email = req.body.email;
   var pwd = req.body.pwd1;
   var head = req.body.files[0].url;
   console.log(head);
   console.log(req.body);
  // 头像：图片选择器得到的base64编码，去除头部信息，转存到本地服务器，
    var base64Data = head.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = Buffer.from(base64Data, 'base64');
    fs.writeFile(telphone+"image.png", dataBuffer, function(err) {
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
  con.query('select chapterid,title,content,owner,time from chapters where tab="常见疾病"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//疫苗页面渲染
router.get('/yimiao',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="疫苗"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//睡前故事页面渲染
router.get('/gushi',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="睡前故事"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//将帖子内容标签传给前端---详情页渲染
router.post('/xiangqing',function(req,res,next){
  var chapterid = req.body.chapterId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select title,content from chapters where chapterid=?',chapterid,function(err,result){
    if(err){
      console.log(err);
    }else{
      // console.log(result);
      res.send(result);
    }
  })
})

  //用户发帖--------------------------------------------------------------------
router.post('/addchapters',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  var tab = req.body.tabs;
  var time = new Date().getFullYear()+'/'+'12/'+new Date().getDate()+'/'
  +new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into chapters(title,content,tab,time) value(?,?,?,?)",[title,content,tab,time],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
    }
  })
  console.log(req.body);
  res.send('hehe');
})
//用户发随想
router.post('/addcaprice',function(req,res,next){
  var cowner = req.body.userId;
  var ccontent = req.body.content;
  var cimage=req.body.files.files[0].url;
  var ctime =new Date().getFullYear()+'年'+'12月'+new Date().getDate()+'日'
  +new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
  var img=cowner;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into caprice(cowner,ccontent,ctime,cimage) value(?,?,?,?)",
      [cowner,ccontent,ctime,img],
      function(err,result){
        if(err){
          console.log(err)
        }else{
          res.send('hehe');
        }
      })
  
  var base64Data = cimage.replace(/^data:image\/\w+;base64,/, "");
  var dataBuffer = Buffer.from(base64Data, 'base64');
  var he = fs.statSync(path.join(__dirname,'./server/caprice/'+cowner));
    console.log(he);
    // fs.mkdir('./server/caprice/'+cowner+'',function(error){
    //   if(error){
    //       console.log(error);
    //       return false;
    //   }
    //   console.log('创建目录成功');
    // })

    fs.writeFile('./server/caprice/'+cowner+'/'+ctime+'.png', dataBuffer, function(err) {
        if(err){
          console.log(err);
        }else{
          console.log("保存成功！");
          console.log(__dirname)
        }
    });
  res.send("ee");
})
//随想渲染
router.post('/caprice',function(req,res,next){
  var user = req.body.userId;
  console.log(user);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select cid,ccontent,ctime,cimage from caprice where cowner=?',[user],function(err,result){
    if(err){
      console.log(err);
    }else{
      // console.log(result);
      res.send(result);
    }
  })
})
//随想详情页
router.post('/cdetail',function(req,res,next){
  var cid = req.body.cid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select ccontent,ctime,cimage from caprice where cid=? ',cid,function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

//加收藏 写mycollect表
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
//我的收藏页面渲染
router.post('/mycollect',function(req,res,next){
  var owner = req.body.userId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,tab,owner,time from chapters where chapterid in '
    +'(select chapterid from mycollect where telphone=? )',owner,function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
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
//首页
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
//用户管理
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
//帖子管理
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
//系统管理
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


module.exports = router;
