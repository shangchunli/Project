import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile';
import './detail.css'

export default class Detail extends Component {
   constructor(){
        super();
        this.state={
            data:''
        } 
    }
    goBack=()=>{
        window.history.go(-1);
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        fetch('http://192.168.43.217:5001/xiangqing',{
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
                data:res
            });
            
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
                <div className='detaill'>
                
                    {
                        (this.state.data||[]).map(item=>
                            <div style={{marginTop:50}}>
                                <h1 style={{textAlign:"center",margin:"0 auto",
                            padding:'20px 0'}}>{item.title}</h1>
                                <div 
                                dangerouslySetInnerHTML={{ __html: this.state.data[0].content }}></div>
                                {/* <img src={""+item.cimage+""}/> */}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
