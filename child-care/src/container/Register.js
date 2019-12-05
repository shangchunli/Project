import React, { Component } from 'react'
import {List,WingBlank,Button} from "antd-mobile"
import "./Health.css"
export default class Register extends Component {
    constructor(){
        super();
        this.state={
            names:"",
            tel:"",
            email:"",
            pwd1:"",
            pwd2:""
        }
    }
    inputChange=()=>{
        let val1=this.refs.username.value;
        let val2=this.refs.pwd1.value;
        let val3=this.refs.tel.value;
        let val4=this.refs.email.value;
        let val5=this.refs.pwd2.value;
        
        this.setState({
            names:val1,
            pwd1:val2,
            tel:val3,
            email:val4,
            pwd2:val5
        })
        
    }
    // handle=(pathname)=>{
    //     window.location.href="/login/"+pathname;
    // }
    register=()=>{
        if(this.state.pwd1!==this.state.pwd2){
            alert("密码不一致");
        }else if(this.state.pwd1==''){
            alert("请注册")
        }  else{
            fetch('http://192.168.43.217:5001/register',{
                method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify(this.state)
            })
            .then(res=>res.text())
            .then((res)=>{
                console.log(res);
                if(res=="success"){
                    alert("您已经注册成功，请登录");
                    this.props.history.push("/login");
                }else{
                    alert("请登录")
                }
            })

        }
       
    }
    render() {
        return (   
            <div  
            action="http://192.168.43.217:5001/register" method="POST">
                <div style={{height:700,opacity:0.6,position:"fixed",
                top:0,width:"100%",
                    background:"url('./images/beijing/login.jpg')"
            }}>
                </div >
                <div style={{top:0,marginTop:50,position:"fixed",zIndex:100,
            width:"100%"}}>
                <img src="./images/touxiang.jpg" style={{width:100,height:100,
                borderRadius:50,marginLeft:"30%",marginBottom:50}}/>

                 <List style={{width:"80%",margin:"0 auto"}} className="register">
                    <List.Item
                    thumb="https://s2.ax1x.com/2019/12/05/Q3N9Ln.png"
                    >
                        <input type="text" placeholder="昵称" name="names"
                        onChange={()=>this.inputChange()} ref="username"/>
                    </List.Item>
                </List>

                <List style={{width:"80%",margin:"0 auto",paddingTop:20}} className="register">
                    <List.Item
                    thumb="https://s2.ax1x.com/2019/12/05/Q3tLIf.png"
                    >
                        <input type="telphone" placeholder="手机号" name="tel"
                        onChange={()=>this.inputChange()} ref="tel"/>
                    </List.Item>
                </List>

                <List style={{width:"80%",margin:"0 auto",paddingTop:20}} className="register">
                    <List.Item
                    thumb="https://s2.ax1x.com/2019/12/05/Q3UXvQ.png"
                    >
                        <input type="email" placeholder="邮箱" name="email"
                        onChange={()=>this.inputChange()} ref="email"/>
                    </List.Item>
                </List>

                <List style={{width:"80%",margin:"0 auto",paddingTop:20}} className="register">
                    <List.Item
                    thumb="https://s2.ax1x.com/2019/12/05/Q3apEq.png"
                    >
                        <input type="password" placeholder="密码" name="pwd1"
                        onChange={()=>this.inputChange()} ref="pwd1"/>
                    </List.Item>
                </List>

                <List style={{width:"80%",margin:"0 auto",paddingTop:20}} className="register">
                    <List.Item
                    thumb="https://s2.ax1x.com/2019/12/05/Q3apEq.png"
                    >
                        <input type="password" placeholder="密码" name="pwd2"
                        onChange={()=>this.inputChange()} ref="pwd2"/>
                    </List.Item>
                </List>
             <Button type="primary"  style={{width:"30%",height:30,marginLeft:"30%",marginTop:30}}
      onClick={this.register}
    //   onClick={()=>{this.handle('')}}
      size="small" inline>提交</Button>
      
     
      </div>
            </div>
        )
    }
}



