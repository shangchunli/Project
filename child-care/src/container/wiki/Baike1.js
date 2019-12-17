import React, { Component } from 'react'
import { List, InputItem,Button,NavBar,Icon } from 'antd-mobile';

import sui from '../sui.css';
export default class Baike1 extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <NavBar
                 icon={<Icon type="left" onClick={this.goBack}/>}
                    style={{backgroundColor:'#fff',
                    color:'#000',
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    详情页
                </NavBar>
                {/* <h3 >&nbsp;&nbsp;&nbsp;&nbsp;宝宝什么时候添加辅食？</h3> */}
                <br/>
                <br/>
                <button className='detail1'> Part1:宝宝什么时候添加辅食？</button>
                <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    宝宝出生满6个月左右是添加辅食比较好的时机。不过，如果宝宝已经准备好了，稍微早一点点也无妨（但必须满4个月哦）。
                </div>
               
                    <img 
                        style={{width:'92%',height:'100',paddingLeft:'5%',paddingTop:'3%'}}
                        src='https://s2.ax1x.com/2019/12/17/QI1JMt.png
                        '
                    />
                 <button className='detail1'> Part2:怎样判断宝宝有没有准备好？</button>
                 <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    <p>1、可以很好地控制头部和颈部。能在有支撑的情况下，坐在高脚凳上。</p>

                    <p>2、挺舌反射消失。</p>

                    <p>3、开始对食物感兴趣。</p>

                    <p> 4、具备口腔运动技能。能把食物从口腔前部运送到喉咙，并吞咽下去。</p>
                </div>
                <img 
                        style={{width:'92%',height:'100',paddingLeft:'5%',paddingTop:'3%'}}
                        src='https://s2.ax1x.com/2019/12/17/QI1adS.png
                        '
                    />
            </div>
        )
    }
}
