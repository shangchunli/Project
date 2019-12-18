import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile';
export default class Dairty extends Component {
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
        fetch('http://192.168.43.217:5001/cdetail',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                cid:this.props.match.params.id  
            })                    
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res)
       this.setState({
           data:res
       })
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
                <div style={{backgroundColor:'#fff',height:'630px'}}>
                
                    {
                        (this.state.data||[]).map(item=>
                            <div style={{marginTop:50,paddingLeft:'10%',
                            backgroundColor:'#fff',paddingRight:'10%'}}>
                                
                               <h4 style={{fontSize:'1.3em',
                                   paddingTop:30,lineHeight:'2em'
                            }}>{item.ccontent}</h4>
                               <img src={item.cimage} style={{marginTop:"20%",
                            width:'90%'}}/>
                               <p style={{marginTop:20,paddingBottom:20}}>
                                    {item.ctime}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
