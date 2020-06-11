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
                <button className='detail1'> Part1:4~6月宝宝的辅食</button>
                <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    <p>1、米粉原料：</p><p>1匙米粉，温水</p>
                    <p>做法：1匙米粉加入3-4匙温水，静置后，用筷子按照顺时针方向调成糊状</p> 
                    <p>2、米汤原料：</p><p>硒米</p>
                    <p>做法：将锅内水烧开后，放入淘洗干净的200g大米，煮开后再用文火煮成烂粥，取上层米汤即可食用。</p>            
                 </div>
               
                <br/>
                <br/>
                <br/>
                <br/>
            
                 <button className='detail1'> Part2:6~8月宝宝的辅食</button>
                 <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    <p>1、猪骨胡萝卜泥</p>

                    <p>原料：胡萝卜1小段，猪骨适量</p>

                    <p>做法：猪骨洗净，与胡萝卜同煮，并滴2滴醋进去。待汤汁浓厚胡萝卜酥烂时捞出猪骨和杂质，用勺子将胡萝卜碾碎即可。</p>

                    
                </div>
                <button className='detail1'> Part3:8~12月宝宝的辅食</button>
                 <div className='detail2'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1uY1f.png'/>
                    <p>1、小米山药粥</p>

                    <p>原料：鲜山药，小米，白糖。</p>

                    <p>做法：将山药洗净捣碎，与小米同煮为粥，然后加白糖适量，空腹食用。</p>

                    
                </div>
            </div>
        )
    }
}
