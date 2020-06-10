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
        if(item.telphone==tel&&item.pwd==pwd){
          res.send('success');
        }
      })
    }
  })
})

//用户注册提交上的信息
// 头像：图片选择器得到的base64编码，去除头部信息，转存到本地服务器，
router.post('/register',function(req,res,next){
  console.log('register')
   var name =req.body.names;
   var telphone = req.body.tel;
   var email = req.body.email;
   var pwd = req.body.pwd1;
   console.log(name);
   var head = req.body.files[0].url;

  var imgpath = './server/head/'+ telphone+'.png'; 
  var base64 = head.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
  console.log('dataBuffer是否是Buffer对象：'+Buffer.isBuffer(dataBuffer));
  // if(!fs.existsSync('./server/head/')){
  //   fs.mkdir('./server/head/'+cowner+'',function(error){
  //     if(error){
  //         console.log(error);
  //     }
  //     console.log('创建目录成功');
  //   })
  //   fs.writeFileSync(imgpath, dataBuffer, {'encoding':'binary'});
  // }else{
    fs.writeFileSync(imgpath, dataBuffer, {'encoding':'binary'});
  // }
  var imagepath = 'http://localhost:5001/getheadImg/?imgId='+telphone;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into register(name,telphone,email,pwd,head) values(?,?,?,?,?)",
        [name,telphone,email,pwd,imagepath],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      console.log(imagepath);
      res.send('success');
    }
  })
  
})
router.get('/getheadImg/',function(req,res,next){
  var filePath =('./server/head/'+req.query.imgId+'.png');
  // console.log(filePath);
  var imgContent = fs.readFileSync(filePath);
  res.writeHead(200,{'Content-Type':'image/png'});
  res.end(imgContent);
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
//推拿页面渲染
router.get('/tuina',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time from chapters where tab="小儿推拿"',function(err,result){
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
  con.query('select title,content,dzcount,sccount,plcount from chapters where chapterid=?',chapterid,function(err,result){
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
  var owner=req.body.owner;
  var time = new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate()+"  "
  +new Date().getHours()+":"+new Date().getMinutes();
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into chapters(title,content,tab,owner,time) value(?,?,?,?,?)",[title,content,tab,owner,time],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.send('发表成功')
    }
  })
})

// 用户发帖图片存储和渲染
router.post('/chapimg',function(req,res,next){
  req.setEncoding("binary");
  var str = "";
  req.on("data", function(chunk) {
    str += chunk;
  })
  req.on("end", function() {
    var totalArr=str.split('\r\n');
    // console.log(totalArr);
    var bufArr=totalArr.slice(4,totalArr.length-2);
    console.log(bufArr);
    var imgData="";
    for(var i=0;i<bufArr.length;i++){
      imgData+=bufArr[i] + "\r\n";
    }
    var buf=Buffer.from(imgData,"binary");
    var timer=(new Date()).getTime();
    fs.writeFileSync(__dirname+"\\upload\\"+timer+".png",buf,{"encoding":"binary"});
    res.send(JSON.stringify({
      errno: 0,
      data: [
        "http://localhost:5001/getImg?imgId=" + timer
      ]
    }))
  })
})
router.get('/getImg/',function(req,res,next){
  var filePath =path.join(__dirname,'/upload/'+req.query.imgId+'.png');
  console.log(filePath);
  var imgContent = fs.readFileSync(filePath);
  res.writeHead(200,{'Content-Type':'image/png'});
  res.end(imgContent);
})
//用户发随想
    // router   
router.post('/addcaprice',function(req,res,next){
  var cowner = req.body.userId;
  var ccontent = req.body.content;
  var cimage=req.body.files.files[0].url;
  var ctime =new Date().getFullYear()+'/'+'12/'+new Date().getDate()+"  "
  +new Date().getHours()+":"+new Date().getMinutes();
  var timer = Date.now() ;
  var imgpath = './server/caprice/'+cowner+'/'+ timer+'.png'; 
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
    fs.writeFileSync(imgpath, dataBuffer, {'encoding':'binary'});
  }else{
    fs.writeFileSync(imgpath, dataBuffer, {'encoding':'binary'});
  }
  var imagepath = 'http://localhost:5001/getcapImg/?cowner='+cowner+'&imgId='+timer;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into caprice(cowner,ccontent,ctime,cimage) value(?,?,?,?)",
      [cowner,ccontent,ctime,imagepath],
      function(err,result){
        if(err){
          console.log(err)
        }else{
          console.log(result);
          console.log(imagepath);
          res.send('hehe');
        }
      })
})
router.get('/getcapImg/',function(req,res,next){
  var filePath =('./server/caprice/'+req.query.cowner+'/'+req.query.imgId+'.png');
  var imgContent = fs.readFileSync(filePath);
  res.writeHead(200,{'Content-Type':'image/png'});
  res.end(imgContent);
})
             
//随想渲染没有图
router.post('/caprice',function(req,res,next){
  var user = req.body.userId;
  console.log(user);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select cid,ccontent,ctime,cimage from caprice where cowner=?',[user],function(err,result){
    if(err){
      console.log(err);
    }else{
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

//发布页面
router.post('/publish',function (req,res,next) { 
  var user = req.body.userId;
  var con  = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid,title,content,owner,time  from chapters where owner=?',[user],function(err,result){
    if(err){
      console.log(err)
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
//收藏保持
router.post('/keepid',function(req,res,next){
  var tab = req.body.tab;
  var tel = req.body.userId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid from chapters where tab=?AND chapterid in '
    +'(select chapterid from mycollect where telphone=? )',[tab,tel],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

//增加收藏
router.post('/addsccount',function(req,res,next){
  console.log(req.body)
  var sccount = req.body.sccount+1;
  var chapterId = req.body.chapterId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('update chapters set sccount =? where chapterid=?',[sccount,chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send('sc success');
    }
  })
})

//收藏数渲染
router.post('/showsccount',function(req,res,next){
  var chapterId = req.body.chapterId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select sccount from chapters where chapterId=? ',[chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

//增加评论
router.post('/addcomment', function(req,res,next){
  var user = req.body.userId;
  var chapterId = req.body.chapterId;
  var plcontent = req.body.plcontent;
  var pltime = new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate()+"  "
  +new Date().getHours()+":"+new Date().getMinutes();
  console.log("user:"+user,"chapterId:"+chapterId);
  var con  = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select head from register where telphone=?',[user],function(err,result){
    if(err){
      console.log(err)
    }else{
      // console.log(result[0].head)
      con.query("insert into comment(telphone,chapterid,plcontent,pltime,head) values(?,?,?,?,?)",[user,chapterId,plcontent,pltime,result[0].head],function(err,result){
        if(err){
          console.log(err);
        }else{
          res.send(' comment success')
        }
      })
    }
  })
  
})
//评论渲染
router.post('/showcomment',function(req,res,next){
  var chapterId = req.body.chapterId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select telphone,plcontent,plid,pltime,head from comment where chapterid=?',[chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result)
    }
  })
})

//增加评论数目
router.post('/plcount',function(req,res,next){
  var chapterId = req.body.chapterId;
  console.log(chapterId);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select chapterid from comment where chapterId=?',chapterId,function (err,result) { 
    if(err){
      console.log(err);
    }else{
      res.send(result)
    }
  })
})

//删除评论
router.post('/delcom',function (req,res,next) { 
  var plid=req.body.plid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('delete from comment where plid=?',plid,function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send('del success')
    }
  })
 })
//评论数目渲染
router.post('/showplcount',function(req,res,next){
  var chapterId = req.body.chapterId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select plcount from chapters where chapterId=? ',[chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

//点赞数目：
router.post('/dzcounnt', function(req,res,next){
  var chapterId = req.body.chapterId;
  var dzcount = req.body.dzcount+1;
  var con  = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update chapters set dzcount=? where chapterid=? ",[dzcount,chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(' dz success')
    }
  })
})

//渲染点赞数目
router.post('/showdzcount',function(req,res,next){
  var chapterId = req.body.chapterId;
  console.log(chapterId)
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select dzcount from chapters where chapterId=? ',[chapterId],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
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
      res.send(result);
    }
  })
})
// 个人信息渲染
router.post('/my',function(req,res,next){
  var tel = req.body.userId;
  console.log(tel);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select telphone,name,mood,head from  register where telphone =? ',tel,function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})
// 个人详情页
router.post('/me',function(req,res,next){
  var tel = req.body.userId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select telphone,name,mood,sex,email,head from  register where telphone =?',tel,function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.send(result);
    }
  })
})

// 个人信息更新
router.post('/meupdate',function(req,res,next){
  var tel = req.body.userId;
  var name = req.body.usename;
  var mood = req.body.mood;
  var sex = req.body.sex;
  console.log(tel,name,mood,sex);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('update register set name=?,mood=?,sex =?  where telphone ='+tel+'',[name,mood,sex],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.send('SUCCESS');
    }
  })
})

//话题圈=========================
//增加话题
router.post('/addtopic',function(req,res,next){
  console.log(req);
  var userId = req.body.userId;
  var tcontent = req.body.tcontent;
  var ttime = req.body.ttime;
  console.log(userId,tcontent,ttime);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('insert into topic(userid,tcontent,ttime) values(?,?,?)',[userId,tcontent,ttime],function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.send('话题添加成功')
    }
  })
})

//话题渲染
router.post('/topic',function(req,res,next){
  var userId = req.body.userId;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query('select topicid,userid,tcontent,ttime from  topic ',function(err,result){
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

//用户管理-------------------------------------------------------------------
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
router.get('/deluser',function(req,res,next){
  var id = req.query.id;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from register where id =?",[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      res.redirect('/usersList');

    }
  })
})
//查询
router.post("/usersearch",function(req,res,next){
  var username = req.body.username;
  var sql = "select * from register";
  if(username){
      sql += " where name = '"+ username +"'";
  }
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query(sql,function(err,result){
      if(err){
          res.send("查询失败: "+err);
      }else{
          res.render('userslist',{usersList:result});
      }
  });
})

//帖子管理
router.get('/chapterm',function(req,res,next){
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

router.get('/fenye1',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters order by chapterid asc limit 0,14",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapter',{usersList:result})
    }
  })
})
router.get('/fenye2',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters order by chapterid asc limit 14,14",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapter',{usersList:result})
    }
  })
})
router.get('/fenye3',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters order by chapterid asc limit 28,14",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapter',{usersList:result})
    }
  })
})
router.get('/fenye4',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters order by chapterid asc limit 42,14",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapter',{usersList:result})
    }
  })
})
router.get('/fenye5',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters order by chapterid asc limit 56,14",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapter',{usersList:result})
    }
  })
})
router.get('/fenye6',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters order by chapterid asc limit 70,14",function(err,result){
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
  var id = req.query.id;
  console.log(id);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chapterid =?",[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      res.redirect('/fenye5');


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
//宝宝管理-----------------------------------------------------
router.get('/babym',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from mybaby",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('mybaby',{usersList:result})
    }
  })
})
//删除宝宝信息，同时删除数据库内信息
router.get('/delbaby',function(req,res,next){
  var id = req.query.id;
  console.log(id);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from mybaby where babyid =?",[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      res.redirect('/babym');
    }
  })
})

//随想管理-------------------------------------------------------------------
router.get('/capricem',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from caprice",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('caprice',{usersList:result})
    }
  })
})

//查询
router.post("/capsearch",function(req,res,next){
  var username = req.body.username;
  var sql = "select * from caprice";
  if(username){
      sql += " where cowner = '"+ username +"'";
  }
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query(sql,function(err,result){
      if(err){
          res.send("查询失败: "+err);
      }else{
          res.render('caprice',{usersList:result});
      }
  });
})

//删除已发表帖子信息，同时删除数据库内信息
router.get('/delcap',function(req,res,next){
  var id = req.query.id;
  console.log(id);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from caprice where cid =?",[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      res.redirect('/capricem');
    }
  })
})
//收藏管理-----------------------------------------------
router.get('/collectm',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from mycollect",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('collect',{usersList:result})
    }
  })
})

//删除收藏信息，同时删除数据库内信息
router.get('/delcol',function(req,res,next){
  var id = req.query.id;
  console.log(id);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from mycollect where id =?",[id],function(err,result){
    if(err){
      console.log(err)
    }else{
      res.redirect('/collectm');
    }
  })
})
//查询
router.post("/colsearch",function(req,res,next){
  var username = req.body.username;
  var sql = "select * from mycollect";
  if(username){
      sql += " where telphone = '"+ username +"'";
  }
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query(sql,function(err,result){
      if(err){
          res.send("查询失败: "+err);
      }else{
          res.render('collect',{usersList:result});
      }
  });
})

module.exports = router;
