import React, { Component } from 'react'
import { List, InputItem,Button,NavBar } from 'antd-mobile';
import { createForm } from 'rc-form';

//个人页面
export default class Unique extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#fff',
                    color:'#000',
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    个人页面
                </NavBar>

                <form>
      <List>
        <img src='./images/unique/shaosiming.jpg' alt='头像'style={{
            width:'40%',height:'20',textAlign:'center',marginLeft:'30%',marginTop:'15%',marginBottom:'5%'
        }}/>
        <InputItem clear placeholder="请输入你的昵称" type='text' name='username'>
            昵称
        </InputItem>
        <InputItem placeholder="请输入你的性别" type="text" name='sex'>
          性别
        </InputItem>
        <InputItem placeholder="请输入你的性别" type="text" name='phone'>
          手机号
        </InputItem>
        <InputItem placeholder="请输入你的性别" type="text" name='email'>
          邮箱
        </InputItem>
        <InputItem placeholder="请输入你的性别" type="text" name='introduction'>
          简介
        </InputItem>
        <List.Item >
          <Button  style={{backgroundColor:'yellow',marginTop:'5%'}}  onClick={()=>{}}>Submit</Button>
          <Button  style={{ marginLeft: '2.5px' ,marginTop:'3%'}} onClick={()=>{}}>Reset</Button>
        </List.Item>
      </List>
    </form>
            </div>
        )
    }
}
