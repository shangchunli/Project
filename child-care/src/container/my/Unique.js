import React, { Component } from 'react'
import { List, InputItem,Button,NavBar,Icon } from 'antd-mobile';
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'

//个人页面
class Unique extends Component {
  constructor(){
    super();
    this.state={
      data:[{name:'昵称', sex:'性别',mood:'心情',telphone:'手机号',email:'邮箱'}]
    }
  }
  componentDidMount(){
    setTimeout(()=>{ fetch("http://192.168.43.217:5001/me",{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8' 
                }, 
                body: JSON.stringify({
                    userId:cookie.load('userId'),
                })  
        }
        ).then(res=>res.json())
        .then((res)=>{
          console.log(res);
            this.setState({
              data:res,
            })
        })
        
      },0)
  }
  goBack=()=>{
    this.props.history.go(-1);

  }
  submmitMessage=()=>{
    console.log(this.state.data)
    fetch("http://192.168.43.217:5001/meupdate",{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8' 
                }, 
                body: JSON.stringify({
                    userId:cookie.load('userId'),
                    usename:this.refs.usename.state.value,
                    mood:this.refs.mood.state.value,
                    sex:this.refs.sex.state.value               
                })  
        }
        ).then(res=>res.text())
        .then((res)=>{
          console.log(res);
          if(res=='SUCCESS'){
                this.props.history.go(-1);
          }
        })
  
}
content=()=>{
  console.log(this.refs.usename.state.value)
  this.setState({
    usename:this.refs.usename.state.value,
    mood:this.refs.mood.state.value,
    sex:this.refs.sex.state.value
  })
}
    render() {
      // console.log(this.state.data)
        return (
            <div style={{backgroundColor:'#fff',width:'100%',height:'700px'}}>
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
        
        {
          this.state.data.map((item)=>{
            // console.log(item)
            return(
              <div>
              <img src={item.head} alt='头像'style={{
            width:'40%',height:'40%',textAlign:'center',borderRadius:'100%',
            marginLeft:'30%',marginTop:'15%',marginBottom:'5%'
        }}/>
            <div style={{marginTop:'10%'}} ref='all'>
        <InputItem  onChange={this.content} placeholder={item.name}
        clear  type='text' ref='usename'>
            昵称
        </InputItem>

        <InputItem  placeholder={item.sex} contentEditable='true'
        type="text" onChange={this.content} clear
         ref='sex'>
          性别
        </InputItem>
        <InputItem placeholder={item.mood}
         type="text" onChange={this.content}
        ref='mood'>
          心情
        </InputItem>

        <InputItem placeholder={item.telphone} 
        type="text" 
        ref='phone'>
          手机号
        </InputItem>
        <InputItem placeholder={item.email} type="text" 
        >
          邮箱
        </InputItem>
        </div>
        </div>
        ) 
           } 
            )
        }
        
        <List.Item ref='butt'>
          <Button  onClick={()=>{this.submmitMessage()}}
          style={{backgroundColor:'#fff',marginTop:'5%'}}>提交</Button>
          {/* <Button  style={{ marginLeft: '2.5px' ,marginTop:'3%'}} onClick={()=>{this.handle('unique')}}>提交</Button> */}
        </List.Item>
      </List>
    </form>
            </div>
        )
    }
}
export default withRouter(Unique);