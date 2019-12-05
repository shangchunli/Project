import React, { Component } from 'react'
import { List, InputItem,Button,NavBar,Icon } from 'antd-mobile';

import sui from './sui.css';
export default class Detail extends Component {
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
                <h3 >&nbsp;&nbsp;&nbsp;&nbsp;宝宝什么时候添加辅食？</h3>
                <br/>
                <br/>
                <button className='detail1'> Part1:宝宝体重是否足够</button>
                <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    是否给宝宝添加辅食还要考虑到宝宝的体重。增加辅食体重需要达到出生时的2倍，
                    至	少达到6千克。如果你的宝宝体重达到了这样的增长标准，那么就可以考虑给宝宝做辅	食添加的准备了。
                </div>
               
                    <img 
                        style={{width:'92%',height:'100',paddingLeft:'5%',paddingTop:'3%'}}
                        src='https://s2.ax1x.com/2019/12/04/Q1uI41.jpg
                        '
                    />
                 <button className='detail1'> Part2:宝宝发育是否成熟？</button>
                 <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    当你的宝宝能控制头部和上半身，能够扶着或靠着坐，胸能挺起来，头能竖起来，宝宝
                可以通过转头、前倾、后仰等来表示想吃或不想吃，这样就不会发生强迫喂食的情况。
                </div>
                <img 
                        style={{width:'92%',height:'100',paddingLeft:'5%',paddingTop:'3%'}}
                        src='https://s2.ax1x.com/2019/12/04/Q1ubjO.jpg
                        '
                    />
            </div>
        )
    }
}
