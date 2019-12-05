import React, { Component } from 'react'
import { NavBar, Icon,List,Button, WhiteSpace, WingBlank} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;



export default class Tongyong extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    state = {
        disabled: false,
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
                        通用设置
                    </NavBar>
                <li>    
                <List>
                    <Item>账号与安全</Item>
                </List>
                <hr/>
                    <List style={{marginTop:20}} >
                        <Item  >新消息提醒</Item>
                    </List>
                    <List  >
                        <Item >勿扰模式</Item>
                    </List> 
                    <List  >
                        <Item >通用</Item>
                    </List> 
                    <List  >
                        <Item >隐私</Item>
                    </List> 
                    <hr/> 
                    <List  style={{marginTop:20}}>
                        <Item extra={''}>关于</Item>
                    </List>
                    <List  >
                        <Item extra={''}>帮助与反馈</Item>
                    </List> 
                    <hr/>
                <WingBlank>
                    <Button style={{borderRadius:20,background:'#f1f372',marginTop:30}}>退出登录</Button><WhiteSpace />
                </WingBlank>
                </li>
            </ul>
               
        )
    }
}