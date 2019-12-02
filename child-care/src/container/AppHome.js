import React, { Component } from 'react'
import "./apphome.css"

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor:'#fff',width:'100%',height:'30',textAlign:"center"}}>呦呦育儿</div>
                <div className='shouye2'style={{background:'url("images/home/9.jpg")',backgroundSize:'cover',opacity:'0.9'}}>
                    宝宝今天：3岁5个月
                </div>
                    <div style={{float:'left',paddingLeft:'8%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                        
                            src='images/home/2.png'/>
                        <p>识图</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/home/3.png'/>
                        <p>识字</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/home/4.png'/>
                        <p>催眠曲</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/home/5.png'
                            />
                        <p>睡前故事</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'6%',backgroundColor:'white'}}>
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