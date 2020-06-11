import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { WhiteSpace ,NavBar,Icon,ImagePicker, WingBlank, SegmentedControl,List} from 'antd-mobile';
import cookie from 'react-cookies'

const data = [];
let str;
export default class Pictures1 extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    constructor(){
        super();
        this.state={
            files: data,
            multiple: false,
            userId: cookie.load('userId')
        }
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
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
    onChange1=()=>{
        
        fetch('http://localhost:5001/xiangce',{
            method: 'POST',//post请求 
            headers: { 
            'Content-Type': 'application/json;charset=UTF-8' 
            }, 
            body: JSON.stringify({
            userId:cookie.load('userId'),
            files:this.state.files    
            })                    
        })
        .then(res=>res.text())
        .then((res)=>{
            console.log(res);
            if(res=='success'){
                alert('yes');
            }else{
                alert('no')
            }
        })
   
    }
    render() {
        const { files } = this.state;
        let str;
        let str2;
        if(JSON.stringify(files)=="[]"){
             str=<ImagePicker
            style={{paddingTop:100}}
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 100}
            mutiple={this.state.multiple}
            />
            console.log(files);
        }else{
            str=<img src={files[0].url} alt="Base64 encoded image"
            height="200" width="200" 
            />
        }
       
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
                    选择照片
                </NavBar>
                <div style={{marginTop:'65px'}}>
                    {str}
                </div>
                
                
                
                
                <button onClick={this.onChange1}
                                style={{
                                    borderRadius: 5, width: '60%',
                                    height: 40, backgroundColor: '#00ccff',
                                    borderColor: '#00ccff', color: 'white',
                                    marginLeft:'18%',marginTop:'45%', position: 'absolute'
                                }}>
                                上传
                </button>
                
                
            </div>
        )
    }
}
