import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WingBlank, WhiteSpace,
    Flex,List} from 'antd-mobile';
import Collect from './my/Collect';
import Picture from './home/Picture';

export default class My extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#fff',color:'#000',
                    height:60,fontWeight:"bolder"}}
                >
                    我的
                </NavBar>
                <WhiteSpace/>
                <List style={{marginTop:"20px"}}>
                    <List.Item
                        arrow="horizontal"
                        multipleLine
                        onClick={() => {}}
                    >
                        <img src="./images/touxiang.jpg" 
                            style={{height:100,width:100,marginRight:25,borderRadius:50}}/>
                        丫丫 <List.Item.Brief style={{marginLeft:125,marginTop:-30,marginBottom:30}}>陌生人如玉</List.Item.Brief>
                    </List.Item>
                </List>
                <List style={{marginTop:"30px"}}>
                    <List.Item
                        arrow="horizontal"
                        thumb="./images/guanzhu.svg"
                        multipleLine
                        onClick={() => {console.log("11")}}
                        style={{padding:"10px 0 10px 20px"}}
                    >
                    我的关注
                    </List.Item>
                </List>
                <List style={{marginTop:"30px"}}>
                    <List.Item
                        arrow="horizontal"
                        thumb="./images/collect-active.svg"
                        multipleLine
                        onClick={()=>{}}
                        style={{padding:"10px 0 10px 20px"}}
                    >
                    我的收藏
                    </List.Item>
                </List>
                <List style={{marginTop:"30px"}}>
                    <List.Item
                        arrow="horizontal"
                        thumb="./images/yijianfankui.svg"
                        multipleLine
                        onClick={() => {}}
                        style={{padding:"10px 0 10px 20px"}}
                    >
                    意见反馈
                    </List.Item>
                </List>
                <List style={{marginTop:"30px"}}>
                    <List.Item
                        arrow="horizontal"
                        thumb="./images/ruanjianshezhi.svg"
                        multipleLine
                        onClick={() => {}}
                        style={{padding:"10px 0 10px 20px"}}
                    >
                    软件设置
                    </List.Item>
                </List>
            </div>
        )
    }
}
