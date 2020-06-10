import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge, List, InputItem } from 'antd-mobile';
import cookie from 'react-cookies'

 class Feedback extends Component {
     constructor(props){
         super(props);
         this.state = {
             feedback:'',
             contactDetails:''
         }
     }
//   点击提交按钮时向后台传递当前用户、联系方式、所反馈的意见
     handle = () =>{
        fetch('http://localhost:5001/addfeedback', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userid: cookie.load('userId'),
                feedback:this.state.feedback,
                contactDetails:this.state.contactDetails
            })
            })
            .then(res => res.text())
            .then((res) => {
                console.log(res);
            })
        alert('感谢小主您的意见，我们会进一步完善的哦~');
        this.refs.feedback.value = '';
        this.refs.contact.value = '';
    }
//      获取当前用户所填写的意见
    handleInput1 = (e) => {
        this.setState({
            feedback:e.target.value
        },()=>{console.log(this.state.feedback)})
    }
//     获取当前用户的联系方式
    handleInput2 = (e) => {
        this.setState({
            contactDetails:e.target.value
        },()=>{console.log(this.state.contactDetails)})
    }
    goBack=()=>{
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>
               <NavBar
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        fontWeight: "bolder",
                        position: "fixed", zIndex: 100, width: "100%", top: 0,
                    }}
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    rightContent={[
                        <div
                            style={{ marginRight: '6px', fontSize: '13px',
                            backgroundColor: 'rgb(125,185,222)',width:'40%',height:'50%',
                            color:'#fff',borderRadius:'9%' ,textAlign:'center',paddingTop:'10%'}}
                            dangerouslySetInnerHTML={{ __html: "提交" }}
                            onClick = {() => {this.handle()}}
                        />,
                    ]}
                >
                    意见反馈
                </NavBar>
                <div style={{marginTop:'50px'}}>
                    <textarea type='text' name='oponion' placeholder='请留下您宝贵的意见吧~'
                        onChange = {(e)=>{this.handleInput1(e)}}
                        style={{width:'96%',height:'300px',borderRadius:'0.5%',
                        marginLeft:'1%',marginBottom:'1%',border:'2px solid #fff'}}
                        ref='feedback'
                    />
                    <textarea type='text' name='telphone' placeholder='请留下您的联系方式(QQ、微信或手机号等)~'
                        onChange = {(e)=>{this.handleInput2(e)}}
                        style={{width:'96%',height:'50px',borderRadius:'0.5%',
                        marginLeft:'1%',marginBottom:'1%',border:'2px solid #fff'}}
                        ref='contact'
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Feedback);
