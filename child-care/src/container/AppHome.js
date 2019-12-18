import React, { Component } from 'react'
import "./apphome.css"
import cookie from 'react-cookies'
import {NavBar,Icon, List} from "antd-mobile"
import {withRouter} from 'react-router-dom'
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
        fetch('http://192.168.43.217:5001/caprice',{
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
    // fetch('http://192.168.43.217:5001/mybaby',{
    //         method: 'POST',//post请求 
    //         headers: { 
    //         'Content-Type': 'application/json;charset=UTF-8' 
    //         }, 
    //         body: JSON.stringify({
    //             userId:cookie.load('userId'),  
    //         })                    
    // })
    // .then(res=>res.json())
    // .then((res)=>{
    //     console.log(res);
    //     this.setState({
    //         baby:res
    //     })
    // })
    }
    handle=(pathname)=>{
        this.props.history.push("/home/"+pathname);
    }
    toDetail=(id)=>{
        this.props.history.push('/home/detail/'+id);

    }
    render() {
        let str;
       if(this.state.baby==[]){
           str={display:'block',marginTop:'20%'}
       }else{
           str={display:'none',marginTop:'20%'}
       }
    //    console.log(str);
       console.log(this.state.baby)
        return (
            <div>
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
                                        <p>{item.babyname+'今天'}
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
                    <div onClick={()=>{this.handle('picture')}}
                    style={{float:'left',paddingLeft:'8%',backgroundColor:'white'}}>
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
                {/* <div>
                    {
                        
                    }
                </div> */}
                <div>
                {
                    ((this.state.data||[]).map(item=>
                        <button className="shouye1" id={item.cid}
                        onClick={()=>this.toDetail(item.cid)}>
                            <img style={{marginLeft:'-60%'}}
                                src='images/home/7.png'
                                width='30' height='30'
                                />
                            <span style={{fontSize:'150%',paddingLeft:'10%'}}>{item.ccontent}</span>
                            <p style={{fontSize:'10',paddingTop:20}}>{item.ctime}</p>
                        </button>
                    )

                    )
                }   
                </div>
            </div>
        )
    }
}
export default withRouter(AppHome)