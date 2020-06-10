import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'
import { Scrollbars } from 'react-custom-scrollbars';

class TopicDetail extends Component {
    goBack = () => {
        this.props.history.go(-1);
    }
    constructor() {
        super();
        this.state = {
            data: '',
            topicid: '',
            userId: cookie.load('userId'),
            pingluns: '',
            tips: '',
            plstate: false
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        fetch('http://localhost:5001/topicxiangqing', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                topicid: this.props.match.params.id
            })
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    data: res

                });
            })
        fetch('http://localhost:5001/showtcomment', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                topicid: this.props.match.params.id
            })
        })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    tips: res,
                });
            })

    }
    //获取评论内容
    inputChange = (e) => {
        e.stopPropagation();
        let val1 = this.refs.pinglun.value;
        this.setState({
            pingluns: val1,
        })
        console.log(this.state.pingluns);
    }
    //添加评论以及更新评论内容
    crital = () => {
        fetch('http://localhost:5001/addtcomment', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userId: this.state.userId,
                topicid: this.props.match.params.id,
                plcontent: this.state.pingluns
            })
        })
            .then(res => res.text())
            .then((res) => {
                console.log(res);
                if (res == 'tcomment success') {
                    fetch('http://localhost:5001/showtcomment', {
                        method: 'POST',//post请求 
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body: JSON.stringify({
                            topicid: this.props.match.params.id
                        })
                    })
                        .then(res => res.json())
                        .then((res) => {
                            console.log(res);
                            this.setState({
                                tips: res,
                            });
                        })
                    this.setState({
                        plstate: true
                    })
                }
            })
    }
    render() {
        return (
            <div
            // className='bgimg'
            // style={{background:URL('https://s1.ax1x.com/2020/05/14/YD9IRP.jpg')}}
            >
                <NavBar
                    icon={<Icon type="left" onClick={this.goBack} />}
                    style={{
                        backgroundColor: '#fff',
                        color: '#000',
                        position: "fixed",
                        top: "0px",
                        zIndex: 100,
                        width: "100%"
                    }}
                >
                    话题讨论
                </NavBar>
                {/* 话题主题 */}
                <div
                    className='bgimg'

                    style={{
                        marginTop: '50px', backgroundColor: 'white',
                        width: '100%', marginBottom:'3px'
                        // borderBottom: '2px solid lightgray'
                        // zIndex: 200, position: "fixed"
                    }}>
                    {
                        (this.state.data || []).map(item =>
                            <div >
                                <h1 style={{
                                    textAlign: "center", margin: "0 auto", padding: '20px 0'
                                }}>{item.tcontent}</h1>
                            </div>
                        )
                    }
                </div>
                {/* 话题评论 */}
                <div style={{ marginTop: '1%' }}>
                    <Scrollbars style={{ height: '450px' }}>
                        {
                            (this.state.tips || []).map(item =>
                                <List.Item id={item.plid}>
                                    <img
                                        src={item.head}
                                        style={{ height: 40, width: 40, marginRight: '5%', borderRadius: 40 }} />
                                    {/* {item.telphone} */}
                                    <span style={{ marginRight: '5%' }} >
                                        {item.telphone}
                                    </span>
                                    <span style={{ color: 'gray', fontSize: '13px' }}>{item.pltime}</span>
                                    <span style={{ marginLeft: '5%' }}>
                                        <img
                                            style={{ width: '5%', height: '5%' }}
                                            src="https://s1.ax1x.com/2020/04/21/JGLIx0.png"
                                        />
                                    </span>
                                    <List.Item.Brief style={{ marginLeft: '20%', marginTop: '0%' }}>
                                        <span>{item.plcontent}</span>
                                    </List.Item.Brief>
                                </List.Item>
                                // </div>
                            )
                        }
                        {/* </div> */}
                    </Scrollbars>
                </div>
                {/* 发表话题评论 */}
                <List.Item.Brief style={{ position: 'fixed', zIndex: 100, bottom: 10, width: '100%' }}>
                    <div style={{
                        marginTop: 20, flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'center', width: '100%'
                    }}>
                        <span>
                            <input
                                style={{
                                    marginLeft: "2%", marginRight: "2%",
                                    width: '80%', height: 40, borderRadius: 10,
                                    borderColor: '#00ccff'
                                }}
                                type='text' ref='pinglun' placeholder='发表一下你的看法吧~'
                                onChange={(e) => this.inputChange(e)}

                            />
                        </span>
                        <span style={{ marginLeft: 10 }}>
                            <button onClick={this.crital}
                                style={{
                                    borderRadius: 5, width: '11%',
                                    height: 40, backgroundColor: '#00ccff',
                                    borderColor: '#00ccff', color: 'white'
                                }}>
                                发送
                            </button>
                        </span>
                    </div>
                </List.Item.Brief>


            </div>
        )
    }
}
export default withRouter(TopicDetail)
