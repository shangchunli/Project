import React, { Component } from 'react'
import { NavBar, Icon,List,Button, WhiteSpace, WingBlank} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import cookie from 'react-cookies'
const Item = List.Item;
class Tongyong extends Component {
//     点击返回上一页
    goBack=()=>{
        this.props.history.go(-1);
    }
//     点击退出登录时跳转到登录页并清除本地存储的userId
    handle=()=>{
        this.props.history.push('/');
        cookie.remove('userId');
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
                    <Button onClick={()=>this.handle('/')}
                    style={{borderRadius:20,background:'#d81e06',marginTop:30}}>退出登录</Button><WhiteSpace />
                </WingBlank>
                </li>
            </ul>
               
        )
    }
}
// 使用withRouter将当前组件包裹使得this.props不为空
export default withRouter(Tongyong)
