import React, { Component } from 'react'
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './Wiki.css'
import {withRouter} from 'react-router-dom'
import ShowBottom from './ShowBottom'
const tabs = [
    { title: <Badge >宝宝护理</Badge> },
    { title: <Badge >亲子教育</Badge> },
    { title: <Badge >潮娃穿搭</Badge> },
    { title: <Badge >宝宝饮食</Badge> },
];

class Parental extends Component {

    handle = (pathname) => {
        this.props.history.push( "/wiki/" + pathname);
    }
    render() {
        return (
            <div>
                <div>
                    <ShowBottom/>
                    <NavBar
                        style={{
                            backgroundColor: '#fff', color: '#000',
                            fontWeight: "bolder",
                            position: "fixed", zIndex: 100, width: "100%", top: 0
                        }}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        ]}
                    >
                        百科知识
                    </NavBar>
                    <div style={{ marginTop: 45 }}>
                        <Tabs tabs={tabs}
                            initialPage={0}
                            style={{width:'100%'}}
                        >
                            <div style={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center', height: '150px',
                                width:'100%',
                                backgroundColor: '#fff'
                            }} onClick={() => { this.handle('nurse') }}>
                                <img src='./images/baike/huli.png' />
                            </div>

                            <div onClick={() => { this.handle('edu') }}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px',
                                    backgroundColor: '#fff'
                                }}>
                                <img src='./images/baike/jiaoyu.png' />
                            </div>

                            <div onClick={() => { this.handle('chaowa') }}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px',
                                    backgroundColor: '#fff'
                                }}>
                                <img src='./images/baike/chuanda.png' />
                            </div>

                            <div onClick={() => { this.handle('babyfood') }} style={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center', height: '150px', backgroundColor: '#fff'
                            }}>
                                <img src='./images/baike/yinshi.png' />
                            </div>
                        </Tabs>
                    </div>
                </div>
                <WhiteSpace />
                <div style={{ height: 120, border: 'solid 0.1px ', borderRadius: 20, background: 'white', padding: 10 }}>
                    <h2 style={{ marginTop: 0 }}>热门话题</h2>
                    <span 
                        style={{ float: 'right', marginTop:-20 }}
                        onClick={() => { this.handle('topic') }}
                    >
                        -->更多
                    </span>
                    <Flex style={{marginTop:15}}>
                        <Flex.Item className='placeholder' style={{ background: 'url(./images/baike/back.png)' }}>宝宝辅食</Flex.Item>
                        <Flex.Item className='placeholder' style={{ background: 'url(./images/baike/back.png)' }}>瘦身大作战</Flex.Item>
                        <Flex.Item className='placeholder' style={{ background: 'url(./images/baike/back.png)' }}>巧手DIY</Flex.Item>
                    </Flex>
                </div>
                <WhiteSpace />
                <div style={{ height: 85, border: 'solid 0.1px ', borderRadius: 10, background: 'white', padding: 10 }}>
                    <h3 onClick={() => { this.handle('Baike1') }}>制作辅食别少了这一步，真的会<br />长不高！！</h3>
                    <img style={{ width: 50, height: 55, float: 'right', marginTop: -35 }} src="./images/baike/tiezi.png" />
                    <p style={{ marginTop: 7, color: '#bbb' }}>小美 发表于 11月12日</p>
                </div>
                <WhiteSpace />
                <div style={{ height: 85, border: 'solid 0.1px ', borderRadius: 10, background: 'white', padding: 10 }}>
                    <h3 onClick={() => { this.handle('Baike2') }}>喝骨头汤补钙不如喝白开水，食<br />补补钙第一名竟是它！</h3>
                    <img style={{ width: 50, height: 55, float: 'right', marginTop: -35 }} src="./images/baike/tiezi.png" />
                    <p style={{ marginTop: 7, color: '#bbb' }}>小美 发表于 11月12日</p>
                </div>
                <WhiteSpace />
                <div style={{ height: 85, border: 'solid 0.1px ', borderRadius: 10, background: 'white', padding: 10 }}>
                    <h3 onClick={() => { this.handle('Baike3') }}>宝宝辅食不求人,两个蛋黄就做一<br />大盘蛋黄溶豆，再也不用花钱...</h3>
                    <img style={{ width: 50, height: 55, float: 'right', marginTop: -35 }} src="./images/baike/tiezi.png" />
                    <p style={{ marginTop: 7, color: '#bbb' }}>小美 发表于 11月12日</p>
                </div>


            </div>
        )
    }
}

export default withRouter(Parental);


