import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WingBlank, WhiteSpace,
    Flex,List} from 'antd-mobile';
    import './collect.css'
    import cookie from 'react-cookies'

    const tabs = [
        { title: '常见疾病' },
        { title: '疫苗' },
        { title: '穿搭' },
        { title: '饮食' },
        { title: '教育' },
        { title: '产后抑郁' },
        { title: '身材恢复' },
        { title: '孕期护理' },
        { title: '焦虑' },
        { title: '妈妈饮食' }
      ];
export default class Collect extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentWillMount(){
        fetch('http://192.168.43.217:5001/mycollect',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
                userId:cookie.load('userId')
            })                    
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res);
       this.setState({
           data:res
       })
    })
    }
    goBack=()=>{
        window.history.go(-1);
    }
    too=(id)=>{
        console.log(id)
        window.location.href='/wiki/detail/'+id;
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
                    我的收藏
                </NavBar>
                <WhiteSpace />
                <div style={{marginTop:60,width:"100%"}}>
                    <Tabs tabs={tabs} initialPage={2} 
                    animated={false} useOnPan={false}>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px',width:"100%" }}>
                            {
                                (this.state.data||[]).map((item,idx)=>{
                                    if(item.tab=='常见疾病'){
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
                                                        丫丫妈妈
                                                        <span style={{marginLeft:10}}>11月12日</span>
                                                        <span  style={{marginLeft:20}} >
                                                            <img 
                                                                ref='tab'
                                                                id={item.chapterid}
                                                                src={(cookie.load('chapterId'))
                                                                    ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                    :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                                onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                                        </span>
                                                        {item.chapterid}
                                                    </List.Item.Brief>
                                                </List.Item>
                                            </List>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px' ,width:"100%"}}>
                            {
                                (this.state.data||[]).map((item,idx)=>{
                                    if(item.tab=='疫苗'){
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
                                                        丫丫妈妈
                                                        <span style={{marginLeft:10}}>11月12日</span>
                                                        <span  style={{marginLeft:20}} >
                                                            <img 
                                                                ref='tab'
                                                                id={item.chapterid}
                                                                src={(cookie.load('chapterId'))
                                                                    ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                    :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                                onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                                        </span>
                                                        {item.chapterid}
                                                    </List.Item.Brief>
                                                </List.Item>
                                            </List>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px' ,width:"100%"}}>
                              {
                                (this.state.data||[]).map((item,idx)=>{
                                    if(item.tab=='穿搭'){
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
                                                        丫丫妈妈
                                                        <span style={{marginLeft:10}}>11月12日</span>
                                                        <span  style={{marginLeft:20}} >
                                                            <img 
                                                                ref='tab'
                                                                id={item.chapterid}
                                                                src={(cookie.load('chapterId'))
                                                                    ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                    :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                                onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                                        </span>
                                                        {item.chapterid}
                                                    </List.Item.Brief>
                                                </List.Item>
                                            </List>
                                        )
                                    }
                                })
                            }
                            
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px' ,width:"100%"}}>
                             {
                                (this.state.data||[]).map((item,idx)=>{
                                    if(item.tab=='宝宝饮食'){
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
                                                        丫丫妈妈
                                                        <span style={{marginLeft:10}}>11月12日</span>
                                                        <span  style={{marginLeft:20}} >
                                                            <img 
                                                                ref='tab'
                                                                id={item.chapterid}
                                                                src={(cookie.load('chapterId'))
                                                                    ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                    :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                                onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                                        </span>
                                                        {item.chapterid}
                                                    </List.Item.Brief>
                                                </List.Item>
                                            </List>
                                        )
                                    }
                                })
                            }
                            
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px' ,width:"100%"}}>
                            {
                                (this.state.data||[]).map((item,idx)=>{
                                    if(item.tab=='穿搭'){
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
                                                        丫丫妈妈
                                                        <span style={{marginLeft:10}}>11月12日</span>
                                                        <span  style={{marginLeft:20}} >
                                                            <img 
                                                                ref='tab'
                                                                id={item.chapterid}
                                                                src={(cookie.load('chapterId'))
                                                                    ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                    :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                                onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                                        </span>
                                                        {item.chapterid}
                                                    </List.Item.Brief>
                                                </List.Item>
                                            </List>
                                        )
                                    }
                                })
                            }
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
