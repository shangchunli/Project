import React, { Component } from 'react'
import "./Health.css"

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            tel:"",
            pwd:""
        }
    }
    handle=(pathname)=>{
        window.location.href="/reg";
    }
    handle1=(pathname)=>{
        window.location.href="/home";
    }
    inputChange=()=>{
        let val1=this.refs.username.value;
        let val2=this.refs.pwd.value;
        this.setState({
            tel:val1,
            pwd:val2
        })
    }
    loginn=()=>{
        fetch("http://192.168.43.217:5001/yhlogin")
        .then(res=>res.json())
        .then((res)=>{
            let i=0;
            res.map((item)=>{
                if(this.state.tel===item.telphone&&this.state.pwd===item.pwd){
                    i++;
                    alert("登录成功")
                }
            })
            if(!i){
                alert("用户名或密码错误")
            }
    
            
        })
    }
   
    render() {
         return (
          <div>
              <div>
              <div style={{backgroundColor:"transparent",width:"100%"
                  ,height:630,opacity:0.4,
              background:"url('./images/beijing/four.jpg')"}}>

                  </div>
              </div>
            <div style={{zIndex:1,position:"fixed",top:130}}>
            <form class="myform">
                <img src="./images/touxiang.jpg" style={{borderRadius:50,
                width:100,height:100}}/>
                <input type="text"  onChange={()=>this.inputChange()}
                placeholder="帐号" class="el-input__inner"  ref="username" />
                
                <input type="password"  onChange={()=>this.inputChange()}
                placeholder="密码" class="el-input__inner"  ref="pwd" />
            
                <button type="button" class="el-button login-btn-submit el-button--primary" id="login"
                onClick={()=>this.loginn()}
                onClick={()=>this.handle1('')}
                ><span>登录</span></button>
                <h4 onClick={()=>this.handle('')}>新用户点击注册</h4>
            </form>
            </div>    
            
          </div>
                
        )
    }
}


