import React, { Component } from 'react'
import { NavBar,List ,Icon} from 'antd-mobile';
import cookie from 'react-cookies'

export default class Anxiety extends Component {
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
        fetch("http://192.168.43.217:5001/jiaolv")
        .then(res=>res.json())
        .then((res)=>{
            this.setState({
                data:res
            })
        })
    }
    componentDidUpdate(){
        fetch("http://192.168.43.217:5001/jiaolv")
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
                    mode="light"
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                        style={{backgroundColor:'#fff',color:'#000'}}
                        
                    >
                        焦虑
                </NavBar>
                
                <div style={{marginTop:10,height:600,width:"100%"}}>
                {
                            (this.state.data||[]).map(item=>
                                <List style={{marginTop:10}} id={item.chapterid} 
                                onClick={()=>this.too(item.chapterid)}>
                                <List.Item style={{paddingTop:10,
                                    color:"#000"}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                             style={{float:"right",
                                        width:50,height:70,paddingBottom:10}}/>
                                        {item.title}
                                    <List.Item.Brief style={{paddingTop:10}}>{item.owner}
                                        <span style={{marginLeft:10,fontSize:'10px'}}>{item.time}</span>
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
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                焦虑症产生原因和危害
                                <List.Item.Brief style={{color:"#000"}}>
                                导致人们患上产后焦虑症的原因有很多种...</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List> */}
                    {/* <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                产后焦虑症症状
                                <List.Item.Brief style={{color:"#000"}}>
                                第一：在身体上面产后的妈妈也会异常疲劳或虚...
                                </List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List> */}
                    {/* <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                调节方法
                               <List.Item.Brief style={{color:"#000"}}
                               >1、树立信心。要明白作为母亲的不可推卸的职责，也应深刻体会自...</List.Item.Brief> 

                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List> */}
                    {/* <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                               注意事项
                                <List.Item.Brief style={{color:"#000"}}>
                                首先，患者要加强营养，饮食总宜清淡，忌生冷、辛辣、油腻、不易消</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List> */}
                    {/* <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                治疗方法
                                <List.Item.Brief style={{color:"#000"}}>
                                一、 多结交一些新朋友很多新妈妈由于是初产妇，所以在育儿方面基本上没有什么经</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List> */}
                    {/* <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                预防方法
                                <List.Item.Brief style={{color:"#000"}}>
                                首先，在怀孕前就要做好生理及心理两方面的准备。学习妊娠和分娩的</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List> */}
                    {/* <List style={{marginTop:10}} onClick={()=>{console.log("11")}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                预防方法
                                <List.Item.Brief style={{color:"#000"}}>
                                首先，在怀孕前就要做好生理及心理两方面的准备。学习妊娠和分娩的</List.Item.Brief>
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
