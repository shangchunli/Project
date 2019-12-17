import React, { Component } from 'react'
import "./apphome.css"
<<<<<<< HEAD
import {NavBar,Icon,ListView} from "antd-mobile"
import Picture from './home/Picture'
import {Route,Link} from "react-router-dom" 
function Show(){
    var date = new Date(); //日期对象
=======
import cookie from 'react-cookies'
<<<<<<< HEAD
import {NavBar,Icon, List} from "antd-mobile"
let str=<h3>快来设置宝贝信息吧</h3>;
str=<div>
<List.Item style={{backgroundColor:"transparent"}}>丫丫                        
今天9个月28天了</List.Item>
<List.Item style={{backgroundColor:"transparent"}}>身高：66cm</List.Item>
<List.Item style={{backgroundColor:"transparent"}}>体重：6.7kg</List.Item>
</div>
///
// 宝宝今		天:<Show/>
function Show(){
    var date = new Date(); 
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
    var ms1=date.getTime();
    date.setDate('1');
    date.setMonth('1');
    date.setFullYear('2011');
    var ms=ms1-date.getTime();
    date.setTime(ms);
    var time = "";
    time = date.getFullYear()-1970+"岁";
    time = time + (date.getMonth()+1)+"个月";
    time = time + date.getDate()+"天 ";
<<<<<<< HEAD
    
    return time; 
   
    }
  

export default class AppHome extends Component {
    constructor(props){
        super(props);
        
=======
    return time; 
    }
export default class AppHome extends Component {
=======
import {NavBar,Icon} from "antd-mobile"
import {withRouter} from 'react-router-dom'
let str='快来设置宝贝信息吧';


class AppHome extends Component {
>>>>>>> 520e1981d781fa7dc8cb91d1f35c1cb826613f1e
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    componentDidMount(){
        // console.log(this.props.match.params.id);
        fetch('http://192.168.43.217:5001/caprice',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                userId:cookie.load('userId'),  
            })                    
    })
    .then(res=>res.json())
    .then((res)=>{
        let str=res.reverse();
       this.setState({
           data:str
       })
    })
<<<<<<< HEAD
    fetch('http://192.168.43.217:5001/mybaby',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                userId:cookie.load('userId'),  
            })                    
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res)
    })
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
=======
   
>>>>>>> 520e1981d781fa7dc8cb91d1f35c1cb826613f1e
    }
    handle=(pathname)=>{
        // window.location.href="/home/"+pathname;
        console.log(this.props);
        this.props.history.push('/home/'+pathname);
    }
<<<<<<< HEAD
        

    
   
=======
    toDetail=(id)=>{
        this.props.history.push('/home/detail/'+id);

    }
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
    render() {
        
        return (
            
            <div>
                <NavBar
                        style={{backgroundColor:'#fff',color:'#000',
                        fontWeight:"bolder",
                        position:"fixed",zIndex:100,width:"100%",top:0
                    }}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        ]}
                    >
                        呦呦育儿
                </NavBar>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='shouye2'style={{marginTop:50,
                    background:'url("https://s2.ax1x.com/2019/12/10/QBR4bT.jpg")',backgroundSize:'cover',opacity:'0.9'}}>
                    <p className='shouye9'style={{color:'white',paddingLeft:'10%',paddingTop:'15%',float:'left'}}>宝宝今天:<Show/></p>
                    <img 
                        style={{paddingTop:'18%'}}
                        src='https://s2.ax1x.com/2019/12/10/QB4ryn.png'
                        onClick={()=>{this.handle('Message')}}
                    />
=======
              <div className='shouye2'style={{marginTop:50, 
=======
              <div className='shouye2'style={{marginTop:50,
>>>>>>> 520e1981d781fa7dc8cb91d1f35c1cb826613f1e
                    background:'url("https://s2.ax1x.com/2019/12/10/QBR4bT.jpg")',
                    backgroundSize:'cover',opacity:'0.9'}}>
                    <p className='shouye9'style={{color:'white',paddingLeft:'10%',
                    paddingTop:'15%',float:'left'}}>{str}</p>
                    <img 
                        style={{paddingTop:'18%'}}
                        src='https://s2.ax1x.com/2019/12/10/QB4ryn.png'
                        onClick={()=>{this.handle('message')}}
                    />
<<<<<<< HEAD
                    </List.Item>
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
=======
>>>>>>> 520e1981d781fa7dc8cb91d1f35c1cb826613f1e
                </div>
                    <div onClick={()=>{this.handle('picture')}}
                    style={{float:'left',paddingLeft:'8%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                        
                            src='./images/home/2.png'/>
                        <p>识图</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('chinese')}}
                    style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='./images/home/3.png'/>
                        <p>识字</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('song')}}
                    style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='./images/home/4.png'/>
                        <p>催眠曲</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('story')}}
                    style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/home/5.png'
                            />
                        <p>睡前故事</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('youxi')}}
                    style={{float:'left',paddingLeft:'6%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/home/6.png'
                            />
                        <p>亲子游戏</p>
                    </div>
<<<<<<< HEAD
                <button className="shouye1">
                    <img
                        style={{marginLeft:'50'}} 
                        src='images/home/7.png'
                        width='30' height='30'
                        />
                     <span style={{fontSize:'150%'}}>今日随想</span>
                    <span style={{fontSize:'10',paddingLeft:'25%'}}>2019年11月27日</span>
                </button>
                <button className="shouye1" >
                    <img
                        style={{marginLeft:'50'}} 
                        src='images/home/7.png'
                        width='30' height='30'
                        />
                    <span style={{fontSize:'150%'}}>宝宝健康</span>
                    <span style={{fontSize:'10',paddingLeft:'25%'}}>2019年11月27日</span>
                </button>
                <button className="shouye1" >
                    <img
                        style={{marginLeft:'50'}} 
                        src='images/home/7.png'
                        width='30' height='30'
                        />
                    <span style={{fontSize:'150%'}}>今日随想</span>
                    <span style={{fontSize:'10',paddingLeft:'25%'}}>2019年11月27日</span>
                </button>                
                 
=======
                {/* <div>
                    {
                        
                    }
                </div> */}
                <div>
                {
                    ((this.state.data||[]).map(item=>
                        <button className="shouye1" id={item.cid}
                        onClick={()=>this.toDetail(item.cid)}>
                            <img style={{marginLeft:'-60%'}}
                                src='images/home/7.png'
                                width='30' height='30'
                                />
                            <span style={{fontSize:'150%',paddingLeft:'10%'}}>{item.ccontent}</span>
                            <p style={{fontSize:'10',paddingTop:20}}>{item.ctime}</p>
                        </button>
                    )

                    )
                }   
                </div>
>>>>>>> 76c6b92979baa468cbe2c7366b888da0149dffa6
            </div>
        )
    }
}
export default withRouter(AppHome);