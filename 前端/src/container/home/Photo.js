import React, { Component } from 'react'
import { NavBar, Carousel, WingBlank, Icon } from "antd-mobile"
import cookie from 'react-cookies'

export default class Photo extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            imgHeight: 176,
            showElem: true,
        }
    }
    componentDidMount() {

        fetch('http://localhost:5001/caprice', {
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
                let str = res;
                let imagePath = [];
                for (var i = 0; i < str.length; i++) {
                    imagePath.push(str[i].cimage);
                }
                console.log(imagePath)
                this.setState({
                    data: res
                })
            })
    }
    makePho = () => {
        console.log(this.state.data);
        this.setState({
            showElem: !this.state.showElem
        })
    }
    goBack = () => {
        this.props.history.go(-1);
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <NavBar
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        fontWeight: "bolder",
                        position: "fixed", zIndex: 100, width: "100%", top: 0
                    }}
                    icon={<Icon type="left" onClick={this.goBack} />}
                >
                    图集
                </NavBar>
                <div>
                    {
                        this.state.showElem ? <div style={{
                            // backgroundColor: 'gray',
                            background:
                                "url('https://s1.ax1x.com/2020/06/08/tfKipq.png') ",
                            width:'100%',height:'700px',
                            // opacity:'0.5',
                            position: 'relative', 
                             display: this.state.showElem
                        }}>
                            <button style={{
                                position: 'fixed', top: '33%', left: '30%', borderRadius: '90px',
                                height: '160px', width: '40%',
                                right: '40%', backgroundColor: '#FFD0B9',fontSize:'20px'
                            }}
                                onClick={this.makePho}
                            >生成相册</button>
                        </div> :
                            <WingBlank>
                                <Carousel
                                    autoplay={true} dots={false}
                                    infinite
                                >
                                    {this.state.data.map(item => (
                                        <img
                                            src={'' + item.cimage}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    ))}
                                </Carousel>
                                <div >
                                    <audio autoPlay src={require('./story/1.mp3')}></audio>
                                </div>
                            </WingBlank>
                    }
                </div>
            </div>
        )
    }
}
