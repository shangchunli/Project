import React, { Component } from 'react'
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'
import { NavBar,List,Icon,WhiteSpace} from 'antd-mobile';


export default class Publish extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isKeep:false,
            chapterid:[],
            userId:cookie.load('userId')
        }
    }
    goBack=()=>{
        this.props.history.go(-1);
    }
    componentDidMount(){
        fetch('http://localhost:5001/publish',{
                        method: 'POST',//post请求 
                        headers: { 
                        'Content-Type': 'application/json;charset=UTF-8' 
                        }, 
                        body: JSON.stringify({
                            userId:this.state.userId,  
                        })                    
                })
                .then(res=>res.json())
                .then((res)=>{
                    console.log(res);
                    let str1=res.reverse();
                    console.log(str1);
                    this.setState({
                        data:res
                    });
                })
    }
    too=(id)=>{
        console.log(id)
        this.props.history.push('/wiki/detail/'+id);
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
                    我的发布
                </NavBar>
                <WhiteSpace />
                <List style={{marginTop:30}}>
                    {
                        (this.state.data||[]).map((item,idx)=>{
                            return(
                                <List id={item.chapterid} onClick={()=>this.too(item.chapterid)}>
                                    <List.Item style={{paddingTop:10,color:"#000"}}>
                                               
                                        <List.Item.Brief style={{color:"#000",width:'75%',float:'left'}}>
                                            {item.title}
                                        </List.Item.Brief>
                                        <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                                style={{
                                                width:'20%',height:'10%'}}
                                        />
                                        <List.Item.Brief >
                                                {item.owner}
                                                <span style={{marginLeft:10}}>{item.time}</span>
                                            <span  style={{marginLeft:20}} >
                                                <img 
                                                    ref='tab'
                                                    id={item.chapterid}
                                                    src={(cookie.load('chapterId'))
                                                        ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                        :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                    onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                            </span>
                                            {/* {item.chapterid} */}
                                        </List.Item.Brief>
                                    </List.Item>
                                </List>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}
