import React, { Component } from 'react'
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'

class Topic extends Component {
    handle = ()=>{
        // console.log('aa');
        this.props.history.push('/wiki/topic/add');
    }
    componentDidMount(){
        // 向后台发送渲染话题接口，发送数据：当前用户，返回数据：所有的话题
        fetch("http://localhost:5001/topic",
            {
                method:"POST",
                header:{
                    "Content-Type":'application/json;charset=UTF-8'
                },
                body:JSON.stringify({
                    userId:cookie.load("userId")
                })
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        fontWeight: "bolder",
                        position: "fixed", zIndex: 100, width: "100%", top: 0
                    }}
                    rightContent={[
                        <div
                            style={{ marginRight: '6px', fontSize: '13px', color: 'blue' }}
                            dangerouslySetInnerHTML={{ __html: "创建话题" }}
                            onClick = {() => {this.handle()}}
                        />,
                    ]}
                >
                    话题
                </NavBar>
                
            </div>
        )
    }
}

export default withRouter(Topic);