import React, { Component } from 'react'
import { NavBar,Icon,List } from 'antd-mobile';
import './detail.css'
import {withRouter} from 'react-router-dom'
import cookie from 'react-cookies'

{/* <div>
     hsbo
</div> */}


class Detail extends Component {
   constructor(){
        super();
        this.state={
            data:'',
            tips:'',
            isKeep:false,
            isGive:false,
            chapterid:'',
            pingluns:'',
            plcount:'',
            dzcount:'',
            sccount:'',
            plstate:false,
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
                dzcount:res[0].dzcount,
                sccount:res[0].sccount,
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
        
        fetch('http://localhost:5001/plcount',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                chapterId:this.props.match.params.id
            })                    
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log('comdid'+res)
            this.setState({
                plcount:res.length
            })
        })
            

        // fetch('http://localhost:5001/showplcount',{
        //     method: 'POST',//post请求 
        //     headers: { 
        //     'Content-Type': 'application/json;charset=UTF-8' 
        //     }, 
        //     body: JSON.stringify({
        //         chapterId:  this.props.match.params.id               
        //     })                    
        // })
        // .then(res=>res.json())
        // .then((res)=>{
        //     console.log(res);
        //     this.setState({
        //        plcount:res[0].plcount,
        //     });
        // })
        // fetch('http://localhost:5001/showdzcount',{
        //     method: 'POST',//post请求 
        //     headers: { 
        //     'Content-Type': 'application/json;charset=UTF-8' 
        //     }, 
        //     body: JSON.stringify({
        //         // userId:this.state.userId,  
        //         chapterId:this.props.match.params.id               
        //     })                    
        // })
        // .then(res=>res.json())
        // .then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         dzcount:res[0].dzcount
        //     });
            
        // })
        // fetch('http://localhost:5001/showsccount',{
        //     method: 'POST',//post请求 
        //     headers: { 
        //     'Content-Type': 'application/json;charset=UTF-8' 
        //     }, 
        //     body: JSON.stringify({
        //         // userId:this.state.userId,  
        //         chapterId:this.props.match.params.id               
        //     })                    
        // })
        // .then(res=>res.json())
        // .then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         sccount:res[0].sccount
        //     });
            
        // })

        
    }
    
    change1=(idx,e)=>{
        e.stopPropagation();
        let b=!this.state.isKeep;
        this.setState({
            isKeep:b,
            
        },function () { 
            console.log(this.state.isKeep);
         })
        if(this.state.isKeep==false){
            
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
                .then(res=>res.text())
                .then((res)=>{
                    console.log(res);
                })
                fetch('http://localhost:5001/addsccount',{
                        method: 'POST',//post请求 
                        headers: { 
                        'Content-Type': 'application/json;charset=UTF-8' 
                        }, 
                        body: JSON.stringify({
                            chapterId:this.state.chapterid,
                            sccount:this.state.sccount                    
                        })                    
                })
                .then(res=>res.text())
                .then((res)=>{
                    if(res=='sc success'){
                        fetch('http://localhost:5001/showsccount',{
                            method: 'POST',//post请求 
                            headers: { 
                            'Content-Type': 'application/json;charset=UTF-8' 
                            }, 
                            body: JSON.stringify({
                                // userId:this.state.userId,  
                                chapterId:this.props.match.params.id               
                            })                    
                        })
                        .then(res=>res.json())
                        .then((res)=>{
                            console.log(res);
                            this.setState({
                                sccount:res[0].sccount
                            })
                        })
                    
                    }
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
                // fetch('http://localhost:5001/addplcount',{
                    this.setState({
                        plstate:true
                    },function () { 
                        console.log(this.state.plstate);
                        if(this.state.plstate){
                            console.log('333')
                            fetch('http://localhost:5001/plcount',{
                                method: 'POST',//post请求 
                                headers: { 
                                'Content-Type': 'application/json;charset=UTF-8' 
                                }, 
                                body: JSON.stringify({
                                    chapterId:this.state.chapterid,
                                    plstate:this.state.plstate
                                })                    
                            })
                            .then(res=>res.json())
                            .then((res)=>{
                                console.log('1111')
                                console.log(res);
                                console.log(res.length);
                                this.setState({
                                    plcount:res.length
                                })
                            })
                        }
                    
                    // fetch('http://localhost:5001/plcount',{
                    //     method: 'POST',//post请求 
                    //     headers: { 
                    //     'Content-Type': 'application/json;charset=UTF-8' 
                    //     }, 
                    //     body: JSON.stringify({
                    //         chapterId:this.state.chapterid,
                    //     })                    
                    // })
                    // .then(res=>res.text())
                    // .then((res)=>{
                    //     console.log(res)
                        // if(res=='pl success'){
                        //     fetch('http://localhost:5001/showplcount',{
                        //         method: 'POST',//post请求 
                        //         headers: { 
                        //         'Content-Type': 'application/json;charset=UTF-8' 
                        //         }, 
                        //         body: JSON.stringify({
                        //             chapterId:  this.props.match.params.id               
                        //         })                    
                        //     })
                        //     .then(res=>res.json())
                        //     .then((res)=>{
                        //         console.log(res[0].plcount)
                        //         this.setState({
                        //             plcount:res[0].plcount
                        //         })
                        //     })
                        // }
                    })
                }else{
                    alert('评论失败')
                }
            })

    }
    //点赞数
    change2=(idx,e)=>{
        
        e.stopPropagation();
        let c=this.state.isGive;
        this.setState({
            isGive:!c,
            chapterid:this.props.match.params.id  
        })
        console.log(this.state.chapterid);
        if(this.state.isGive==false){
            
            e.target.src='https://s1.ax1x.com/2020/04/21/JGLB8I.png '
           
                fetch('http://localhost:5001/dzcounnt',{
                        method: 'POST',//post请求 
                        headers: { 
                        'Content-Type': 'application/json;charset=UTF-8' 
                        }, 
                        body: JSON.stringify({
                            chapterId:this.state.chapterid,
                            dzcount:this.state.dzcount                    
                        })                    
                })
                .then(res=>res.text())
                .then((res)=>{
                    console.log(res);
                    fetch('http://localhost:5001/showdzcount',{
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
                            dzcount:res[0].dzcount
                        });
                        
                    })
                });
               

        }else{
            e.target.src='https://s1.ax1x.com/2020/04/21/JGLIx0.png'
        }
    }
    del=()=>{
        alert('del')
        fetch('http://localhost:5001/delcom',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                chapterId:this.props.match.params.id,
                userId:this.state.userId       
            })                    
        })
        .then(res=>res.text())
        .then((res)=>{
            if(res=='del success'){
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
                fetch('http://localhost:5001/plcount',{
                    method: 'POST',//post请求 
                    headers: { 
                    'Content-Type': 'application/json;charset=UTF-8' 
                    }, 
                    body: JSON.stringify({
                        chapterId:this.state.chapterid,
                        plstate:this.state.plstate
                    })                    
                })
                .then(res=>res.json())
                .then((res)=>{
                    console.log('1111')
                    console.log(res);
                    console.log(res.length);
                    this.setState({
                        plcount:res.length
                    })
                })
            
            }
            
            
        })

    }
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
                {/* <ShowBottom style={{display:'none'}}/> */}
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
                                            <button onClick={this.crital} 
                                            style={{borderRadius:20,width:'10%',height:30}}>
                                                发送
                                            </button>
                                        </span>
                                        
                                        
                                        <span  style={{marginLeft:20}} >
                                            <img 
                                                ref='tab'
                                                style={{width:'5%'}}
                                                src={(this.state.isGive)
                                                    ?'https://s1.ax1x.com/2020/04/21/JGLB8I.png'
                                                    :"https://s1.ax1x.com/2020/04/21/JGLIx0.png"}
            
                                                onClick={(e)=>this.change2(item.chapterid,e)} alt='点赞'/>
                                                <span>{this.state.dzcount}</span>
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
                                                <span>{this.state.sccount}</span>
                                        </span>
                                        <span  style={{marginLeft:20}} >
                                            <img 
                                                ref='tab'
                                                style={{width:'5%',}}
                                                src=
                                                "https://s1.ax1x.com/2020/04/27/Jf4g8s.png"
                                                    
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
                                                <div 
                                                    style={{
                                                        backgroundColor:'green',
                                                        padding:10,
                                                        marginTop:10
                                                    }}
                                                >
                                                    <List.Item
                                                       
                                                    >
                                                        <img src={item.head} 
                                                            style={{height:50,width:50,marginRight:25,borderRadius:50}}/>
                                                        {item.telphone}<span style={{marginLeft:20}}>
                                                            {item.pltime} </span>
                                                            <span style={{marginLeft:'30%'}} onClick={this.del}>
                                                                <img src='https://i.loli.net/2020/05/11/sWpCgexZzHkGVQF.png'/>    
                                                            </span>
                                                            <List.Item.Brief style={{marginLeft:30,marginTop:10}}>
                                                            {item.plcontent}</List.Item.Brief>
                                                    </List.Item>
                                                    {/* <List.Item >
                                                        <List.Item.Brief style={{marginLeft:20}}>
                                                        
                                                        {item.plcontent}
                                                    
                                                        </List.Item.Brief>
                                                        <List.Item.Brief>
                                                        {item.telphone}
                                                        <span style={{marginLeft:20}}>{item.pltime}</span>
                                                        </List.Item.Brief>
                                                    </List.Item> */}
                                                </div>
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