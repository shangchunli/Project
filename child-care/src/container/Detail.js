import React, { Component } from 'react'
import { NavBar,Icon,List } from 'antd-mobile';
import './detail.css'
import {withRouter} from 'react-router-dom'
import cookie from 'react-cookies'


class Detail extends Component {
   constructor(){
        super();
        this.state={
            data:'',
            tips:'',
            isKeep:false,
            chapterid:'',
            pingluns:'',
            plcount:'',
            userId:cookie.load('userId')
        } 
    }
    goBack=()=>{
        this.props.history.go(-1);
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        fetch('http://localhost:5001/xiangqing',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                // userId:this.state.userId,  
                chapterId:  this.props.match.params.id               
            })                    
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res,
                chapterid:this.props.match.params.id
            });
            
        })
        fetch('http://localhost:5001/showcomment',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                chapterId:  this.props.match.params.id               
            })                    
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                tips:res,
            });
        })
        fetch('http://localhost:5001/showplcount',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                chapterId:  this.props.match.params.id               
            })                    
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
               plcount:res[0].plcount,
            });
        })

        
    }
    
    change1=(idx,e)=>{
        e.stopPropagation();
        let b=this.state.isKeep;
        this.setState({
            isKeep:!b,
            
        })
        console.log(this.state.chapterid);
        if(this.state.isKeep==true){
            
            e.target.src='https://s2.ax1x.com/2019/12/11/QrKe4s.png '
           
                fetch('http://localhost:5001/cookie',{
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
    //获取评论内容
    inputChange=(e)=>{
        e.stopPropagation();
        let val1=this.refs.pinglun.value;
        this.setState({
            pingluns:val1,
        })
    }
    //添加评论以及更新评论内容
    crital=()=>{
        console.log(this.state.pingluns);
        console.log(this.state.chapterid);
        console.log(this.state.plcount);
        fetch('http://localhost:5001/addcomment',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                userId:this.state.userId,  
                chapterId:this.state.chapterid,
                plcontent:this.state.pingluns                    
            })                    
        })
        .then(res=>res.text())
        .then((res)=>{
            console.log(res);
            if(res==' comment success'){
                fetch('http://localhost:5001/showcomment',{
                    method: 'POST',//post请求 
                    headers: { 
                    'Content-Type': 'application/json;charset=UTF-8' 
                    }, 
                    body: JSON.stringify({
                        chapterId:  this.props.match.params.id               
                    })                    
                })
                .then(res=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        tips:res,
                    });
                })
                fetch('http://localhost:5001/addplcount',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                chapterId:this.state.chapterid,
                plcount:this.state.plcount                   
            })                    
        })
        .then(res=>res.text())
        .then((res)=>{
            console.log(res)
            if(res=='pl success'){
                fetch('http://localhost:5001/showplcount',{
                    method: 'POST',//post请求 
                    headers: { 
                    'Content-Type': 'application/json;charset=UTF-8' 
                    }, 
                    body: JSON.stringify({
                        chapterId:  this.props.match.params.id               
                    })                    
                })
                .then(res=>res.json())
                .then((res)=>{
                    console.log(res[0].plcount)
                    this.setState({
                        plcount:res[0].plcount
                    })
                })
            }
        })
            }else{
                alert('评论失败')
            }
        })
        
    }
    //点赞数

    render() {
        return (
            <div>
                <NavBar
                 icon={<Icon type="left" onClick={this.goBack}/>}
                    style={{backgroundColor:'#fff',
                    color:'#000',
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    详情页
                </NavBar>
                <div className='detaill'>
                    {
                        (this.state.data||[]).map(item=>
                            <div style={{marginTop:50}}>
                                <h1 style={{textAlign:"center",margin:"0 auto",
                            padding:'20px 0'}}>{item.title}</h1>
                                <div 
                                    dangerouslySetInnerHTML={{ __html: this.state.data[0].content }}>
                                </div>
                                <List.Item.Brief >
                                    <div style={{marginTop:20,flexDirection:'row',
                                    alignItems:'center',justifyContent:'center'}}>
                                        
                                            <input style={{width:'30%',height:40,borderRadius:40}}
                                                type='text' ref='pinglun' placeholder='评论一下'
                                                onChange={(e)=>this.inputChange(e)}
                                                icon={
                                                    'url( https://i.loli.net/2020/04/17/G6xCR7StsTnPkBv.png)'
                                                    }
                                            />
                                        <span style={{marginLeft:10}}>
                                            <button onClick={this.crital}>发送</button>
                                        </span>
                                        
                                        
                                        <span  style={{marginLeft:20}} >
                                            <img 
                                                ref='tab'
                                                style={{width:'5%'}}
                                                src="https://i.loli.net/2020/04/17/G6xCR7StsTnPkBv.png"
            
                                                onClick={(e)=>this.change2(item.chapterid,e)} alt='点赞'/>
                                        </span>
                                        <span  style={{marginLeft:20,marginTop:100}} >
                                            <img 
                                                ref='tab'
                                                id={item.chapterid}
                                                style={{width:'5%'}}
                                                src={(cookie.load('chapterId'))
                                                    ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                    :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                        </span>
                                        <span  style={{marginLeft:20}} >
                                            <img 
                                                ref='tab'
                                                style={{width:'5%',}}
                                                src=
                                                "https://i.loli.net/2020/04/17/TRaZx2wyLhzEkOj.png"
                                                    
                                                 alt='评论'/>
                                                <span style={{fontSize:20,marginLeft:10}}>
                                                     {this.state.plcount}
                                                </span>
                                        </span>
                                    </div>
                                </List.Item.Brief>
                                <div style={{marginTop:20}}>
                                        {
                                            (this.state.tips||[]).map(item=>
                                                <List.Item >
                                                    
                                                    
                                                    <List.Item.Brief style={{marginLeft:20}}>
                                                    
                                                    {item.plcontent}
                                                   
                                                    </List.Item.Brief>
                                                    <List.Item.Brief>
                                                    {item.telphone}
                                                    <span style={{marginLeft:20}}>{item.pltime}</span>
                                                    </List.Item.Brief>
                                                
                                                </List.Item>
                                            )
                                        }
                                   
                                </div>
                            
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(Detail)