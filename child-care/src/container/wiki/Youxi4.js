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
                    <p>目标：学习两人相互配合用三条腿胚布，增进亲子情感交流</p>

                    <p>玩法：在场地两端画一条起跑线和一条终点线，请几对父子站在起跑线上，妈妈
                        用一根长带子将爸爸和孩子相邻的一条腿绑在一起，爸爸双手背后，听到口令后
                        ，爸爸和孩子一起出发向关跑，到终点线后返回，以先返回到起跑线者为胜。妈妈为
                        爸爸和孩子解开带子
                    </p>

                    <p>规则：爸爸必须双手背后，妈妈必须将带子系紧</p>

                </div>
               
            </div>
        )
    }
}
