import React, { Component } from 'react'
import { ImagePicker, WingBlank, SegmentedControl} from 'antd-mobile';
import './sui.css';
import Editor from './Add/Editor'
import registerServiceWorker from './Add/registerServiceWorker'
const data = [];

export default class Sui extends Component {
    state = {
        files: data,
        multiple: false,
    }
    componentWillMount(){
      fetch('http://192.168.43.217:5001/add',{
              method: 'POST',//post请求 
          headers: { 
          'Content-Type': 'application/json;charset=UTF-8' 
          }, 
          body: JSON.stringify({
              title:"hello",
              content:"world"
          }
          )
      })
      .then(res=>res.text())
      .then((res)=>{
          console.log(res);
      })
  }
    onChange = (files, type, index) => {
        this.setState({
          files,
        });
      }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
    }
   
    render() {
        // const { files } = this.state;
        // console.log(files);
        // let str;
        // let obj = window.event.srcElement;
        // if(JSON.stringify(files)!="[]"){
        //     str=<img src={files[0].url} alt="Base64 encoded image"
        //     height="200" width="200" style={{borderRadius:"80%",
        //         width:"100%",height:"100%"
        //     }}
        //     />
        // }
        return (
            <div >
                <Editor/>
                {/* <div contentEditable="true" ref>
                   <p onClick={this.change} style={{marginLeft:"100px"}}>发表你的看法吧</p>

                 <ImagePicker
            style={{paddingTop:'30%'}}
            files={files}
            onChange={this.onChange}
            
            selectable={files.length < 100}
            multiple={this.state.multiple}
            />
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标签：
                 <button className='tie1' >潮娃穿搭</button>
                 <button className='tie1' >常见疾病</button>
                 <button className='tie1' >亲子教育</button>
                 ....
                 <p style={{paddingTop:'5%'}}>......................................................................................................................</p>
            </div>
            <button className='sui1' style={{marginLeft:'23%'}}>发表</button> */}

            </div>
        )
    }
}
registerServiceWorker();

