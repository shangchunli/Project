import React, { Component } from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';

export default class Edu extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundCorlor:'#fff',
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%",
                    
                }}>
                    <span style={{marginRight:'30%'}}>
                        <img src="./images/return.png" alt="返回" style={{width:'6%',height:'6%',marginTop:'2%',marginLeft:'2%'}}/>
                    </span>
                    <span style={{fontSize:'18px',marginTop:'-2%'}}>亲子教育</span>
                </div>

                <Flex style={{marginTop:'8%'}}>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/edu/edu1.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育是什么？<br/>
                                亲子教育不是单纯的家庭教育，也不是传统的...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/edu/edu2.jpg" style={{width:'100%',height:'160px'}}/>
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
                            <img src="./images/edu/edu2.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育方法？<br/>
                                音乐亲子教育：音乐亲子教育是...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/edu/edu1.jpg" style={{width:'100%',height:'160px'}}/>
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
                            <img src="./images/edu/edu5.png" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育方法？<br/>
                                音乐亲子教育：音乐亲子教育是在亲子教育中开发右脑最常用的方法，...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/edu/edu8.jpg" style={{width:'100%',height:'160px'}}/>
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
                            <img src="./images/edu/edu1.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                亲子教育是什么？<br/>
                                亲子教育不是单纯的家庭教育，也不是传统的园所教育，'亲'与'子'两者都应该受到教。...
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="./images/edu/edu2.jpg" style={{width:'100%',height:'160px'}}/>
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
