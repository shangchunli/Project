import React, { Component } from 'react'
// import Health from './Health.css'
import { Carousel, WingBlank ,Flex,WhiteSpace,List,NavBar,Icon} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import ShowBottom from './ShowBottom'

const Item = List.Item;
const Brief = Item.Brief;

class Dynamics extends Component {
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
        // fetch("http://localhost:5001/chapters")
        // .then(res=>res.text())
        // .then((res)=>{
        //    console.log(res)
        // })
    }
    componentDidUpdate(){
        // fetch("http://localhost:5001/chapters")
        // .then(res=>res.text())
        // .then((res)=>{
        //     console.log(res)
        // })
    }
    handle=(pathname)=>{
        this.props.history.push("/health/"+pathname);
    }
    render() {
        return (
            <div>
                <ShowBottom/>
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
                    <Item extra={'更多>>'} onClick={()=>{this.handle('yiyu')}}>产后抑郁</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",borderTop:'1px rgb(255,235,235) solid',borderBottom:'1px rgb(255,235,235) solid'}}>
                    <img src="/images/depression.jpg" alt="抑郁症" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <div>
                    <h3 style={{lineHeight:'1.3em'}}>
                        产后抑郁是女性在生产之后很容易出现的一种精神疾病，
                        发病率在 15%～30%。典型的产后抑郁症于产后6周内发生。
                        常见症状：表情阴郁，无精打采，困倦，易流泪、哭泣
                        </h3>
                    </div>
                    {/* <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        产后抑郁形成的原因是多方面的，和产妇生产后的生...<br/> */}
                        {/* <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                                style={{float:'right',marginRight:'2%',height:20,width:20}}
                                src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span> */}
                    {/* </p> */}
                </Flex>
                
                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('anxiety')}}>焦虑</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <div>
                        <h3 style={{lineHeight:'1.3em'}}>有98%的孕妇在妊娠晚期会产生焦虑心理。焦虑还可引起植物神经紊乱，导致产时宫缩无力造成难产。
                            由于焦虑，得不到充分的休息和营养，生产时会造成滞产。</h3>
                    </div>
                    
                </Flex>
                
                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('food')}}>孕期护理</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/care.jpg" alt="产前护理" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <div>
                        <h3 style={{lineHeight:'1.3em'}}>
                            孕妇容易出现恶心呕吐，头晕等早孕反应，在怀孕后期，
                            随着子宫的逐渐增大，孕妇容易出现腰疼，下肢水肿等症状。            
                        </h3>
                    </div>    
                </Flex>
                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('reply')}}>身材恢复</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <div>
                    <h3>女性在生产完毕之后，常常会因为身体过于虚弱而需要一定的恢复和保养                        </h3>

                    </div>
                    {/* <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        研究表明，产后6个月是宝妈身材恢复的黄金时...<br/>
                        <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                               style={{float:'right',marginRight:'2%',height:20,width:20}}
                               src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span>
                    </p> */}
                    
                </Flex>
                        
                <List>
                    <Item extra={'更多>>'} onClick={()=>{this.handle('food')}}>饮食</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <div>
                        <h3 style={{lineHeight:'1.3em'}}>合理搭配饮食，帮助宝妈度过健康、相对舒服的孕期生活</h3>
                    </div>
                    {/* <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        研究表明，产后6个月是宝妈身材恢复的黄金时期...<br/>
                        <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                            <span>
                                <img 
                                 style={{float:'right',marginRight:'2%',height:20,width:20}}
                                 src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                            </span>
                    </p> */}
                    
                </Flex>

                <div style={{height:50,width:'100%',backgroundColor:'red'}}>
                     111
                </div>
            </div>
        )
    }
}
export default withRouter(Dynamics);