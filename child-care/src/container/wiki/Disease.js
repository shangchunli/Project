import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import cookie from 'react-cookies'

import { NavBar,List,Icon } from 'antd-mobile';

var isKeep2 = '';
class Disease extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isKeep:false,
            chapterid:[],
            userId:cookie.load('userId'),
            tab:'常见疾病',
            keepId:[]
        }
    }
    
    change1=(idx,e)=>{
        e.stopPropagation();
        let b=this.state.isKeep;
        this.setState({
            isKeep:!b,
            chapterid:idx
        })
        console.log(this.state.chapterid);
        if(this.state.isKeep==true){
            console.log('true');
            // keepArr.push(idx);
            // console.log(keepArr);
            e.target.src='https://s2.ax1x.com/2019/12/11/QrKe4s.png '
           
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
            console.log('false');
            e.target.src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png';
            fetch('http://192.168.43.217:5001/uncollect',{
                method: 'POST',//post请求 
                headers: { 
                    'Content-Type': 'application/json;charset=UTF-8' 
                }, 
                body: JSON.stringify({
                    userId:this.state.userId,  
                    chapterId:this.state.chapterid
                })                    
            })
            .then(res=>res.text())
            .then((res)=>{
                console.log(res);
            })
        }
    }
    componentDidMount(){
        // 渲染页面
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
        })
        // 获取收藏
        fetch('http://192.168.43.217:5001/keepid',{
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
                this.setState({
                    keepId:res
                })
            })
            console.log(this.state.keepid);
    }
    too=(id)=>{
        console.log(id)
        this.props.history.push('/wiki/detail/'+id);
    }
    render() {
        return (
            <div>
                <List>
                    {
                        (this.state.data||[]).map((item,idx)=>{
                            for(var i=0; i < this.state.keepId.length; i++){
                                if(this.state.keepId[i]==item.id){
                                    isKeep2=true;
                                    break;
                                }else{
                                    isKeep2 = false;
                                }
                            }
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
                                                    src={isKeep2
                                                        ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                        :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                    // src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'
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
export default withRouter(Disease);