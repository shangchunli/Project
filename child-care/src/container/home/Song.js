import React, { Component } from 'react'
import { Flex, WhiteSpace ,NavBar,Icon} from 'antd-mobile';
import "./song.css"
export default class Song extends Component {
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
                    宝宝催眠曲
                </NavBar>
                    <WhiteSpace size="lg" />
                    <Flex style={{marginTop:'18%'}}>
                    <Flex.Item >
                        <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            
                            <img 
                                // src='../images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>                            
                            <img 
                                // src='./images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    </Flex>
                    <span style={{paddingLeft:'8%'}}>轻音乐</span>
                    <span style={{paddingLeft:'20%'}}>3D催眠曲</span>
                    <span style={{paddingLeft:'20%'}}>轻柔纯音乐</span>               
                    <WhiteSpace size="lg" />
                    <Flex>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>       
                            <img 
                                // src='images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    </Flex>
                    <span style={{paddingLeft:'8%'}}>轻音乐</span>
                    <span style={{paddingLeft:'20%'}}>3D催眠曲</span>
                    <span style={{paddingLeft:'20%'}}>轻柔纯音乐</span>
                    <WhiteSpace size="lg" />
                    <Flex>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='images/song/25.png'
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                style={{paddingLeft:'60%',paddingTop:'60%'}}
                                />
                        </div>
                        
                    </Flex.Item>
                    </Flex>
                    <span style={{paddingLeft:'8%'}}>轻音乐</span>
                    <span style={{paddingLeft:'20%'}}>3D催眠曲</span>
                    <span style={{paddingLeft:'20%'}}>轻柔纯音乐</span>
            </div>
        )
    }
}
