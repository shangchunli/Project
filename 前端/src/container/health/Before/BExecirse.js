import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import Sidebar from "react-sidebar";
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge, List, InputItem ,Button,Toast} from 'antd-mobile';
import cookie from 'react-cookies'


class BExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            data: [],
            currentScene: 0,
            length:0
        }
    }
    componentDidMount() {
        var title = '腿部运动';
        fetch('http://localhost:5001/findbexercise', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userid: cookie.load('userId'),
                // title:this.state.title
                title: title
            })
        })
            .then(res => res.json())
            .then((res) => {
                // console.log('1');
                // console.log(res);
                this.setState({
                    data: res,
                    length:res.length
                })
                // console.log(this.state.data,this.state.length);
            })
    }
    liChange = (e) => {
        var idx = e.target.getAttribute('idx');
        var li = document.getElementsByTagName('li');
        var title = li[idx].childNodes[0].data;
        // console.log(title);
        this.setState({
            title:li[idx].childNodes[0].data,
            currentScene:0
        },()=>{console.log()})
        for (var i = 0; i < li.length; i++) {
            if (i == idx) {
                li[i].className = 'siderbar1';
            } else {
                li[i].className = 'siderbar';
            }
        }
        fetch('http://localhost:5001/findbexercise', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userid: cookie.load('userId'),
                // title:this.state.title
                title: title
            })
        })
            .then(res => res.json())
            .then((res) => {
                // console.log('1');
                // console.log(res);
                this.setState({
                    data: res,
                    length:res.length
                })
                // console.log(this.state.data);
                // console.log(this.state.length);
            })
    }
    goBack = () => {
        this.props.history.go(-1);
    }
    prev = (e) => {
        // document.getElementsByTagName('span')[2].setAttribute('class','underline');
        e.target.setAttribute('class','underline1');
        var currentPage = this.state.currentScene;
        // console.log(this.state.currentPage);
        if(currentPage==0){
            Toast.info('当前已为第一页',2);
        }else{
            this.setState({
                currentScene:currentPage - 1
            },()=>{console.log()}
            )
        }
        
    }
    next = (e) => {
        // document.getElementsByTagName('span')[0].setAttribute('class','underline');
        e.target.setAttribute('class','underline1');
        var currentPage = this.state.currentScene;
        // console.log(currentPage);
        if(currentPage == this.state.length-1){
            Toast.info('当前已为最后一页',2);
        }else{
            this.setState({
                currentScene:currentPage + 1
            },()=>{console.log()}
            )
        }
        
        
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <NavBar
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        fontWeight: "bolder",
                        position: "fixed", zIndex: 100, width: "100%", top: 0
                    }}
                    icon={<Icon type="left" onClick={this.goBack} />}
                >
                    产前锻炼
                </NavBar>
                {/* 侧边栏 */}
                <div style={{ width: '17%', height: '800px', 
                        float:'left',
                        marginTop: '48px', backgroundColor: '#fff'
                 }}>
                    <ul style={{ width: '100%' }}>
                        <li idx='0' onClick={(e) => { this.liChange(e) }} className='siderbar1'>腿部运动</li>
                        <li idx='1' onClick={(e) => { this.liChange(e) }} className='siderbar'>腰部运动</li>
                        <li idx='2' onClick={(e) => { this.liChange(e) }} className='siderbar'>盆骨运动</li>
                    </ul>
                </div>
                {/* content */}
                <div style={{
                    float:"left",marginTop: '48px',
                    background: "url('https://i.loli.net/2020/05/19/S7BcY2VeME3KvIQ.jpg')",
                    width: '77%', height: '652px',
                    paddingTop:'30%',fontSize:'17px',marginLeft:'3%',marginRight:'3%'
                }}>
                    {
                        (this.state.data || []).map((item,index)=>{
                            if(index == this.state.currentScene){
                                return(
                                    <div style={{height:'50%',lineHeight:'2em'}}>&nbsp;&nbsp;&nbsp;{item.content}</div>
                                )
                                
                            }
                        })
                    }
                    <div style={{position:'fixed',width:'100%',marginTop:'5%'}}>
                        {/* <span style={{marginLeft:'7%'}}><Button style={{width:'25%'}}>上一页</Button></span>
                        <span style={{marginLeft:'7%'}}>第{this.state.currentScene}页</span>
                        <span style={{marginLeft:'7%'}}><Button style={{width:'25%'}}>下一页</Button></span> */}
                        
                        <span style={{marginLeft:'15%'}} className='underline' onClick={(e)=>{this.prev(e)}}>
                            上一页
                        </span>
                        <span style={{marginLeft:'10%',marginRight:'10%'}} >
                            第{this.state.currentScene+1}页
                        </span>
                        <span style={{marginRight:'15%'}} className='underline' onClick={(e)=>{this.next(e)}}>
                            下一页
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(BExercise)
