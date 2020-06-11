
import React, { Component } from 'react'
import { WhiteSpace, NavBar, Icon, ImagePicker, WingBlank, SegmentedControl, List } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import cookie from 'react-cookies'
export default class Pictures2 extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            userId: cookie.load('userId')
        }
    }
    goBack = () => {
        window.history.go(-1);
    }
    componentDidMount() {
        setTimeout(() => {
            fetch('http://localhost:5001/mypicture', {
                method: 'POST',//post请求 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    userId: cookie.load('userId'),
                })
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res);
                    this.setState({
                        data: res
                    })
                })

        }, 0)
    }
    render() {

        return (

            <div>
                <NavBar
                    icon={<Icon type="left" onClick={this.goBack} />}
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        height: 60, fontWeight: "bolder",
                        position: "fixed",
                        top: "0px",
                        zIndex: 100,
                        width: "100%"
                    }}
                >
                    我的照片
                </NavBar>
                <div style={{marginTop:'65px',width:'100%'}}>
                    {

                        ( this.state.data || []).map((item,index) => {
                            console.log(item);
                            return (
                                <img src={item.pimage}
                                    style={{ height: '100px', width: '28.7%', marginRight: '2%',marginLeft:'2%' }} />

                            )
                        }
                        )
                    }

                </div>



            </div>
        )
    }
}
