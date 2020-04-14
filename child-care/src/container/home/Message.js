import React, { Component } from 'react'

import {NavBar,Icon,List, DatePicker,Picker} from 'antd-mobile'
import './message.css'
import cookie from 'react-cookies';
import {withRouter} from 'react-router-dom'

const sex = [
    {
      label:
      (<div>
          男孩
      </div>),
      value: '男孩',
    },
    {
      label:
      (<div>
        女孩
      </div>),
      value: '女孩',
    }
  ];
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}
class Message extends Component {
      state = {
        date: now,
        username:'丫丫',
        height:'22',
        weight:'5.2'
      }
      goBack=()=>{
        this.props.history.go(-1);
      }
      onChangeSex = (sexs) => {
        this.setState({
          sexValue: sexs,
        });
      };
      baby=()=>{
          fetch("http://localhost:5001/addbaby",{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8' 
                }, 
                body: JSON.stringify({
                    userId:cookie.load('userId'),
                    name:this.refs.username.value,  
                    height:this.state.height ,
                    weight:this.state.weight,
                    year:this.state.date.getFullYear(),
                    month:this.state.date.getMonth()+1,
                    day:this.state.date.getDate(),
                    sex:this.state.sexValue[0]
                })  
        }
        ).then(res=>res.text())
        .then((res)=>{
            console.log(res);
            alert("修改成功")
        })
      }
      
      inputChange=()=>{
        let val1=this.refs.username.value;
        let weight1=this.refs.weight.value;
        let height1=this.refs.height.value;
        this.setState({
            username:val1,
            height:height1,
            weight:weight1
        })
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
                    设置宝宝信息
                </NavBar>
                <div style={{marginTop:70}}>
                    
                <List>
                    <div style={{width:'90%',margin:'0 auto'}}>
                <h4 style={{paddingTop:15}}>第一步：输入宝宝昵称</h4>
                <List.Item > <img src="https://s2.ax1x.com/2019/12/18/QTcxUO.png" 
                style={{width:'15%',height:'15%'}}/>
                <input style={{borderStyle:'none',width:'60%',borderBottom:'1px solid #000',
                height:'30px',marginLeft:20,textAlign:'center'}}
                type="text"  onChange={()=>this.inputChange()}
                 defaultValue={this.state.username} class="el-input__inner"  ref="username" />
               </List.Item>
                </div>
                </List> 
                </div>
                <div>
                    <List>
                        <div style={{width:'90%',margin:'0 auto'}}>
                            <h4 style={{paddingTop:15}}>第二步：选择宝宝性别</h4>
                                <Picker
          data={sex}
          value={this.state.sexValue}
          cols={1}
          onChange={this.onChangeSex}
        >
          <List.Item 
          arrow="horizontal"> <img src="https://s2.ax1x.com/2019/12/18/QTcXb6.png" 
          alt="QTcXb6.png" border="0" style={{width:'20%',height:'20%',marginRight:'20%'}}/>
            宝宝性别</List.Item></Picker> 
                        </div>
                    </List>
                </div>
                <div >
                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <div style={{width:'90%',margin:'0 auto'}}>
                    <h4 style={{paddingTop:15}}>第三步：宝宝生日</h4>
                    <img/>
                    <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item arrow="horizontal">
                    <img src="https://s2.ax1x.com/2019/12/18/QTgpPe.png" 
          alt="QTgpPe.png" border="0" style={{width:'20%',height:'20%',marginRight:'20%'}}/>

                      生日</List.Item>
                    </DatePicker>
                    </div>
                    </List>
                    
                </div>
                <div >
                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <div  style={{width:'90%',margin:'0 auto'}}>
                    <h4 style={{paddingTop:15}}>第三步：宝宝身高（cm）</h4>
                    <List.Item > <img src="https://s2.ax1x.com/2019/12/18/QTcz5D.png" 
                    alt="QTcz5D.png" border="0" 
                    style={{width:'15%',height:'15%'}}/>
                <input style={{borderStyle:'none',width:'60%',borderBottom:'1px solid #000',
                height:'30px',marginLeft:20,textAlign:'center'}}
                type="text"  onChange={()=>this.inputChange()}
                defaultValue={this.state.height} class="el-input__inner"  ref="height" />
               </List.Item>
                   
                    </div>
                    </List>
                </div>
                <div >
                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <div style={{width:'90%',margin:'0 auto'}}>
                    <h4 style={{paddingTop:15}}>第三步：宝宝体重（kg）</h4>
                    <List.Item > 
                    <img src="https://s2.ax1x.com/2019/12/18/QTcvVK.png" 
                    alt="QTcvVK.png" border="0"
                    style={{width:'15%',height:'15%'}}/>
                <input style={{borderStyle:'none',width:'60%', borderBottom:'1px solid #000', 
                height:'30px',marginLeft:20,textAlign:'center'}}
                type="text"  onChange={()=>this.inputChange()}
                defaultValue={this.state.weight} class="el-input__inner"  ref="weight" />
               </List.Item>
                    </div>
                    </List>
                </div>
                <list>
                    <List.Item>
                    <button style={{marginLeft:'20%',marginTop:'10%',
                    width:'50%',height:'40px',backgroundColor:'#d81e06',
                  borderRadius:'40px'}}
                    onClick={()=>this.baby()}>提交</button></List.Item>
                </list>
            </div>
        )
    }
}
export default withRouter(Message)