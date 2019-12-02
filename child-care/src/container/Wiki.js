import React, { Component } from 'react'
import { NavBar, Icon, Flex,  Tabs, WhiteSpace, Badge} from 'antd-mobile';
import './Wiki.css'

const tabs = [
    { title: <Badge >宝宝护理</Badge> },
    { title: <Badge dot>亲子教育</Badge> },
    { title: <Badge >潮娃穿搭</Badge> },
    { title: <Badge dot>宝宝饮食</Badge> },
];

export default class Parental extends Component {
    
    toChaoWa=()=>{
        console.log(2);
    }
    render() {
        return (
            <div>
                <div style={{position:'relative'}}>
                    <NavBar
                        style={{backgroundColor:'#fff',color:'#000'}}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        ]}
                    >
                        百科知识
                    </NavBar>
                    <Tabs tabs={tabs}
                    initialPage={1}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', height: '150px', 
                    backgroundColor: '#fff' }} onClick={this.toChaoWa}>
                    <img src='./images/baike/huli.png' />
                    </div>
                    <div onClick={this.toChaoWa}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <img src='./images/baike/jiaoyu.png' />
                    </div>
                    <div onClick={this.toChaoWa}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    <img src='./images/baike/chuanda.png' />
                    </div>
                    <div onClick={this.toChaoWa} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <img src='./images/baike/yinshi.png'  />
                    </div>
                    </Tabs>
                </div>
                <WhiteSpace />
                <div style={{height:120,border:'solid 0.1px ',borderRadius:20, background:'white',padding:10}}>
                    <h2 style={{marginTop:-5}}>热门话题</h2>
                    <span style={{float:'right',marginTop:-35}}>-->更多</span>
                    <Flex >
                    <Flex.Item className='placeholder'style={{background: 'url(./images/baike/back.png)'}}>宝宝辅食</Flex.Item>
                    <Flex.Item className='placeholder'style={{background: 'url(./images/baike/back.png)'}}>瘦身大作战</Flex.Item>
                    <Flex.Item className='placeholder'style={{background: 'url(./images/baike/back.png)'}}>巧手DIY</Flex.Item>
                    </Flex>
                </div>
                <WhiteSpace />
                <div style={{height:85,border:'solid 0.1px ',borderRadius:10, background:'white',padding:10}}>
                    <h3>制作辅食别少了这一步，真的会<br/>长不高！！</h3>
                    <img style={{width:37,height:37,float:'right',marginTop:-45}} src="./images/baike/tiezi.png" />
                    <p style={{marginTop:-7,color:'#bbb'}}>小美 发表于 11月12日</p>
                </div>
                <WhiteSpace />
                <div style={{height:85,border:'solid 0.1px ',borderRadius:10, background:'white',padding:10}}>
                    <h3>喝骨头汤补钙不如喝白开水，食<br/>补补钙第一名竟是它！</h3>
                    <img style={{width:37,height:37,float:'right',marginTop:-45}} src="./images/baike/tiezi.png" />
                    <p style={{marginTop:-7,color:'#bbb'}}>小美 发表于 11月12日</p>
                </div>
                <WhiteSpace />
                <div style={{height:85,border:'solid 0.1px ',borderRadius:10, background:'white',padding:10}}>
                    <h3>宝宝辅食不求人,两个蛋黄就做一<br/>大盘蛋黄溶豆，再也不用花钱...</h3>
                    <img style={{width:37,height:37,float:'right',marginTop:-45}} src="./images/baike/tiezi.png" />
                    <p style={{marginTop:-7,color:'#bbb'}}>小美 发表于 11月12日</p>
                </div>

                
            </div>
        )
    }
}



