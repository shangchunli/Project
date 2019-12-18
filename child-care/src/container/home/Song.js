import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Flex, WhiteSpace ,NavBar,Icon} from 'antd-mobile';
import "./song.css"

let str1; 
let str2; 
export default class Song extends Component {
    constructor(){
        super();
        this.state={
          isPlay:false,
          str1:<audio autoPlay  src=''></audio>,
        //   str1:<audio autoPlay  src={require('./music/1.mp3')}></audio>,
          str2:<audio autoPlay  src=''></audio>,
        }

    }
    goBack=()=>{
        window.history.go(-1);
    }
    change=(e)=>{
        let b=this.state.isPlay;
        this.setState({
            isPlay:!b
        })
        if(this.state.isPlay==true){
            e.target.src='https://s2.ax1x.com/2019/12/04/Q16U74.png';
        }else{
            e.target.src='https://s2.ax1x.com/2019/12/10/QBwlxe.png';
        }
        console.log(this.state.isPlay);
        console.log(e.target.src);
        
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
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
                            />
                            <div >
                                {this.state.isPlay?this.state.str1:this.state.str2}

                            </div>
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>                            
                            <img 
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
                            />
                    </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
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
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
                            />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
                            />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
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
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
                            />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
                            />
                        </div>
                        
                    </Flex.Item>
                    <Flex.Item>
                    <div className='song2'style={{
                            background:"url('https://s2.ax1x.com/2019/12/04/Q1cLM6.jpg')",
                            backgroundSize:'cover',opacity:'0.9'}}>
                            <img 
                                // src='../images/song/25.png'
                                // src={this.state.isPlay
                                //     ?'https://s2.ax1x.com/2019/12/10/QBwlxe.png'
                                //     :'https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                // }
                                src='https://s2.ax1x.com/2019/12/04/Q16U74.png'
                                alt='播放'
                                style={{paddingLeft:'60%',paddingTop:'60%',width:'35%',height:'35%'}}
                                onClick={this.change}
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
