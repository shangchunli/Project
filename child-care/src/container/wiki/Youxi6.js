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
               
               
                 <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    <p>准备小呼啦圈两个，每个家庭派出一个小孩和两个大人，三人排成一列纵队，第一个圈套在前面两人身上，
                        第二个圈套在后两人身上，比比哪组跑完规定路线，为了增加难度，可在路线上设置独木桥，山洞等障碍物
                    </p>

                    <p>2、挺舌反射消失。</p>

                    <p>3、开始对食物感兴趣。</p>

                    <p> 4、具备口腔运动技能。能把食物从口腔前部运送到喉咙，并吞咽下去。</p>
                </div>
                
            </div>
        )
    }
}
