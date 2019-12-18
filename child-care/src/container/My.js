import React, { Component } from 'react'
<<<<<<< HEAD
import { NavBar, Icon, Tabs,WingBlank, WhiteSpace,
    Flex,List} from 'antd-mobile';
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'

class My extends Component {
=======
import { NavBar,  WhiteSpace,List} from 'antd-mobile';
    import cookie from 'react-cookies'

export default class My extends Component {
>>>>>>> cd2f11841ca90ce4abb0e187716826b3281c72d3
    constructor(){
        super();
        this.state={
            data:[{name:'',mood:''}]
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            fetch('http://192.168.43.217:5001/my',{
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
<<<<<<< HEAD
                {/* <List style={{marginTop:"30px"}}>
=======
                <List style={{marginTop:"30px"}}>
>>>>>>> cd2f11841ca90ce4abb0e187716826b3281c72d3
                    <List.Item
                        arrow="horizontal"
                        thumb="./images/guanzhu.svg"
                        multipleLine
                        onClick={()=>{this.handle('focus')}}
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