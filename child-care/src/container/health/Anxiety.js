import React, { Component } from 'react'
import { NavBar,List ,Icon} from 'antd-mobile';
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'
// 使用withRouter包裹当前组件可以接收到父组件的this.props，可以使用this.props.history对象进行路由的跳转

class Anxiety extends Component {
    constructor(){
        super();
        this.state={
            data:[],
// 判断当前状态是否收藏，收藏与否执行不同的操作
            isKeep:false,
// 存取帖子的chapterid            
            chapterId:[],
//  存取当前用户的userId           
            userId:cookie.load('userId')
        }
    }
    componentDidMount(){
        //组件加载时自动执行当前生命周期函数
        fetch("http://192.168.43.217:5001/jiaolv")
        .then(res=>res.json())
        .then((res)=>{
            this.setState({
                data:res
            })
        })
    }
    componentDidUpdate(){
//       当页面每次更新时自动加载当前生命周期函数
        fetch("http://192.168.43.217:5001/jiaolv")
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
        })
    }
//     点击红心时执行当前函数
    change1=(idx,e)=>{
//        当点击红心和点击详情时阻止事件冒泡
        e.stopPropagation();
//         当点击时让当前收藏状态取反
        let b=this.state.isKeep;
//         存储当前要改变的chapterid和选择收藏或不收藏
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
        this.props.history.go(-1);
    }
    too=(id)=>{
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
                </div>

            </div>
        )
    }
}
export default withRouter(Anxiety);
