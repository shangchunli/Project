import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Flex, Tabs, WhiteSpace, Badge, List, InputItem } from 'antd-mobile';
// import Addtopic1 from './Addtopic.css'
import cookie from 'react-cookies'

class Addtopic extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputInner:'',
            data:[]
        }
    }
    
    inputChange = (e) => {
        console.log("change");
        // console.log(e.target.value);
        this.setState({
            inputInner:e.target.value
        })
    }
    componentDidMount(){
        fetch('http://localhost:5001/my',{
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
            //   console.log(res);
              this.setState({
                  data:res[0]
              })
            })
          

    }
    handle = () => {
        console.log('aa');
        // console.log(cookie.load('userId'));
        // console.log(this.state.inputInner);
        // console.log(this.state.data);

        var today = new Date(),
            date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
        // console.log(date);
        // 向后台发送添加话题接口，发送数据：当前用户+话题题目+话题创建时间（年月日），返回数据：添加话题成功
        fetch('http://localhost:5001/addtopic', {
            method: 'POST',//post请求 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                userId: cookie.load('userId'),
                tcontent: this.state.inputInner,
                ttime: date,
                headimg:this.state.data.head
            })
            })
            .then(res => res.text())
            .then((res) => {
                console.log(res);
            })
        this.props.history.push('/wiki/topic');        
    }
    goBack=()=>{
        this.props.history.go(-1);
    }
    render() {
        return (
            <div >
                <NavBar
                    style={{
                        backgroundColor: '#fff', color: '#000',
                        fontWeight: "bolder",
                        position: "fixed", zIndex: 100, width: "100%", top: 0
                    }}
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    rightContent={[
                        <div
                            style={{ marginRight: '6px', fontSize: '13px',
                            backgroundColor: 'rgb(125,185,222)',width:'50%',height:'50%',
                            color:'#fff',borderRadius:'9%' ,textAlign:'center',paddingTop:'10px'}}
                            dangerouslySetInnerHTML={{ __html: "完成" }}
                            onClick={() => { this.handle() }}
                        />,
                    ]}
                >
                    创建话题
                </NavBar>
                <div>
                    <textarea 
                        style={{marginTop:'15%',width:"95%",height:"500px",marginLeft:'2.5%'}} 
                        onChange = {(e) => this.inputChange(e)}
                        placeholder="输入话题一起来讨论吧！"
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Addtopic);