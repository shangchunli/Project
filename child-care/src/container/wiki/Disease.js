import React, { Component } from 'react'
// import { Flex } from 'antd-mobile';
import cookie from 'react-cookies'

import { NavBar,List,Icon } from 'antd-mobile';

// const Item = List.Item;

export default class Disease extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isKeep:false,
            chapterid:[],
            userId:cookie.load('userId')
        }
    }
    
    change1=(idx,e)=>{
        let b=this.state.isKeep;
        this.setState({
            isKeep:!b,
            chapterid:idx
        })
        // console.log(cookie.load('chapterId'));
        // cookie.save("chapterId",this.state.chapterId);
        // console.log(this.refs.tab.id);
        console.log(this.state.chapterid);
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
                            chapterId:this.state.chapterid                    
                        })                    
                })
                .then(res=>res.json())
                .then((res)=>{
                    console.log(res);
                   
                })
               
           
        }else{
            e.target.src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'
        }
     
    }
   
    componentDidMount(){
        fetch('http://192.168.43.217:5001/jibing',{
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
    
    render() {
        return (
            
                    <div>

                        <List>
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
                                                        <img 
                                                            ref='tab'
                                                            id={item.chapterid}
                                                            src={(cookie.load('chapterId'))
                                                                ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                            onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                                        {/* {cookie.load('chapterId')} */}
                                                    </span>
                                                    {item.chapterid}
                                                </List.Item.Brief>
                                            </List.Item>
                                        </List>
                                    )
                                })
                            }
                        </List>
                       
                    {/* <Flex>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%',marginBottom:'2%'}}> 
                                   {}<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>
                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} 
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'
                                    onClick={this.change}
                                    />
                                </span>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%'}}>
                                    冬季腹泻，你的孩子中招了吗...<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>
                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'onClick={this.change} alt='收藏' />
                                </span>
                            </div>
                        </Flex.Item>
                    </Flex>

                    <Flex>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%',marginBottom:'2%'}}>
                                    冬季腹泻，你的孩子中招了吗...<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>
                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' onClick={this.change}alt='收藏' />
                                </span>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%'}}>
                                    冬季腹泻，你的孩子中招了吗...<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>
                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'onClick={this.change} alt='收藏' />
                                </span>
                            </div>
                        </Flex.Item>
                    </Flex>

                    <Flex>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%',marginBottom:'2%'}}>
                                    冬季腹泻，你的孩子中招了吗...<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>
                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'onClick={this.change} alt='收藏' />
                                </span>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%'}}>
                                    冬季腹泻，你的孩子中招了吗...<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>
                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'onClick={this.change} alt='收藏' />
                                </span>
                            </div>
                        </Flex.Item>
                    </Flex>

                    <Flex>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%',marginBottom:'2%'}}>
                                    冬季腹泻，你的孩子中招了吗...<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>
                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'onClick={this.change} alt='收藏' />
                                </span>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{width:'100%'}}>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1fyjI.png" style={{width:'100%',height:'160px'}}/>
                                <p style={{width:'100%'}}>
                                    冬季腹泻，你的孩子中招了吗...<br/>
                                </p>
                                <span style={{fontSize:'0.8em'}}>丫丫妈妈</span>

                                <span>
                                    <img style={{
                                        width:'10%',
                                        height:'15%',
                                        float:'right',
                                        marginRight:'5%'
                                    }} src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' onClick={this.change}alt='收藏' />
                                </span>
                            </div>
                        </Flex.Item>
                    </Flex> */}

                   
                </div>
          
           
        )
    }
}
