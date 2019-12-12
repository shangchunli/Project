import React, { Component } from 'react'
import "./apphome.css"
import {NavBar,Icon} from "antd-mobile"
import Picture from './home/Picture'
// import Chinese from './home/Chinese'
import {Route,Link} from "react-router-dom"

// import Story from './home/Story'
// import Youxi from './home/Youxi'
// import Song from './home/Song'
function Show(){
    var date = new Date(); //日期对象
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
    
    return time; 
   
    }
  


export default class AppHome extends Component {
    constructor(props){
        super(props);

    }
    handle=(pathname)=>{
        window.location.href="/home/"+pathname;
    }
    // toOther=()=>{
    //     // this.props.history.push("/home/pic")
    //     console.log(this.props);
    // }
    render() {
        return (
            
            <div>
                {/* <Route path="/home/pic" component={Picture}/>  */}

                {/* <div> */}
                    {/* <Route path="/home/shitu" component={Picture}/> */}
                    {/* <Route path="/home/shizi" component={Chinese}/>
                    <Route path="/home/gushi" component={Story}/>
                    <Route path="/home/youxi" component={Youxi}/>
                    <Route path="/home/cuimianqu" component={Song}/> */}
                {/* </div> */}
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
              <div className='shouye2'style={{marginTop:50,
                    background:'url("https://s2.ax1x.com/2019/12/10/QBR4bT.jpg")',backgroundSize:'cover',opacity:'0.9'}}>
                    <p className='shouye9'style={{color:'white',paddingLeft:'10%',paddingTop:'15%',float:'left'}}>宝宝今		天:<Show/></p>
                    <img 
                        style={{paddingTop:'18%'}}
                        src='https://s2.ax1x.com/2019/12/10/QB4ryn.png'
                        onClick={()=>{this.handle('Message')}}
                    />
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
                   
                   
                {/* </div> */}
                {/* <div className='shouye1'>
                </div> */}
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
                
            </div>
        )
    }
}