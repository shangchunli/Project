import React, { Component } from 'react'
import cookie from 'react-cookies'


import { NavBar,List,Icon } from 'antd-mobile';

const Item = List.Item;

export default class Yiyu extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isKeep:false,
            chapterId:[],
            userId:cookie.load('userId')
        }
    }
    componentDidMount(){
        //初始加载
        fetch("http://192.168.43.217:5001/yiyu")
        .then(res=>res.json())
        .then((res)=>{
            this.setState({
                data:res
            })
        })
    }
    componentDidUpdate(){
        fetch("http://192.168.43.217:5001/yiyu")
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
        })
    }
    change1=(idx,e)=>{
        e.stopPropagation();
        let b=this.state.isKeep;
        this.setState({
            isKeep:!b,
            chapterId:idx

        })
        console.log(this.state.chapterId);
        
        if(this.state.isKeep==true){
            
            e.target.src='https://s2.ax1x.com/2019/12/11/QrKe4s.png'
            // alert(this.state.userId);
           
                fetch('http://192.168.43.217:5001/cookie',{
                        method: 'POST',//post请求 
                        headers: { 
                        'Content-Type': 'application/json;charset=UTF-8' 
                        }, 
                        body: JSON.stringify({
                            userId:this.state.userId,  
                            chapterId:this.state.chapterId                    
                        })                    
                })
                .then(res=>res.json())
                .then((res)=>{
                    console.log(res);
                   
                })
               
           
        }else{
            e.target.src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'
        }
        // console.log(this.state.chapterId);
    }
    goBack=()=>{
        window.history.go(-1);
    }
    too=(id)=>{
        window.location.href='/health/detail/'+id;
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
                    抑郁症
                </NavBar>
                <div style={{marginTop:50,height:600
                ,width:"100%",
                    }}>
                        {
                            (this.state.data||[]).map(item=>
                                <List style={{marginTop:30}} id={item.chapterid} 
                                onClick={()=>this.too(item.chapterid)}>
                                <List.Item style={{paddingTop:10,
                                    color:"#000"}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                             style={{float:"right",
                                        width:50,height:70,paddingBottom:10}}/>
                                        {item.title}
                                    <List.Item.Brief style={{paddingTop:10}}>{item.owner}
                                        <span style={{marginLeft:10}}>{item.time}</span>
                                        <span  style={{marginLeft:20}} onClick={()=>{}}>
                                        <img src={(cookie.load('chapterId'))
                                            ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                            :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                            onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                        </span>
                                    </List.Item.Brief>
                                </List.Item>
                            </List>

                            )
                                            
                        }
                    {/* <List>
                        <List.Item style={{paddingTop:10,
                            color:"#000"}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                     style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                什么是产后抑郁症
                                <List.Item.Brief style={{color:"#000"}}>
                                产后抑郁症是女性精神障碍中...</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                     style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                中国每十个产妇就有一个遭产后抑郁：死亡离她很近！ 
                                <List.Item.Brief style={{color:"#000"}}>
                                短短一周时间内，就有两位妈妈跳楼！
                                </List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                     style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                              产后抑郁到底有多可怕？看完这些我沉默了 
                               <List.Item.Brief style={{color:"#000"}}
                               >杭州90后宝妈急诊室门口大喊"救我"后失踪</List.Item.Brief> 

                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                     style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                            二胎妈妈带着宝宝从19楼一跃而下：产后抑郁足以毁掉一个女人
                                <List.Item.Brief style={{color:"#000"}}>
                                别再当产后抑郁是矫情了！</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                     style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                秦海璐：因巨婴儿子产后抑郁。涅槃重生只因遇见“命定之人”
                                <List.Item.Brief style={{color:"#000"}}>
                                产后抑郁”一直都被认为是一个遥远的名词。直到</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                        <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                     style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                “本人男，产后抑郁1年”，生娃这件事，男人女人的付出应该平等
                                <List.Item.Brief style={{color:"#000"}}>
                                前几日我收到一位男粉丝的投稿，说他得了产后抑郁</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List> */}
                    
                </div>
            </div>
        )
    }
}