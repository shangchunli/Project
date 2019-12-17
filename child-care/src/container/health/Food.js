import React, { Component } from 'react'
import { WhiteSpace,NavBar,Icon } from 'antd-mobile';
// import { List } from 'antd-mobile';
export default class Food extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                        style={{backgroundColor:'#fff',color:'#000'}}
                        
                    >
                        饮食
                </NavBar>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1HiSU.jpg
'
                        style={{width:'17%',height:'92%'}}
                    />
                    &nbsp;&nbsp;&nbsp;哺乳期怎么吃？
                </div>

                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1HiSU.jpg
'
                        style={{width:'17%',height:'92%'}}
                    />
                    &nbsp;&nbsp;&nbsp;让母乳更有营养，怎么吃？
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1HiSU.jpg
'
                        style={{width:'17%',height:'92%'}}
                    />
                    &nbsp;&nbsp;&nbsp;哺乳期妈妈可不可以吃药？
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1HiSU.jpg
'
                        style={{width:'17%',height:'92%'}}
                    />
                    &nbsp;&nbsp;&nbsp;女人做月子到底可以吃什么蔬菜？
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1HiSU.jpg
'
                        style={{width:'17%',height:'92%'}}
                    />
                    &nbsp;&nbsp;&nbsp;不为人知的剖腹产妇饮食注意事项
                </div>
                <WhiteSpace size="sm" />
                <div className='placeholder1'>
                    <img src='https://s2.ax1x.com/2019/12/04/Q1HiSU.jpg
'
                        style={{width:'17%',height:'92%'}}
                    />
                    &nbsp;&nbsp;&nbsp;坐月子饮食禁忌，你注意到了吗？
                </div>
                
                
            </div>
        )
    }
}
