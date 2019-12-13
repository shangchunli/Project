import React, { Component } from 'react'
import { WhiteSpace ,NavBar,Icon} from 'antd-mobile';
import "./collect.css"
export default class Focus extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            
            <div>
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
                    我的关注
                </NavBar>
                <WhiteSpace size="sm" />
                <div className='placeholder2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>

                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1wlM4.jpg'
                        style={{width:'12%',height:'88%'}}
                    />
                    &nbsp;&nbsp;&nbsp;小美妈妈
                </div>
                <WhiteSpace size="sm" />
                
                
            </div>
        )
    }
}
