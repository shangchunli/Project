import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge, List, InputItem } from 'antd-mobile';

import cookie from 'react-cookies'

class Addtopic extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputInner:''
        }
    }
    
    inputChange = (e) => {
        console.log("change");
//         获取主题内容
        // console.log(e.target.value);
        this.setState({
            inputInner:e.target.value
        })
    }
    handle = () => {
        
//         路由跳转到topic页面
        this.props.history.push('/wiki/topic');
//         获取当前年月日
        var today = new Date(),
            date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
        console.log(date);
        // 向后台发送添加话题接口，发送数据：当前用户+话题题目+话题创建时间（年月日），返回数据：添加话题成功
        fetch("http://localhost:5001/addtopic",
            {
                method:"POST",
                header:{
                    "Content-Type":'application/json;charset=UTF-8'
                },
                body:JSON.stringify({
                    topic:this.state.inputInner,
                    topicPublicDate:date,
                    userId:cookie.load("userId")
                })
        })
        .then(res=>res.text())
        .then((res)=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div >
                <NavBar
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        fontWeight: "bolder",
                        position: "fixed", zIndex: 100, width: "100%", top: 0
                    }}
                    rightContent={[
                        <div
                            style={{ marginRight: '6px', fontSize: '13px', color: 'blue' }}
                            dangerouslySetInnerHTML={{ __html: "完成" }}
                            onClick = {() => {this.handle()}}
                        />,
                    ]}
                >
                    创建话题
                </NavBar>
                <div>
                    <input 
                        style={{marginTop:'15%',width:"100%",height:"500px",}} 
                        onChange = {(e) => this.inputChange(e)}
                        placeholder = '请输入您的话题内容吧~'
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Addtopic);
