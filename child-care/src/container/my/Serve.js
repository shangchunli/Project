import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class Serve extends Component {
    constructor(){
        super();
        this.state={
            solute:''
        }
    }
    serve=(index)=>{
        if(index==1){
            this.setState({
                solute:'客服呦呦：'+'电子相册功能是为了让父母和宝贝更清晰直观的了解宝贝成长过程中的经验历程。电子相册配有温馨的音乐背景，'+
                '照片是从用户在随想中上传的照片制作而成，电子相册自动播放各个阶段的照片' 
     
            })
        }else if(index==2){
            this.setState({
                solute:'客服呦呦：'+'在首页处导航下方，有设置宝宝信息的字样，点击旁边的铅笔标签就可以去设置宝宝的信息'+
                '通过设置宝宝的出生日期就可以在首页显示宝贝陪伴父母的时间'
            })
        }else{
            this.setState({
                solute:'客服呦呦：'+'帖子是根据对应的标签发布到对应的标签页下，例如发布的宝宝穿搭就在百科页面的宝宝穿搭里面'+
                '发布的随想会在首页展示'
            })
        }
    }
    render() {
        return (
            <div style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <div style={{width:'90%',margin:'auto',textAlign:'center'}}>
                    客服呦呦：您好，请问有什么可以帮助您呢 ，您可以根据以下提示进行操作
                </div>
                <ul style={{lineHeight:'3em',width:'65%',margin:'auto',
                textAlign:'justify'}}>
                    <li style={{listStyle:'none',backgroundColor:'pink',margin:10}}
                    onClick={()=>this.serve(1)}>1、电子相册中的照片是在哪里获得的</li>
                    <li style={{listStyle:'none',backgroundColor:'pink',margin:10}}
                    onClick={()=>this.serve(2)}>2、怎么记录宝贝的出生日期及身高体重等</li>
                    <li style={{listStyle:'none',backgroundColor:'pink',margin:10}}
                    onClick={()=>this.serve(3)}>3、帖子和随想发在哪了</li>
                </ul>
                <div style={{paddingTop:10,width:'75%',margin:'auto',lineHeight:'2em'}}>
                    {this.state.solute}
                </div>
            </div>
        )
    }
}
export default withRouter(Serve)
