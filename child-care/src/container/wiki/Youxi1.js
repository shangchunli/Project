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
                    <p>目标：加深亲子依恋之情，培养孩子热爱自已父母的情感</p>

                    <p>准备：小椅５－６把，蒙眼巾５－６条</p>

                    <p>玩法：幼儿５－６人，蒙眼坐成一排，父母分别走到幼儿面前，主持人说出此人特征，如发式，衣着，由幼儿猜出自已的爸爸妈妈</p>

                    <p>注意： </p>
                    <p>１：猜不着时可以让幼儿听被猜人的声音。 </p>
                    <p>２：猜对时可由父母对孩子做亲昵的动作，以表示奖励</p>
                </div>
            </div>
        )
    }
}
export default withRouter(Baike1);