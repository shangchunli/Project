import React, { Component } from 'react'
import {ImagePicker, SegmentedControl,List,WingBlank,Button} from "antd-mobile"
import "./Health.css"
import {withRouter} from 'react-router-dom'

const data = [];
class Register extends Component {
    constructor(){
        super();
        this.state={
            names:"",
            tel:"",
            email:"",
            pwd1:"",
            pwd2:"",
            files: data,
            multiple: false,
        }
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
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
    register=()=>{
        if(this.state.pwd1!==this.state.pwd2){
            alert("密码不一致");
        }else if(this.state.pwd1==''){
            alert("请填写密码")
        }else{
            console.log(111111111111)
            fetch('http://192.168.43.217:5001/register',{
                method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                names:this.state.names,
                tel:this.state.tel,
                email:this.state.email,
                pwd1:this.state.pwd1,
                files:this.state.files
            })
            })
            .then(res=>res.text())
            .then((res)=>{
                console.log(res);
                if(res=="success"){
                    alert("您已经注册成功，请登录");
                    this.props.history.push("/login");
                }else{
                    alert("请注册")
                }
            })

        }
    }
    render() {
        const { files } = this.state;
        let str;
        let str2;
        if(JSON.stringify(files)=="[]"){
             str=<ImagePicker
            style={{marginLeft:"30%",width:"200%"}}
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 100}
            mutiple={this.state.multiple}
            />
            console.log(files);
        }else{
            str=<img src={files[0].url} alt="Base64 encoded image"
            height="200" width="200" style={{borderRadius:"80%",
                width:"100%",height:"100%"
            }}
            />
        }
        return (   
            <div  
            action="http://192.168.43.217:5001/register" method="POST">
                <div style={{height:700,opacity:0.6,position:"fixed",
                top:0,width:"100%",
                    background:"url('./images/beijing/login.jpg')"
            }}>
                </div >
                <div style={{top:0,marginTop:10,position:"fixed",zIndex:100,
            width:"100%",height:400}}>
                
                {/* <List style={{width:"80%",backgroundColor:"transparent"}} > */}
                        <List.Item  style={{margin:"0 auto",backgroundColor:"transparent",width:"50%",}}>
                        {
                            str
                        }
                        </List.Item>
                        
                    {/* </List> */}
                {/* <img src="./images/touxiang.jpg" style={{width:100,height:100,
                borderRadius:50,marginLeft:"30%",marginBottom:50}}/> */}

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
      size="small" inline>提交</Button>
      
     
      </div>
            </div>
        )
    }
}

export default withRouter(Register);



