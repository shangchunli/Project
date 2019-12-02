import React, { Component } from 'react'
// import Health from './Health.css'
import { Carousel, WingBlank ,Flex,WhiteSpace,List} from 'antd-mobile';

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
     }
    render() {
        return (
            <div>
                <h4 className='header'>心理健康</h4>
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
                    <Item extra={'更多》》》'} onClick={() => {}}>抑郁症</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",borderTop:'1px rgb(255,235,235) solid',borderBottom:'1px rgb(255,235,235) solid'}}>
                    <img src="/images/depression.jpg" alt="抑郁症" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        产后抑郁形成的原因是多方面的，和产妇生产后的生理变化及心理因素相关,
                        建议在身体允许的情况下，尽快恢复之前的生活状况...
                    </p>
                </Flex>

                <List>
                    <Item extra={'更多》》》'} onClick={() => {}}>产前护理</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/care.jpg" alt="产前护理" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                        <p className='detail'>
                            注意休息，保证足够睡眠，左侧卧位，适当活动，保持轻松愉快的心情。产前健康教育，
                            消除孕妇对于分娩产生的紧张、恐惧心理。。。
                        </p>
                </Flex>
                <List>
                    <Item extra={'更多》》》'} onClick={() => {}}>身材恢复</Item>
                </List>
                <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                    <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                    <p style={{width:'65%',marginRight:'5%',float:'left'}}>
                        研究表明，产后6个月是宝妈身材恢复的黄金时期，如果宝妈在产后6个月内恢复到孕前体重，
                        那么未来数年，产后体重增加幅度均会较小。。。
                    </p>
                </Flex>
    
            </div>
        )
    }
}
