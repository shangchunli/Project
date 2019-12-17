import React, { Component } from 'react'
import { Flex, WhiteSpace ,NavBar,Icon,List} from 'antd-mobile';
import cookie from 'react-cookies'


export default class Edu extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isKeep:false,
            chapterId:[],
            userId:cookie.load('userId')
        }
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
   
    componentDidMount(){
        fetch('http://192.168.43.217:5001/jiaoyu',{
            method: 'GET', 
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8' 
            }, 
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res
            });
            // console.log(this.state.data)
        })
       
    }
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

                <List style={{marginTop:50}}>
                            {
                                (this.state.data||[]).map((item,idx)=>{
                                  
                                    return(
                                        <List>
                                            <List.Item style={{paddingTop:10,color:"#000"}}>
                                               
                                                <List.Item.Brief style={{color:"#000",width:'75%',float:'left'}}>
                                                    {item.title}
                                                    {/* 什么是产后抑郁症
                                                    产后抑郁症是女性精神障碍中... */}
                                                </List.Item.Brief>
                                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                                        style={{
                                                        width:'20%',height:'10%'}}
                                                />
                                                <List.Item.Brief >
                                                    丫丫妈妈
                                                    <span style={{marginLeft:10}}>11月12日</span>
                                                    <span  style={{marginLeft:20}} >
                                                        <img src={(cookie.load('chapterId'))
                                                                ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                            onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                                        {/* {cookie.load('chapterId')} */}
                                                    </span>
                                                </List.Item.Brief>
                                            </List.Item>
                                        </List>
                                    )
                                })
                            }
                        </List>
                {/* <Flex style={{marginTop:'10%'}}>
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
                </Flex> */}
            </div>
        )
    }
}
