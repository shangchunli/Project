import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { WhiteSpace ,NavBar,Icon,ImagePicker, WingBlank, SegmentedControl,List} from 'antd-mobile';
const data = [];
export default class Picture extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    constructor(){
        super();
        this.state={
            files: data,
            multiple: false
        }
    }
    handle=(pathname)=>{
        this.props.history.push("/my/"+pathname);
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
                    我的相册
                </NavBar>
                
                
                <img src=" https://s1.ax1x.com/2020/06/05/tD7rN9.png" 
                    style={{width:170,height:170,paddingTop:100,paddingLeft:30}} 
                    onClick={() => {this.handle('pictures1')}}
                    />
                
                <img src="https://s1.ax1x.com/2020/06/05/tDRFTP.jpg" 
                    style={{width:150,height:150,paddingLeft:30}} 
                    onClick={() => {this.handle('pictures2')}}
                    />
                <p style={{paddingLeft:'60%'}}>我的相册</p>
                
                
            </div>
        )
    }
}



