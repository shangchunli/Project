import React, { Component } from 'react'
// import Health from './Health.css'
import { Carousel, WingBlank ,Flex,WhiteSpace,List,NavBar,Icon} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Dynamics extends Component {
    constructor(){    
        super();
        this.state = {
            data: ['1', '2', '3'],
            disabled: false
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['mom_health1', 'mom_health2', 'mom_health3'],
          });
        }, 100);
        fetch("http://192.168.43.217:5001/chapters")
        .then(res=>res.json())
        .then((res)=>{
           console.log(res)
        })
    }
    componentDidUpdate(){
        fetch("http://192.168.43.217:5001/chapters")
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
        })
    }
    handle=(pathname)=>{
        window.location.href="/health/"+pathname;
    }
    render() {
        return (
            <div>
                <NavBar
                        style={{backgroundColor:'#fff',color:'#000',
                        fontWeight:"bolder",
                        position:"fixed",zIndex:100,width:"100%",top:0
                    }}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        ]}
                    >
                        宝妈健康
                </NavBar>
                <Carousel
                autoplay={true}
                infinite
                >
                    {this.state.data.map(val => (
                        <img
                            src={`/images/${val}.jpg`}
                            alt={val}
                            style={{ width: '100%',verticalAlign: 'top' ,height:'270px'}}
                        />
                    ))}
                </Carousel>
                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('yiyu')}}>抑郁症</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",borderTop:'1px rgb(255,235,235) solid',borderBottom:'1px rgb(255,235,235) solid'}}>
                    <img src="/images/depression.jpg" alt="抑郁症" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        产后抑郁形成的原因是多方面的，和产妇生产后的生...<br/>
                        <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                                style={{float:'right',marginRight:'2%',height:20,width:20}}
                                src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span>
                    </p>
                </Flex>

                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('food')}}>产前护理</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/care.jpg" alt="产前护理" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <div>
                        <p className='detail'>
                            注意休息，保证足够睡眠，左侧卧位，适当活动，保持轻松愉快...<br/>
                        <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                                style={{float:'right',marginRight:'8%',height:20,width:20}}
                                src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span>
                        </p>
                        
                    </div>    
                </Flex>
                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('reply')}}>身材恢复</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        研究表明，产后6个月是宝妈身材恢复的黄金时...<br/>
                        <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                               style={{float:'right',marginRight:'2%',height:20,width:20}}
                               src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span>
                    </p>
                    
                </Flex>
                        
                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('food')}}>饮食</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        研究表明，产后6个月是宝妈身材恢复的黄金时期...<br/>
                        <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                                 style={{float:'right',marginRight:'2%',height:20,width:20}}
                                 src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span>
                    </p>
                    
                </Flex>

                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('anxiety')}}>焦虑</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        研究表明，产后6个月是宝妈身材恢复的黄金时期...<br/>
                        <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                                 style={{float:'right',marginRight:'2%',height:20,width:20}}
                                 src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span>
                    </p>
                </Flex>
            </div>
        )
    }
}
