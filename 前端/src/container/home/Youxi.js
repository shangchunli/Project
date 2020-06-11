import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import '../Wiki.css'


export default class Youxi extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    handle = (pathname) => {
        this.props.history.push( "/wiki/" + pathname);
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
                        <img  onClick={() => { this.handle('youxi1') }}src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/> 

                    <p>爸爸妈妈（4-6岁）</p>
                    {/* <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' /> */}
                    </div>
                    <div className='tiezi'style={{ }}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img onClick={() => { this.handle('youxi2') }} src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>小心陷阱（4-5岁）</p>
                    {/* <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' /> */}
                    </div>
                    <div className='tiezi'style={{}}>
                    {/* <img  src='./images/chaowa/youxi1.png'/> */}
                    <img  onClick={() => { this.handle('youxi3') }}src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>大西瓜小西瓜（5-6岁）</p>
                    {/* <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                    */}
                    </div>
                    <div className='tiezi'style={{}}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img onClick={() => { this.handle('youxi4') }} src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>"二人三足跑"（５－６岁）</p>
                    {/* <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                     */}
                    </div>
                    <div className='tiezi'style={{ }}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img  onClick={() => { this.handle('youxi5') }}src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>"传达室动作"（4－６岁）</p>
                    {/* <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                     */}
                    </div>
                    <div className='tiezi'style={{ }}>
                    {/* <img  src='./images/chaowa/youxi2.png'/> */}
                    <img onClick={() => { this.handle('youxi6') }} src='https://s2.ax1x.com/2019/12/04/Q1YuGQ.png'/>
                    <p>"毛毛虫"（4－６岁）</p>
                    {/* <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}} 
                         src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                         ' />                    */}
                    </div>

                </li>
            </ul>
               
        )
    }
}