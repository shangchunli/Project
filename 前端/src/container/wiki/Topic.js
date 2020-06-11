import React, { Component } from 'react'
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge, List } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'

class Topic extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    handle = () => {
        // console.log('aa');
        this.props.history.push('/wiki/topic/add');
    }
    componentDidMount() {
        // 向后台发送渲染话题接口，发送数据：当前用户，返回数据：所有的话题的主题+用户头像
        fetch('http://localhost:5001/topic', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userId: cookie.load('userId')
            })
            })
            .then(res => res.json())
            .then((res) => {
                // console.log(res);
                this.setState({
                    data:res
                },()=>{console.log(this.state.data)}
                )  
                
            })
            
    }
    too = (id) => {
        console.log(id);
        this.props.history.push('/wiki/topic/detail/'+id);
    }
    goBack=()=>{
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        fontWeight: "bolder",
                        position: "fixed", zIndex: 100, width: "100%", top: 0,
                        marginTop:0
                    }}
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    rightContent={[
                        <div
                            style={{ marginRight: '6px', fontSize: '13px',
                            backgroundColor: 'rgb(125,185,222)',width:'50%',height:'50%',
                            color:'#fff',borderRadius:'9%' ,textAlign:'center',paddingTop:'10px'}}
                            dangerouslySetInnerHTML={{ __html: "创建话题" }}
                            onClick={() => { this.handle() }}
                        />,
                    ]}
                >
                    话题
                </NavBar>
                <div style={{marginTop:49}}>
                    {
                        (this.state.data||[]).map(item=>
                            
                                        <List onClick={()=>this.too(item.topicid)}>
                                            <List.Item style={{ width:'100%',marginTop: 0, color: "#000" }}>
                                                <img
                                                    src={item.headimg}
                                                    alt="发起话题人头像"
                                                    style={{ width: '40px', height: '40px', borderRadius: '5px' ,float:'left'}}
                                                />
                                                <List.Item.Brief
                                                    style={{ color: "#000", width: '75%',paddingLeft:10}}>
                                                    {item.tcontent}
                                                </List.Item.Brief>
                                            </List.Item>
                                        </List>
                                    
                                
                            
                        )                    
                    }
                </div>


            </div>
        )
    }
}

export default withRouter(Topic);