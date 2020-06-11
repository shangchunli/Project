import React, { Component } from 'react'
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'

import { WhiteSpace,NavBar,Icon,List } from 'antd-mobile';
// import { List } from 'antd-mobile';
class Food extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isKeep:false,
            chapterId:[],
            tab:'妈妈饮食',
            userId:cookie.load('userId')
        }
    }
    componentDidMount(){
        //初始加载
        fetch("http://localhost:5001/momfood")
        .then(res=>res.json())
        .then((res)=>{
            this.setState({
                data:res
            })
        });
        // 获取收藏
        fetch('http://localhost:5001/keepid',{
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json;charset=UTF-8' 
                }, 
                body: JSON.stringify({
                    userId:this.state.userId,
                    tab:this.state.tab
                })                    
            })
            .then(res=>res.json())
            .then((res)=>{
                console.log(res);
            })
    }
    componentDidUpdate(){
        fetch("http://localhost:5001/momfood")
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
                fetch('http://localhost:5001/cookie',{
                        method: 'POST',//post请求 
                        headers: { 
                        'Content-Type': 'application/json;charset=UTF-8' 
                        }, 
                        body: JSON.stringify({
                            userId:this.state.userId,  
                            chapterId:this.state.chapterId                    
                        })                    
                })
                .then(res=>res.text())
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
                        饮食
                </NavBar>
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
        )
    }
}
export default withRouter(Food);
