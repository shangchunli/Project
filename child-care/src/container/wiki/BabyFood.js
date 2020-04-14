import React, { Component } from 'react'
import {NavBar,Icon,List} from 'antd-mobile';
import cookie from 'react-cookies'
import {withRouter} from 'react-router-dom'

class BabyFood extends Component {
    goBack=()=>{
        this.props.history.go(-1);
        // this.props.history.goBack();

    }
    constructor(){
        super();
        this.state={
            data:[],
            isKeep:false,
            chapterId:[],
            userId:cookie.load('userId')
        }
    }
    
    change1=(idx,e)=>{
        e.stopPropagation();
        let b=this.state.isKeep;
        this.setState({
            isKeep:!b,
            chapterId:idx

        })
        console.log(this.state.chapterId);
        // cookie.save("chapterId",this.state.chapterId);
        if(this.state.isKeep==true){
            
            e.target.src='https://s2.ax1x.com/2019/12/11/QrKe4s.png'
            // alert(this.state.userId);
           
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
                .then(res=>res.json())
                .then((res)=>{
                    console.log(res);
                })
        }else{
            e.target.src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png'
        }
        // console.log(this.state.chapterId);
    }
   
    componentDidMount(){
        fetch('http://localhost:5001/babyfood',{
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
       
    }
    too=(id)=>{
        this.props.history.push('/wiki/detail/'+id);
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
                        宝宝饮食
                </NavBar>
                <List>
                {
                    (this.state.data||[]).map((item,idx)=>{
                        
                        return(
                            <List ref='tab' id={item.chapterid} onClick={()=>this.too(item.chapterid)} >
                                <List.Item  style={{paddingTop:10,color:"#000"}}>
                                    
                                    <List.Item.Brief onClick={()=>this.gett()}
                                        style={{color:"#000",width:'75%',float:'left'}}>
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
                                            <img src={(cookie.load('chapterId')==idx+1)
                                                    ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                    :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                onClick={(e)=>this.change1(item.chapterid,e)} alt='收藏'/>
                                        </span>
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
export default withRouter(BabyFood);
