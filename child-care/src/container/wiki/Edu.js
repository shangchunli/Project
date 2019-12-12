import React, { Component } from 'react'
import { Flex, WhiteSpace ,NavBar,Icon} from 'antd-mobile';

export default class Edu extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    style={{backgroundColor:'#fff',color:'#000',
                    height:60,fontWeight:"bolder",
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    亲子教育
                </NavBar>

                <Flex style={{marginTop:'10%'}}>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育是什么？<br/>
                                亲子教育不是单纯的家庭教育，也不是传统的...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育内容？<br/>
                                亲子教育不仅仅是早教师向母亲...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育方法？<br/>
                                音乐亲子教育：音乐亲子教育是...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育技巧？<br/>
                                不代替：这是值得我们警惕的！...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育方法？<br/>
                                音乐亲子教育：音乐亲子教育是在亲子教育中开发右脑最常用的方法，...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育技巧？<br/>
                                不代替：这是值得我们警惕的...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育是什么？<br/>
                                亲子教育不是单纯的家庭教育，也不是传统的园所教育，'亲'与'子'两者都应该受到教。...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1YRRH.jpg"
                                style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育内容？<br/>
                                亲子教育不仅仅是早教师向母亲传播育儿知识与方法的 单向度的传授...
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
