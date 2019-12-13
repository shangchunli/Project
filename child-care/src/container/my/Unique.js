import React, { Component } from 'react'
import { List, InputItem,Button,NavBar,Icon } from 'antd-mobile';

//个人页面
export default class Unique extends Component {
  constructor(){
    super();
    this.state={
      // username:'',
      // sex:'',
      // phone:'',
      // email:'',
      // mood:''
      data:''
    }
  }
  componentDidMount(){
    fetch('http://192.168.43.217:5001/')
    .then(res=>res.text())
    .then((res)=>{
      console.log(res);
      // this.setState({
      //   username:'111',
      //   data:res
      // })
    })
  }
  goBack=()=>{
    console.log(this.refs.butt)
    window.history.go(-1);
    fetch('http://192.168.43.217:5001/',{
      method: 'POST',//post请求 
  headers: { 
  'Content-Type': 'application/json;charset=UTF-8' 
  }, 
  body: JSON.stringify({
    username:'丫丫妈妈',
    phone:'15054326879',
    email:'1503651@qq.com',
    mood:'陌上人如玉'
  })
  })
  .then(res=>res.text())
  .then((res)=>{
    console.log(res);
  })
  
}
  handle=(pathname)=>{
    // console.log(this.refs.butt)
    // window.location.href="/my/"+pathname;
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
                    个人页面
                </NavBar>

                <form>
      <List>
        <img src='https://s2.ax1x.com/2019/12/05/Q3FUq1.jpg' alt='头像'style={{
            width:'40%',height:'20',textAlign:'center',borderRadius:'50%',
            marginLeft:'30%',marginTop:'15%',marginBottom:'5%'
        }}/>
        <InputItem value={this.state.username}
        clear placeholder="请输入你的昵称" type='text' name='username'>
            昵称
        </InputItem>
        <InputItem placeholder="请输入你的性别" type="text" name='sex'>
          性别
        </InputItem>
        <InputItem placeholder="请输入你的手机号" type="text" name='phone'>
          手机号
        </InputItem>
        <InputItem placeholder="请输入你的邮箱" type="text" name='email'>
          邮箱
        </InputItem>
        <InputItem placeholder="请输入你的心情" type="text" name='mood'>
          心情
        </InputItem>
        <List.Item ref='butt'>
          <Button  onClick={()=>{this.goBack()}}
          style={{backgroundColor:'#fff',marginTop:'5%'}}  >Submit</Button>
          <Button  style={{ marginLeft: '2.5px' ,marginTop:'3%'}} onClick={()=>{this.handle('unique')}}>Reset</Button>
        </List.Item>
      </List>
    </form>
            </div>
        )
    }
}
