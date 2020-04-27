import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WingBlank, WhiteSpace,
    Flex,List} from 'antd-mobile';
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'
import ShowBottom from './ShowBottom'
class My extends Component {
    constructor(){
        super();
        this.state={
            data:[{name:'',mood:''}]
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            fetch('http://localhost:5001/my',{
                method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
              userId:cookie.load('userId'),
            })
            })
            .then(res=>res.json())
            .then((res)=>{
              console.log(res);
              this.setState({
                  data:res
              })
            })
          
        },0)
    }
    handle=(pathname)=>{
        this.props.history.push("/my/"+pathname);
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <ShowBottom />
                <NavBar
                    style={{backgroundColor:'#fff',color:'#000',
                    position:"fixed",top:0,zIndex:100,width:"100%",
                   fontWeight:"bolder"}}
                >
                    我的
                </NavBar>
                <WhiteSpace/>
                <div>
                    {
                        this.state.data.map(item=>
                            <List style={{marginTop:"40px"}}>
                    <List.Item
                        arrow="horizontal"
                        multipleLine
                        onClick={()=>{this.handle('unique')}}
                    >
                        <img src={item.head} 
                            style={{height:100,width:100,marginRight:25,borderRadius:50}}/>
                        {item.name} <List.Item.Brief style={{marginLeft:125,marginTop:-30,marginBottom:30}}>
                            {item.mood}</List.Item.Brief>
                    </List.Item>
                </List>
                        )
                    }
                    
                </div>
                <List style={{marginTop:"30px"}}>
                    <List.Item
                        arrow="horizontal"
                        thumb="./images/guanzhu.svg"
                        multipleLine
                        onClick={()=>{this.handle('publish')}}
                        style={{padding:"10px 0 10px 20px"}}
                    >
                    我的发布
                    </List.Item>
                </List>
                <List style={{marginTop:"30px"}}>
                    <List.Item
                        arrow="horizontal"
                        thumb="./images/collect-active.svg"
                        multipleLine
                        onClick={()=>{this.handle('collect')}}
                        // onClick={()=>{}}
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
                        onClick={()=>{this.handle('tongyong')}}
                        style={{padding:"10px 0 10px 20px"}}
                    >
                    软件设置
                    </List.Item>
                </List>
            </div>
        )
    }
}
export default withRouter(My) 