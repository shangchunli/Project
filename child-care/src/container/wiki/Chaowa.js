import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import '../Wiki.css'


export default class Chaowa extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <ul>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                        style={{backgroundColor:'#fff',color:'#000'}}
                        
                    >
                        潮娃穿搭
                </NavBar>
                <li style={{marginTop:'5%',marginLeft:'9%'}}>    
                    <div className='tiezi'style={{ }}>
                        <img  src='https://s2.ax1x.com/2019/12/04/Q1tlfe.jpg'/>
                    <p>潮娃穿搭指南，10岁裴佳欣甜美型</p>
                    <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}}  
                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' />
                    </div>
                    <div className='tiezi'style={{ }}>
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1tlfe.jpg'/>
                        <p>跟着潮娃学穿搭，新春挑款攻略一网打尽</p>
                        <img style={{height:20,width:20,float:'right',marginTop:-50,marginRight:10}}  
                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' />
                    </div>
                    <div className='tiezi'style={{}}>
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1tlfe.jpg'/>
                        <p>London Scout 的时尚穿搭</p>
                        <img style={{height:20,width:20,float:'right',marginTop:-30,marginRight:10}}  
                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' />                    </div>
                    <div className='tiezi'style={{}}>
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1tlfe.jpg'/>
                        <p>潮娃穿搭风格</p>
                        <img style={{height:20,width:20,float:'right',marginTop:-20,marginRight:10}}  
                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' />                    </div>
                    <div className='tiezi'style={{ }}>
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1tlfe.jpg'/>
                        <p>潮娃穿搭风格</p>
                        <img style={{height:20,width:20,float:'right',marginTop:-20,marginRight:10}}  
                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' />                    </div>
                    <div className='tiezi'style={{ }}>
                    <img  src='https://s2.ax1x.com/2019/12/04/Q1tlfe.jpg'/>
                        <p>潮娃穿搭风格</p>
                        <img style={{height:20,width:20,float:'right',marginTop:-20,marginRight:10}}  
                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' />                    </div>

                </li>
            </ul>
               
        )
    }
}