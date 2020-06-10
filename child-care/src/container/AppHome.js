import React, { Component } from 'react'
import "./apphome.css"
import cookie from 'react-cookies'
import {NavBar,Icon, List} from "antd-mobile"
import {withRouter} from 'react-router-dom'
import ShowBottom from './ShowBottom'
class AppHome extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'',
            baby:''
        }
    }
    componentDidMount(){
        // console.log(this.props.match.params.id);
//         在首页获取随想58
        fetch('http://localhost:5001/caprice',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                userId:cookie.load('userId'),  
            })                    
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res)
        let str=res.reverse();
       this.setState({
           data:str
       })
    })
//         获取宝宝相关信息
    fetch('http://localhost:5001/mybaby',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                userId:cookie.load('userId'),  
            })                    
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res);
        this.setState({
            baby:res
        })
    })
    }
    photo=(pathname)=>{
        this.props.history.push("/home/"+pathname);
    }
//     跳转到随想详情页
    toDetail=(id)=>{
        this.props.history.push('/home/detail/'+id);
    }
    
    render() {
        let str;
        let str2;
        if(this.state.data==''){
            str2={display:'block',backgroundColor:'#fff',height:'300px',paddingLeft:'30%',
            lineHeight:'250px',marginTop:'20%'}
        }else{
            str2={display:'none',marginTop:'20%'}
        }
       if(this.state.baby==''){
           str={display:'block',marginTop:'20%',float:'left'}
       }else{
           str={display:'none',marginTop:'20%'}
       }
    //    console.log(str);
       console.log(this.state.baby)
        return (
            <div style={{}}>
                <ShowBottom/>
                <NavBar
                        style={{backgroundColor:'#fff',color:'#000',
                        fontWeight:"bolder",
                        position:"fixed",zIndex:100,width:"100%",top:0
                    }}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        ]}
                    >
                        呦呦育儿
                </NavBar>
              <div className='shouye2'style={{marginTop:50, 
                    background:'url("https://s2.ax1x.com/2019/12/10/QBR4bT.jpg")',
                    backgroundSize:'cover',opacity:'0.9'}}>
                           
                            <List.Item style={{
                                backgroundColor:'transparent'}}>
                    <div  style={{paddingLeft:'20%',color:'white',
                    paddingTop:'20%',float:'left'}}>
                       {
                           
                       (this.state.baby||[]).map((item)=>{
                           console.log(item)
                           if(!item){
                               return(
                                   <div>快来设置宝宝信息吧</div>
                               )
                           }else{
                                return(
                                    <div>
                                        <p>{item.babyname+'已经陪伴我们'}
                                        {new Date().getFullYear()-item.birthyear==0?'':
                                        (new Date().getFullYear()-item.birthyear)+'年'}<span>
                                        {(new Date().getMonth()+1)-item.birthmonth==0?'':
                                        ((new Date().getMonth()+1)-item.birthmonth)+'月'}</span>
                                        {new Date().getDate()-item.birthday+'天了'}</p>
                                    </div>
                                )
                           }
                       
                        }
                        )}
                    </div>
                    <div style={str}>快来设置宝宝信息吧</div>
                    <img 
                        style={{float:'left',marginLeft:'5%',marginTop:'20%'}}
                        src='https://s2.ax1x.com/2019/12/10/QB4ryn.png'
                        onClick={()=>{this.handle('Message')}}
                    />
                    </List.Item>
                </div>
                <div style={{width:'100%',backgroundColor:'white',height:60}}>
                    <div onClick={()=>{this.handle('picture')}}
                    style={{float:'left',paddingLeft:'16%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                        
                            src='https://s2.ax1x.com/2019/12/17/Qo9KFU.png'/>
                        <p>识图</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('chinese')}}
                    style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='https://s2.ax1x.com/2019/12/17/Qo9Yex.png'/>
                        <p>识字</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('song')}}
                    style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='https://s2.ax1x.com/2019/12/17/Qo9c0P.png'/>
                        <p>催眠曲</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('story')}}
                    style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='https://s2.ax1x.com/2019/12/17/Qo9H00.png'
                            />
                        <p>睡前故事</p>
                    </div>

                    <div 
                    onClick={()=>{this.handle('youxi')}}
                    style={{float:'left',paddingLeft:'6%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='https://s2.ax1x.com/2019/12/17/Qo9LkT.png'
                            />
                        <p>亲子游戏</p>
                    </div>
                </div>
                <div style={{marginTop:10,
                    backgroundColor:'pink',width:'100%',height:600,
                    paddingTop:10
                    }}
                >
                    <div>
                        <h2 style={{float:'left',textAlign:'center',lineHeight:50,
                        marginLeft:'40%'}}>
                            珍贵的瞬间
                        </h2>
                        <button onClick={()=>this.photo('photo')}
                        style={{float:'right',borderRadius:25,
                        height:50,width:'20%',marginRight:20}}>
                            一键做成相册
                        </button>
                    </div>
                    <div style={{marginTop:10}}>
                    {
                        ((this.state.data||[]).map(item=>{
                        if(item.ccontent.length>7){
                            item.ccontent=item.ccontent.slice(0,9)+'……'
                        }
                        return(
                            <button className="shouye1" id={item.cid}
                            onClick={()=>this.toDetail(item.cid)}>
                                <img style={{marginLeft:'10%',
                                float:'left'}}
                                    src='images/home/7.png'
                                    width='30' height='30'
                                    />
                                <h3 style={{fontSize:'150%',float:'left',
                                paddingLeft:'10%'}}>{item.ccontent}</h3>
                                <p style={{fontSize:'10',paddingTop:"10%"}}>{item.ctime}</p>
                            </button>
                    )    
                    })

                        )
                    }                      
                    <div style={str2}>快来添加成长日志吧</div>
                        
                    </div>
                    
                </div>

               
            </div>
        )
    }
}
export default withRouter(AppHome)
