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
                    <p>目标：培养幼儿与妈妈一起共同动手动脑，细心地合作。</p>

                    <p>准备：空奶瓶４个，火柴棍若干。</p>

                    <p>玩法：发给每个参赛家庭空奶瓶１个、火柴若干。比赛开始孩子与妈妈一起将火柴巧妙的随意摆放在瓶口上，
                        但不能掉入瓶中，在规定时间内，瓶口上堆放火柴最多的那家为胜</p>

                    <p>规则：火柴掉进瓶里一根就被淘汰 </p>
                  
                </div>
            </div>
        )
    }
}
export default withRouter(Baike1);