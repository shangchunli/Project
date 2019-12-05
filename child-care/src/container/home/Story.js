import React, { Component } from 'react'
import { Flex, WhiteSpace,NavBar,Icon } from 'antd-mobile';
import './song.css'
export default class Story extends Component {
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
                    睡前故事
                </NavBar>
                    <WhiteSpace size="lg" />
                    <Flex style={{marginTop:'18%'}}>
                    <Flex.Item>
                        {/* <div className='song2'
                        style={{background:"url('./images/song/26.jpg')"
                        }}> */}
                        <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>
                            
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>       
                           
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>        
                           
                        </div>
                        
                    </Flex.Item>
                    </Flex>
                    <span style={{paddingLeft:'8%'}}>小红帽</span>
                    <span style={{paddingLeft:'20%'}}>三只小猪</span>
                    <span style={{paddingLeft:'20%'}}>木偶奇遇记</span>               
                    <WhiteSpace size="lg" />
                    <Flex>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>       
                          
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>        
                          
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>        
                            
                        </div>
                        
                    </Flex.Item>
                    </Flex>
                    <span style={{paddingLeft:'8%'}}>小马过河</span>
                    <span style={{paddingLeft:'20%'}}>小猫钓鱼</span>
                    <span style={{paddingLeft:'13%'}}>善良的三角龙</span>
                    <WhiteSpace size="lg" />
                    <Flex>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>       
                            
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>       
                            
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1KRRP.jpg')",
                            backgroundSize:'cover'}}>       
                           
                        </div>
                        
                    </Flex.Item>
                    </Flex>
                    <span style={{paddingLeft:'8%'}}>白雪公主</span>
                    <span style={{paddingLeft:'20%'}}>丑小鸭</span>
                    <span style={{paddingLeft:'20%'}}>孔融让梨</span>
            </div>
        )
    }
}
