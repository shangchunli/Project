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
//亲子游戏页面渲染
router.get('/youxi',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="亲子游戏"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//亲子教育页面渲染
router.get('/jiaoyu',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="宝宝教育"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//潮娃穿搭页面渲染
router.get('/chuanda',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="潮娃穿搭"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//宝宝饮食页面渲染
router.get('/babyfood',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="宝宝饮食"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//产后抑郁页面渲染
router.get('/yiyu',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="产后抑郁"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//孕期护理页面渲染
router.get('/huli',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="妈妈护理"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//身材恢复页面渲染
router.get('/shencai',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="身材恢复"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//焦虑页面渲染
router.get('/jiaolv',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="焦虑"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//妈妈饮食页面渲染
router.get('/momfood',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where tab="妈妈饮食"',function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})
//帖子详情页渲染
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
  var time = new Date().getFullYear()+'/'+'12/'+new Date().getDate()+"  "
  +new Date().getHours()+":"+new Date().getMinutes();
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into chapters(title,content,tab,time) value(?,?,?,?)",[title,content,tab,time],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.send('发表成功')
    }
  })
})
//用户发随想
 
router.post('/addcaprice',function(req,res,next){
  var cowner = req.body.userId;
  var ccontent = req.body.content;
  var cimage=req.body.files.files[0].url;
  var ctime =new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
  var path = './server/caprice/'+cowner+'/'+ Date.now() +'.png'; 
  var base64 = cimage.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
  console.log('dataBuffer是否是Buffer对象：'+Buffer.isBuffer(dataBuffer));
  if(!fs.existsSync('./server/caprice/'+cowner+'')){
    fs.mkdir('./server/caprice/'+cowner+'',function(error){
      if(error){
          console.log(error);
      }
      console.log('创建目录成功');
    })
    fs.writeFileSync(path, dataBuffer, {'encoding':'binary'});
  }else{
    fs.writeFileSync(path, dataBuffer, {'encoding':'binary'});
  }
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into caprice(cowner,ccontent,ctime,cimage) value(?,?,?,?)",
      [cowner,ccontent,ctime,path],
      function(err,result){
        if(err){
          console.log(err)
        }else{
          res.send('hehe');
        }
      })
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
//取消收藏
router.post('/uncollect',function(req,res,next){
  var tel = req.body.userId;
  var chapterid = req.body.chapterId;
  console.log(tel,chapterid);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from mycollect where telphone=? AND chapterid=?",[tel,chapterid],function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send('delete success')
      console.log('ok');

    }
  })
})




//我的宝宝表添加
router.post('/addbaby',function(req,res,next){
  var tel = req.body.userId;
  var name = req.body.name;
  var year = req.body.year;
  var month = req.body.month;
  var day = req.body.day;
  var sex = req.body.sex;
  var height = req.body.height;
  var weight = req.body.weight;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('insert into mybaby(telphone,babyname,birthyear,birthmonth,birthday,sex,height,weight) values(?,?,?,?,?,?,?,?)',
    [tel,name,year,month,day,sex,height,weight],function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log(result);
        res.send('ok');
      }
    })
})
//我的宝宝渲染
router.post('/mybaby',function(req,res,next){
  var tel = req.body.userId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select babyid,babyname,birthyear,birthmonth,birthday,sex,height,weight from  mybaby where telphone =?',tel,function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.send(result);
    }
  })
})
// 个人信息渲染
router.post('/me',function(req,res,next){
  var tel = req.body.userId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select telphone,name,email from  register where telphone =?',tel,function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
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
  var id = req.query.chapterid;
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
//删除已发表帖子信息，同时删除数据库内信息
router.get('/delchap',function(req,res,next){
  var id = req.query.id;console.log(id);
  // var con = mysql.createConnection(dbconfig);
  // con.connect();
  // con.query("delete from register where id =?",[id],function(err,result){
  //   if(err){
  //     console.log(err)
  //   }else{
  //     res.end('shanle')

  //   }
  // })
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
