import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile';
import './detail.css'
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'
import { Scrollbars } from 'react-custom-scrollbars';



class Detail extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            tips: '',
            isKeep: '',
            isGive: '',
            chapterid: '',
            pingluns: '',
            plcount: '',
            dzcount: '',
            sccount: '',
            plstate: false,
            scbycuser: '',
            dzbycuser: '',
            showpl: 'discoverpl',
            userId: cookie.load('userId'),

        }
    }
    goBack = () => {
        this.props.history.go(-1);
    }
    componentDidMount() {
        // 获取当前用户收藏的帖子以实现页面的图标状态保持
        fetch('http://localhost:5001/getscbycuser', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                user: cookie.load('userId')
            })
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    scbycuser: res
                });
                if (res.findIndex(item => item.chapterid === Number(this.props.match.params.id)) == -1) {
                    this.setState({
                        isKeep: false
                    })
                } else {
                    this.setState({
                        isKeep: true
                    })
                }
            })
        // 获取当前用户点赞的帖子以实现页面的图标状态保持
        fetch('http://localhost:5001/getdzbycuser', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                user: cookie.load('userId')
            })
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    dzbycuser: res
                });
                if (res.findIndex(item => item.chapterid === Number(this.props.match.params.id)) == -1) {
                    this.setState({
                        isGive: false
                    },()=>{console.log(this.state.isGive)})
                } else {
                    this.setState({
                        isGive: true
                    },()=>{console.log(this.state.isGive)})
                }
            })
        console.log(this.state.scbycuser);
        // 获取帖子点赞数、评论数、帖子的详情
        // console.log(this.props.match.params.id);
        fetch('http://localhost:5001/xiangqing', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                chapterId: this.props.match.params.id
            })
        })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    data: res,
                    dzcount: res[0].dzcount,
                    sccount: res[0].sccount,
                    chapterid: this.props.match.params.id
                });
            })
        fetch('http://localhost:5001/showcomment', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                chapterId: this.props.match.params.id
            })
        })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    tips: res,
                });
            })

        fetch('http://localhost:5001/plcount', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                chapterId: this.props.match.params.id
            })
        })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    plcount: res.length
                })
            })
    }

    change1 = (idx, e) => {
        e.stopPropagation();
        let b = !this.state.isKeep;
        this.setState({
            isKeep: b,

        })
        if (this.state.isKeep == false) {
            // if(this.state.scbycuser.findIndex(item=>item.chapterid === this.props.match.p)){
            e.target.src = 'https://s2.ax1x.com/2019/12/11/QrKe4s.png '
            fetch('http://localhost:5001/cookie', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    userId: this.state.userId,
                    chapterId: this.state.chapterid
                })
            })
                .then(res => res.text())
                .then((res) => {
                    console.log(res);
                })
            fetch('http://localhost:5001/addsccount', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    chapterId: this.state.chapterid,
                    sccount: this.state.sccount
                })
            })
                .then(res => res.text())
                .then((res) => {
                    if (res == 'sc success') {
                        fetch('http://localhost:5001/showsccount', {
                            method: 'POST',//post请求 
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8'
                            },
                            body: JSON.stringify({
                                // userId:this.state.userId,  
                                chapterId: this.props.match.params.id
                            })
                        })
                            .then(res => res.json())
                            .then((res) => {
                                console.log(res);
                                this.setState({
                                    sccount: res[0].sccount
                                })
                            })

                    }
                })
        } else {
            e.target.src = 'https://s2.ax1x.com/2019/12/04/Q1fu7T.png';
            fetch('http://localhost:5001/unclloection', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    userId: this.state.userId,
                    chapterId: this.state.chapterid
                })
            })
                .then(res => res.text())
                .then((res) => {
                    console.log(res);
                });
            fetch('http://localhost:5001/lesssccount', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    chapterId: this.state.chapterid,
                    sccount: this.state.sccount
                })
            })
                .then(res => res.text())
                .then((res) => {
                    if (res == 'lesssc success') {
                        fetch('http://localhost:5001/showsccount', {
                            method: 'POST',//post请求 
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8'
                            },
                            body: JSON.stringify({
                                // userId:this.state.userId,  
                                chapterId: this.props.match.params.id
                            })
                        })
                            .then(res => res.json())
                            .then((res) => {
                                console.log(res);
                                this.setState({
                                    sccount: res[0].sccount
                                })
                            })
                    }
                })


        }
    }

    //获取评论内容
    inputChange = (e) => {
        e.stopPropagation();
        let val1 = this.refs.pinglun.value;
        this.setState({
            pingluns: val1,
        }, console.log(this.state.pingluns))
    }
    //添加评论以及更新评论内容
    crital = () => {
        // if(this.state.pinhluns != null){
        fetch('http://localhost:5001/addcomment', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userId: this.state.userId,
                chapterId: this.state.chapterid,
                plcontent: this.state.pingluns
            })
        })
            .then(res => res.text())
            .then((res) => {
                console.log(res);
                if (res == ' comment success') {
                    fetch('http://localhost:5001/showcomment', {
                        method: 'POST',//post请求 
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body: JSON.stringify({
                            chapterId: this.props.match.params.id
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
                    }, function () {
                        console.log(this.state.plstate);
                        if (this.state.plstate) {
                            console.log('333')
                            fetch('http://localhost:5001/plcount', {
                                method: 'POST',//post请求 
                                headers: {
                                    'Content-Type': 'application/json;charset=UTF-8'
                                },
                                body: JSON.stringify({
                                    chapterId: this.state.chapterid,
                                    plstate: this.state.plstate
                                })
                            })
                                .then(res => res.json())
                                .then((res) => {
                                    console.log('1111')
                                    console.log(res);
                                    console.log(res.length);
                                    this.setState({
                                        plcount: res.length
                                    })
                                })
                        }
                    })
                } else {
                    alert('评论失败')
                }
            })
        // }else{
        //     alert('评论内容不能为空');
        // }
    }
    //点赞数
    change2 = (idx, e) => {
        e.stopPropagation();
        let c = this.state.isGive;
        this.setState({
            isGive: !c,
            chapterid: this.props.match.params.id
        })
        console.log(this.state.chapterid);
        if (this.state.isGive == false) {

            e.target.src = 'https://s1.ax1x.com/2020/04/21/JGLB8I.png ';
            // 在点赞表中添加点赞的帖子、当前用户、id
            fetch('http://localhost:5001/addazinfo', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    chapterId: this.state.chapterid,
                    userId: this.state.userId
                })
            })
                .then(res => res.text())
                .then((res) => {
                    console.log(res);
                })
            // 点赞数目加1
            fetch('http://localhost:5001/dzcounnt', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    chapterId: this.state.chapterid,
                    dzcount: this.state.dzcount
                })
            })
                .then(res => res.text())
                .then((res) => {
                    console.log(res);
                    fetch('http://localhost:5001/showdzcount', {
                        method: 'POST',//post请求 
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body: JSON.stringify({
                            // userId:this.state.userId,  
                            chapterId: this.props.match.params.id
                        })
                    })
                        .then(res => res.json())
                        .then((res) => {
                            console.log(res);
                            this.setState({
                                dzcount: res[0].dzcount
                            });

                        })
                });
        } else {
            e.target.src = 'https://s1.ax1x.com/2020/04/21/JGLIx0.png';
            // 在点赞表中删除相关信息
            fetch('http://localhost:5001/lessdzinfo', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    chapterId: this.state.chapterid,
                    userId: this.state.userId
                })
            })
                .then(res => res.text())
                .then((res) => {
                    console.log(res);
                })
            // 点赞数目减1
            fetch('http://localhost:5001/lessdzcounnt', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    chapterId: this.state.chapterid,
                    dzcount: this.state.dzcount
                })
            })
                .then(res => res.text())
                .then((res) => {
                    console.log(res);
                    fetch('http://localhost:5001/showdzcount', {
                        method: 'POST',//post请求 
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body: JSON.stringify({
                            // userId:this.state.userId,  
                            chapterId: this.props.match.params.id
                        })
                    })
                        .then(res => res.json())
                        .then((res) => {
                            console.log(res);
                            this.setState({
                                dzcount: res[0].dzcount
                            });

                        })
                })

        }
    }
    del = (idx) => {
        fetch('http://localhost:5001/delcom', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                plid: idx
            })
        })
            .then(res => res.text())
            .then((res) => {
                if (res == 'del success') {
                    fetch('http://localhost:5001/showcomment', {
                        method: 'POST',//post请求 
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body: JSON.stringify({
                            chapterId: this.props.match.params.id
                        })
                    })
                        .then(res => res.json())
                        .then((res) => {
                            console.log(res);
                            this.setState({
                                tips: res,
                            });
                        })
                    fetch('http://localhost:5001/plcount', {
                        method: 'POST',//post请求 
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body: JSON.stringify({
                            chapterId: this.state.chapterid,
                            plstate: this.state.plstate
                        })
                    })
                        .then(res => res.json())
                        .then((res) => {
                            console.log('1111')
                            console.log(res);
                            console.log(res.length);
                            this.setState({
                                plcount: res.length
                            })
                        })
                }
            })
    }
    // 显示评论
    showpl = () => {
        this.setState({
            showpl: 'showpl'
        }, () => { console.log(this.state.showpl) })
    }
    disshowpl = () => {

        this.setState({
            showpl: 'discoverpl'
        }, () => { console.log(this.state.showpl) })

    }
    render() {
        return (
            <div>
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
                    详情页
                </NavBar>
                <div className='detaill'>
                    {
                        (this.state.data || []).map(item =>
                            <div style={{ marginTop: 50 }}>
                                <h1 style={{
                                    textAlign: "center", margin: "0 auto",
                                    padding: '20px 0'
                                }}>{item.title}</h1>
                                <div
                                    dangerouslySetInnerHTML={{ __html: this.state.data[0].content }}>
                                </div>
                                <List.Item.Brief >
                                    <div style={{
                                        marginTop: 20, flexDirection: 'row',
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>

                                        <input style={{
                                            width: '40%', height: 30, borderRadius: 15,
                                            borderColor: 'rgb(245, 240, 240)', backgroundColor: 'white',
                                            marginLeft: '5%'
                                        }}
                                            type='text' ref='pinglun' placeholder='说点什么..'
                                            onChange={(e) => this.inputChange(e)}
                                            icon={
                                                'url( https://i.loli.net/2020/04/17/G6xCR7StsTnPkBv.png)'
                                            }
                                        />
                                        <span style={{ marginLeft: '3%' }} onClick={this.crital}>

                                            发送
                                        </span>


                                        <span style={{ marginLeft: '6%' }} >
                                            <img
                                                ref='tab'
                                                style={{ width: '5%' }}
                                                src={(this.state.isGive)
                                                    ? 'https://s1.ax1x.com/2020/04/21/JGLB8I.png'
                                                    : "https://s1.ax1x.com/2020/04/21/JGLIx0.png"}

                                                onClick={(e) => this.change2(item.chapterid, e)} alt='点赞' />
                                            <span>{this.state.dzcount}</span>
                                        </span>
                                        <span style={{ marginLeft: '3%', marginTop: 120 }} >
                                            <img
                                                ref='tab'
                                                id={item.chapterid}
                                                style={{ width: '5%' }}
                                                src={(this.state.isKeep)
                                                    ? 'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                    : "https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                onClick={(e) => this.change1(item.chapterid, e)} alt='收藏' />
                                            <span>{this.state.sccount}</span>
                                        </span>
                                        <span style={{ marginLeft: '3%' }} >
                                            <img
                                                ref='tab'
                                                style={{ width: '5%', }}
                                                src=
                                                "https://s1.ax1x.com/2020/04/27/Jf4g8s.png"

                                                alt='评论' />
                                            <span >
                                                {this.state.plcount}
                                            </span>
                                        </span>
                                    </div>
                                </List.Item.Brief>

                            </div>
                        )
                    }
                </div>
                <div style={{ marginTop: 0 }}>
                    {
                        (this.state.tips || []).map(item =>
                            <div id={item.plid}
                                style={{
                                    backgroundColor: 'white',
                                    padding: 10,
                                    marginTop: 5
                                }}
                            >
                                <List.Item>
                                    <img src={item.head}
                                        style={{ height: 50, width: 50, marginRight: 5, borderRadius: 50 }} />
                                    {item.telphone}<span style={{ marginLeft: 20 }}>
                                        {item.pltime} </span>
                                    <span style={{ marginLeft: '30%' }} onClick={() => { this.del(item.plid) }}>
                                        <img src='https://i.loli.net/2020/05/11/sWpCgexZzHkGVQF.png' />
                                    </span>
                                    <List.Item.Brief style={{ marginLeft: 30, marginTop: 10 }}>
                                        {item.plcontent}</List.Item.Brief>
                                </List.Item>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(Detail)