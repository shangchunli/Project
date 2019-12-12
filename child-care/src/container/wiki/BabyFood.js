import React, { Component } from 'react'
import { Flex, WhiteSpace ,NavBar,Icon,List} from 'antd-mobile';
import cookie from 'react-cookies'

export default class BabyFood extends Component {
    handle=(i)=>{
        window.location.href='/wiki/babyfood/detail/'+i;
    }
    goBack=()=>{
        window.history.go(-1);
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
        let b=this.state.isKeep;
        this.setState({
            isKeep:!b,
            chapterId:idx+1

        })
        console.log(cookie.load('chapterId'));
        cookie.save("chapterId",this.state.chapterId);
        if(this.state.isKeep==true){
            
            e.target.src='https://s2.ax1x.com/2019/12/11/QrKe4s.png'
            // alert(this.state.userId);
           
                fetch('http://192.168.43.217:5001/cookie',{
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
        console.log(this.state.chapterId);
    }
   
    componentDidMount(){
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
                // console.log()
            });
            // console.log(this.state.data)
        })
       
    }
    too=()=>{
        console.log(this.refs.tab);
        console.log(document.getElementById('12'));
    }
    gett=()=>{
        
        alert("111")
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
                                        <List ref='tab' onClick={()=>this.too()} >
                                            <List.Item  style={{paddingTop:10,color:"#000"}}>
                                               
                                                <List.Item.Brief onClick={()=>this.gett()}
                                                 id={item.chapterid} style={{color:"#000",width:'75%',float:'left'}}>
                                                    {item.title}
                                                    {/* 什么是产后抑郁症
                                                    产后抑郁症是女性精神障碍中... */}
                                                </List.Item.Brief>
                                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg"
                                                        style={{
                                                        width:'20%',height:'10%'}}
                                                />
                                                <List.Item.Brief >
                                                    丫丫妈妈
                                                    <span style={{marginLeft:10}}>11月12日</span>
                                                    <span  style={{marginLeft:20}} >
                                                        <img src={(cookie.load('chapterId')==idx+1)
                                                                ?'https://s2.ax1x.com/2019/12/11/QrKe4s.png'
                                                                :"https://s2.ax1x.com/2019/12/04/Q1fu7T.png"}
                                                            onClick={(e)=>this.change1(idx,e)} alt='收藏'/>
                                                        {/* {cookie.load('chapterId')} */}
                                                    </span>
                                                </List.Item.Brief>
                                            </List.Item>
                                        </List>
                                    )
                                })
                            }
                     </List>

                {/* <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" 
                            style={{width:'100%',height:'160px'}}
                            onClick={()=>{this.handle('1')}}
                            />
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则?果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                   
                                    <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食时间?果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" 
                            style={{width:'100%',height:'160px'}}
                            // onClick={this.handle}
                            />
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食时间?果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item >
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食时间？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食原则？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                    <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食时间？
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex> */}
            </div>
        )
    }
}
