import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import '../Wiki.css'


export default class Youxi extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <ul>
                <NavBar
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    style={{backgroundColor:'#fff',color:'#000',
                    height:60,fontWeight:"bolder",
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    亲子游戏
                </NavBar>
                <li style={{marginTop:'20%',marginLeft:'9%'}}>    
                    <div className='tiezi'style={{ }}>
                        {/* <img  src='./images/chaowa/youxi1.png'/> */}
                        <img  src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/> 

                    <p>寿司卷--棉被小道具</p>
                    <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />
                    </div>
                    <div className='tiezi'style={{ }}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>荡秋千--棉被小道具</p>
                    <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />
                    </div>
                    <div className='tiezi'style={{}}>
                    {/* <img  src='./images/chaowa/youxi1.png'/> */}
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>拉雪橇--棉被小道具</p>
                    <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                    </div>
                    <div className='tiezi'style={{}}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>捞金鱼--脸盆小道具</p>
                    <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                    </div>
                    <div className='tiezi'style={{ }}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>泡澡好好玩--脸盆小道具</p>
                    <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                    </div>
                    <div className='tiezi'style={{ }}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>小小模特儿--脸盆小道具</p>
                    <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                    </div>

                </li>
            </ul>
               
        )
    }
}