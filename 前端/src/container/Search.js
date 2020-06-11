import React, { Component } from 'react'
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge, Button, List, Toast } from 'antd-mobile';
import './Wiki.css'
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'


var arr = [];
var str = '';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: '',
            history: [],
            data: [],
            length: 0,
            hot: ['衣服', '饮食', '锻炼', '乐高积木', '益智游戏', '早教', '胎教', '哺乳期'],
            result: [],
            chosenResult: [],
            showResult: 'disresult'
        })
    }
    componentDidMount() {
        fetch('http://localhost:5001/findhistory', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userid: cookie.load('userId'),

            })
        })
            .then(res => res.json())
            .then((res) => {
                // console.log(res);
                this.setState({
                    history: res,
                    length: res.length
                }, () => { console.log(this.state.history) })
            })
    }
    onChange = (e) => {
        // console.log(e.target.value);
        str = e.target.value;
        console.log(str);
        this.setState({
            value: e.target.value
        }, () => { })
    };
    search = () => {
        console.log('search');
        console.log(this.state.value);
        if (this.state.value) {
            fetch('http://localhost:5001/addhistory', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: cookie.load('userId'),
                    history: this.state.value
                })
            })
                .then(res => res.text())
                .then((res) => {
                    console.log(res);
                })
            fetch('http://localhost:5001/findhistoryresult', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: cookie.load('userId'),
                    history: this.state.value
                })
            })
                .then(res => res.json())
                .then((res) => {
                    // console.log(res);
                    if (!res) {
                        return false
                    } else {
                        res.map((item) => {
                            if (item.title.indexOf(this.state.value) != -1) {
                                console.log(item);
                                arr.push(item);
                            }
                        })
                        this.setState({
                            chosenResult: arr
                        }, () => { console.log(this.state.chosenResult) })
                    }

                })
            this.setState({
                showResult: 'showresult'
            })
        } else {
            Toast.info('搜索内容不能为空', 2);
        }
        // this.setState({
        //     showResult: 'showresult'
        // })
    }
    cancel = () => {
        this.setState({
            value: '',
            showResult: 'disresult'
        })
    }
    goBack = () => {
        this.props.history.go(-1);
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <div
                    style={{
                        width: '100%', backgroundColor: 'rgb(250,250,255)',
                        height: '50px', textAlign: 'center', lineHeight: '50px',
                        paddingTop: '7px', paddingLeft: '1.5%',
                        borderBottom: '1px solid lightgray', marginBottom: '3px'
                    }}
                >
                    <div style={{ float: 'left', width: '5%', marginLeft: '5px' }}>
                        <Icon type='left' size='md' onClick={this.goBack} />
                    </div>
                    <div style={{
                        float: 'left', width: '68%', marginLeft: '5%', height: '40px',
                        borderRadius: '4px', backgroundColor: 'rgb(232,232,232)'
                    }}
                    >
                        <img
                            src='https://s1.ax1x.com/2020/06/04/tBQHgA.png'
                            alt='搜索'
                            style={{ width: '5%', height: '22px', float: 'left', paddingTop: '10px', paddingLeft: '10px' }}
                        />
                        <input
                            type='search'
                            placeholder={'sousuo'}
                            onChange={(e) => { this.onChange(e) }}
                            onClick={this.cancel}
                            style={{ width: '80%', height: '30px', borderRadius: '4px', border: 'none', backgroundColor: 'rgb(232,232,232)' }}
                        />
                    </div>
                    <div style={{ float: 'left', width: '10%', marginLeft: '5%', marginRight: '5%' }}>
                        <p
                            style={{ marginLeft: '2%', color: 'rgb(150,150,150)', fontSize: '19px' }}
                            onClick={this.search}
                        >
                            搜索
                        </p>
                    </div>
                </div>
                {/* 搜索历史 */}
                <div style={{ width: '100%', padding: '4px', display: this.state.showResult == 'disresult' ? 'block' : 'none' }}>
                    <div style={{ marginBottom: '12px' }}>
                        <span style={{ float: 'left', marginLeft: '3%', paddingTop: '4px' }}>搜索历史</span>
                        <span style={{ float: 'right', marginRight: '3%' }}>
                            <img
                                style={{ width: '24px', height: '24px' }}
                                src='https://i.loli.net/2020/06/08/FpidUAOhmKSxV1D.png' alt='删除'
                            />
                        </span>
                        <br />
                    </div>
                    <div style={{ width: '100%' }}>
                        {
                            (this.state.history || []).map((item, index) => {
                                if (this.state.length - index <= 9) {
                                    return (
                                        <div
                                            style={{

                                                float: 'left', backgroundColor: 'rgb(225,225,225)',
                                                padding: '4px', marginLeft: '8px', borderRadius: '4px',
                                                fontSize: '16px', color: 'gray', marginTop: '5px', marginBottom: '5px'
                                            }}
                                        >
                                            {item.history}
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>

                </div>
                {/* 热门推荐 */}
                <div style={{ float: 'left', width: '100%', padding: '4px', display: this.state.showResult == 'disresult' ? 'block' : 'none' }}>
                    <div style={{ width: '100%', marginLeft: '3%', paddingTop: '4px', marginBottom: '12px' }}>热门推荐</div>
                    <div style={{ width: '100%' }}>
                        {
                            (this.state.hot || []).map((item, index) => {
                                // if (this.state.length - index <= 9) {
                                return (
                                    <div
                                        style={{

                                            float: 'left', backgroundColor: 'rgb(225,225,225)',
                                            padding: '4px', marginLeft: '8px', borderRadius: '4px',
                                            fontSize: '16px', color: 'gray', marginTop: '5px', marginBottom: '5px'
                                        }}
                                    >
                                        {item}
                                    </div>

                                )

                                // }
                            })
                        }
                    </div>
                </div>
                {/* 显示搜索结果 */}
                <div className={this.state.showResult}>
                    <div style={{
                        paddingTop: '9px', paddingBottom: '9px', width: '100%',
                        fontSize: '18px', borderBottom: '1px lightgray solid'
                    }}
                    >
                        <span style={{ marginLeft: '4%', marginRight: '35%' }}>x</span>
                        <span style={{}}>搜索结果</span>
                    </div>
                    {
                        (this.state.chosenResult || []).map((item, idx) => {

                            return (
                                <List >
                                    <List.Item style={{ paddingTop: 10, color: "#000" }}>

                                        <List.Item.Brief style={{ color: "#000", width: '75%', float: 'left' }}>
                                            {item.title}
                                        </List.Item.Brief>
                                        <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                            style={{
                                                width: '20%', height: '10%'
                                            }}
                                        />
                                        <List.Item.Brief >
                                            {item.owner}
                                            <span style={{ marginLeft: 10 }}>{item.time}</span>
                                            <span style={{ marginLeft: 20 }} >
                                                <img src={'https://s2.ax1x.com/2019/12/11/QrKe4s.png'}
                                                    alt='收藏' />

                                            </span>
                                        </List.Item.Brief>
                                    </List.Item>
                                </List>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Search);


