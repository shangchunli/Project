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
                    <p>体会亲子共同游戏时的平等，和谐的愉悦</p>

                    <p>过程：父母孩子围坐在一起，由一个人做一个动作如拍肩，第二个人跟做此动作，当第二个人做完后，第一以个有接着做其他动作，第三个人跟第二个人传的拍肩动作，
                        看能传多久动作不断
                    </p>

                    <p>注意</p>

                    <p> 1至少三人参加此游戏，所传动作最好是手上动作</p>
                    <p>2做传的动作前上手合拍一次，保持拍手两个重复动作的节奏，速度由慢到快，初玩时可将所传动作做几遍再换</p>
                </div>
               
            </div>
        )
    }
}
export default withRouter(Baike1);
