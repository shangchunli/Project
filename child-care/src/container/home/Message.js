import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {NavBar,Icon,List, DatePicker,Picker,Button} from 'antd-mobile'
import './message.css'
import cookie from 'react-cookies';

const sex = [
    {
      label:
      (<div>
        男
      </div>),
      value: '男',
    },
    {
      label:
      (<div>
        女
      </div>),
      value: '女',
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
        weight:'22'
      }
      onChangeSex = (sexs) => {
        this.setState({
          sexValue: sexs,
        });
      };
      baby=()=>{
          console.log(this.state.date.getFullYear());
          console.log((this.state.date.getMonth()+1));
          console.log(this.state.date.getDate());
          console.log(this.refs.username.value);
          console.log(this.refs.height.value);
          console.log(this.refs.weight.value);
          console.log(this.state.sexValue[0]);
          console.log(this.state)
          fetch("http://192.168.43.217:5001/addbaby",{
            method:'POST',
            headers: { 
                'Content-Type': 'application/json;charset=UTF-8' 
                }, 
                body: JSON.stringify({
                    userId:cookie.load('userId'),
                    name:this.refs.username.value,  
                    height:this.refs.height.value ,
                    height:this.refs.height.value  ,             
                    weight:this.refs.weight.value,
                    year:this.state.date.getFullYear(),
                    month:this.state.date.getMonth()+1,
                    day:this.state.date.getDate(),
                    sex:this.state.sexValue[0]
                })  
        }
        ).then(res=>res.text())
        .then((res)=>{
            console.log(res)
        })
        this.props.history.push('/home');
      }
      goBack=()=>{
        this.props.history.go(-1);
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
                    宝宝信息
                </NavBar>
                <div style={{marginTop:70}}>
                    
                <List>
                    <div style={{width:'90%',margin:'0 auto'}}>
                <h4 style={{paddingTop:15}}>第一步：输入宝宝昵称</h4>
                <List.Item > 
                  <img src="../images/touxiang.jpg" style={{marginTop:20,width:'20%',height:'50px',borderRadius:'100px'}}/>
                  <input style={{broder:'1px solid white',width:'60%',height:'30px',marginLeft:20}}
                          type="text"  onChange={()=>this.inputChange()}
                          value={this.state.username} class="el-input__inner"  ref="username" 
                  />
               </List.Item>
                </div>
                </List> 
                </div>
                <div>
                    <List>
                        <div style={{width:'90%',margin:'0 auto'}}>
                            <h4 style={{paddingTop:15}}>第二步：选择宝宝性别</h4>
                            {/* <List.Item ref='sexx'>  */}
                                {/* <button>男</button> 
                                <button>女</button> */}
                                
                                {/* </List.Item> */}
                                <Picker
                                  data={sex}
                                  value={this.state.sexValue}
                                  cols={1}
                                  onChange={this.onChangeSex}
                                >
          <List.Item arrow="horizontal">宝宝性别</List.Item></Picker> 
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
                    <List.Item arrow="horizontal">生日</List.Item>
                    </DatePicker>
                    </div>
                    </List>
                    
                </div>
                <div >
                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <div  style={{width:'90%',margin:'0 auto'}}>
                    <h4 style={{paddingTop:15}}>第三步：宝宝身高（cm）</h4>
                    <List.Item > <img src="../images/touxiang.jpg" style={{marginTop:20,
                        width:'20%',height:'50px',borderRadius:'100px'}}/>
                <input style={{broder:'1px solid white',width:'60%',
                height:'30px',marginLeft:20}}
                type="text"  onChange={()=>this.inputChange()}
                value={this.state.height} class="el-input__inner"  ref="height" />
               </List.Item>
                   
                    </div>
                    </List>
                </div>
                <div >
                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <div style={{width:'90%',margin:'0 auto'}}>
                    <h4 style={{paddingTop:15}}>第三步：宝宝体重（kg）</h4>
                    <List.Item > <img src="../images/touxiang.jpg" style={{marginTop:20,
                        width:'20%',height:'50px',borderRadius:'100px'}}/>
                <input style={{broder:'1px solid white',width:'60%',
                height:'30px',marginLeft:20}}
                type="text"  onChange={()=>this.inputChange()}
                value={this.state.weight} class="el-input__inner"  ref="weight" />
               </List.Item>
                    </div>
                    </List>
                </div>
                <list>
                    <List.Item>
                      <Button primary onClick={()=>this.baby()}>提交</Button>
                    </List.Item>
                </list>
            </div>
        )
    }
}
export default withRouter(Message);