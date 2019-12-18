import React, { Component } from 'react'
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'
import { NavBar,List,Icon } from 'antd-mobile';

const Item = List.Item;


class Reply extends Component {
    constructor(){
        super();
        this.state={
            data:[],
//            收藏的默认状态为false
            isKeep:false,
            chapterId:[],
// 使用cookie存储当前登录的userId
            userId:cookie.load('userId')
        }
    }
    componentDidMount(){
        //页面挂载时自动执行当前函数，向后台请求数据进行渲染
        fetch("http://192.168.43.217:5001/huli")
        .then(res=>res.json())
        .then((res)=>{
            this.setState({
                data:res
            })
        })
    }
    componentDidUpdate(){
        fetch("http://192.168.43.217:5001/huli")
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
        })
    }
//     点击红心时进行收藏的改变
    change1=(idx,e)=>{
//         点击红心和点击收藏时阻止事件的冒泡
        e.stopPropagation();
//         点击红心时改变当前组件的收藏的状态
        let b=this.state.isKeep;
        this.setState({
            isKeep:!b,
            chapterId:idx

        })
        console.log(this.state.chapterId);
        
        if(this.state.isKeep==true){
//             当当前组件的收藏状态为true时红心改变，并向后台发送userId和chapterId
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
//                     后台返回数据表示收藏成功
                    console.log(res);
                   
                })
               
           
        }else{
            e.target.src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'
        }
        // console.log(this.state.chapterId);
    }
    goBack=()=>{
//         点击按钮进行返回
       this.props.history.go(-1);
    }
    too=(id)=>{
//         点击详情
        this.props.history.push('/health/detail/'+id);
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
                        身材恢复
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
                </div>
            </div>
        )
    }
}
export default withRouter(Reply);
