import React, { Component } from 'react'
import { List, InputItem,Button,NavBar,Icon } from 'antd-mobile';
import sui from '../sui.css';
import {withRouter} from 'react-router-dom'
class Baike1 extends Component {
    goBack=()=>{
        this.props.history.go(-1);
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
                    <p>目标：增进亲子情感交流，培养学习兴趣。训练反应的灵敏性</p>

                    <p>玩法：家长和孩子面对面站立，家长说‘大西瓜’，孩子就做‘小西瓜’的手势
                        家长说：‘小西瓜’，孩子就做‘大西瓜’手势。错者淘汰，最后未被淘汰者获胜。
                        每二次游戏开始后，互换角色进行
                    </p>

                    <p>注意：</p>

                    <p>1此游戏也可由主持人发出信号，家长和孩子一起做</p>
                    <p>2可别选一些词语，如高，矮，胖，瘦来进行游戏</p>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Baike1);
