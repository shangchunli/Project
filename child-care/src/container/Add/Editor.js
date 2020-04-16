import React, { Component } from 'react';
import './editor.css';
import E from 'wangeditor'
import {Button,Accordion,List, WhiteSpace} from 'antd-mobile'
import cookie from 'react-cookies'
 
console.log(cookie.load('userId'));
class Editor extends Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        editorContent: '',
        title:'',
        owner:"manager",
        temp:1,
        tabs:'',
        userId:cookie.load('userId')
      }
  }
  inputChange=()=>{
    let tit=this.refs.titl.value;
    this.setState({
      title:tit
  })
  }
  getTab=(index)=>{
    var str='2'+index
    var tabbb=document.getElementById(str);
    console.log(tabbb)
    tabbb.style.background='skyblue'
    this.setState({
      temp:index,
    },()=>{
      console.log(this.state.temp);
      var ta=this.refs.tabss.props.children[this.state.temp-1].props.children
      this.setState({
        tabs:ta,
        owner:this.state.userId
      })
    })
  }
  getTab1=(index)=>{
    var str='1'+index
    var tabbb=document.getElementById(str);
    tabbb.style.background='skyblue'
    this.setState({
      temp:index,
    },()=>{
      
      console.log(this.state.temp);
      var ta2=this.refs.tab2.props.children[this.state.temp-1].props.children
      this.setState({
        tabs:ta2,
        owner:this.state.userId
      })
    })
  }

  render() {
    return (
      <div>
      <div contentEditable="true" className="App">
        <input style={{border:"5px solid gray",
        width:"100%",fontWeight:'bolder',fontSize:'18px'}}
        type="text"  onChange={()=>this.inputChange()}
                placeholder="标题"   ref="titl" />
        {/* 将生成编辑器 */}
        <WhiteSpace/>
        <div ref="editorElem" style={{textAlign: 'left'}}>
        </div>
        </div>

      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="关于宝宝">
              <List.Item ref='tabss'>
                  <div onClick={()=>this.getTab(1)} checked='false' id='21'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>常见疾病</div>
                  <div onClick={()=>this.getTab(2)} checked='false' id='22'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>疫苗</div>
                  <div onClick={()=>this.getTab(3)} checked='false' id='23'
                  style={{ textAlign:"center",float:"left", 
                  backgroundColor:"#fff",width:"30%",height:25}}>宝宝饮食</div>
                  <div onClick={()=>this.getTab(4)} id='24'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>潮娃穿搭</div>
                  <div onClick={()=>this.getTab(5)} id='25'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>宝宝教育</div>
                  <div onClick={()=>this.getTab(6)} id='26'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>小儿推拿</div>
              </List.Item>
          </Accordion.Panel>
          <Accordion.Panel header="关于妈妈">
              <List.Item ref='tab2'>
                <div onClick={()=>this.getTab1(1)} id='11'
                style={{ textAlign:"center", float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>孕期护理</div>
                  <div onClick={()=>this.getTab1(2)} id='12'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>身材恢复</div>
                  <div onClick={()=>this.getTab1(3)} id='13'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>产后抑郁</div>
                  <div onClick={()=>this.getTab1(4)} id='14'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>妈妈饮食</div>
                  <div onClick={()=>this.getTab1(5)} id='15'
                  style={{ textAlign:"center",float:"left",
                  backgroundColor:"#fff",width:"30%",height:25}}>焦虑</div>
              </List.Item>
          </Accordion.Panel>
        </Accordion>
      </div>

        <Button type="primary"
        style={{marginTop:20}}
         onClick={this.clickHandle.bind(this)}>发表</Button>
      </div>
    );
  }
  componentDidMount() {
    const elem = this.refs.editorElem
    let tit= this.refs.titl
    console.log(tit);
    const editor = new E(elem)
    editor.customConfig.uploadImgServer = "http://localhost:5001/chapimg";
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        // title:tit,
        editorContent: html
      })
    }
    editor.create()
    editor.customConfig.uploadImgHooks = {
      before: function (xhr, editor, files) {

      },
      success: function (xhr, editor, result) {
          //console.log(result);
      },
      fail: function (xhr, editor, result) {
          console.log(1)
      },
      error: function (xhr, editor) {
          console.log(2)
      },
      timeout: function (xhr, editor) {
      },
      customInsert: function (insertImg, result, editor) {
          console.log(3);
          var url = result.url
          insertImg(url)
      }
    
  }



  }
  clickHandle() {
    console.log(this.state.tabs)
    console.log(this.state.owner)
   fetch('http://localhost:5001/addChapters',{
      method: 'POST',//post请求 
  headers: { 
  'Content-Type': 'application/json;charset=UTF-8' 
  }, 
  body: JSON.stringify({
    title:this.state.title,
    content:this.state.editorContent,
    tabs:this.state.tabs,
    owner:this.state.userId
  })
  })
  .then(res=>res.text())
  .then((res)=>{
    console.log(res);
    alert("发表成功")
  })
  }
}

export default Editor;
