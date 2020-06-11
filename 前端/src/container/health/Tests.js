import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {Icon} from 'antd-mobile';
let str;
let count=0;
class Tests extends Component {
    constructor(){
        super();
        this.state={
            // elem_bac:'#fff',
            sum:'',
            showResult:''
        }
    }
    chooses=(index)=>{
        count+=index;
    }
    goBack=()=>{
        this.props.history.go(-1);
    }
    lastJump=()=>{
        this.setState({
            showResult:true,
            sum:count
        },function(){
            // alert(this.state.sum)
            if(this.state.sum<12){
                str='测试总分为'+this.state.sum+'，根据您的测试结果判断：'+'您的状态良好，请继续保持'
            }else if(this.state.sum<=13){
                str='您需要注意调节自己的情绪，避免带来更大影响'
            }else{
                str='您的心情可能波动较大，注意调节，建议在家人陪同下去医院做个检查'
            }
            this.setState({
                showResult:str
            })
        })
    }
    render() {
        return (
            <div>
                <Icon type="left" onClick={this.goBack} style={{paddingTop:'20px',marginLeft:'3%'}}/>
                <div style={{width:'70%',margin:'auto',fontSize:16,
               lineHeight:'2em',textIndent:'2em',backgroundColor:'pink'}}>
                爱丁堡产后抑郁量表( EPDS)是应用广泛的自评量表，包括10项内容，根据症状的严重度， 每项内容分4级评分(0 ，1 ，2 ，3分)，于产后6 周进行，完成量表评定约需5分钟。10个项目分值的总和为总分。总分在12～13者可能患有不同程度的抑郁性疾病。总分相加≥13分者可诊断为产后抑郁症。
                </div>
                <div style={{width:'70%',fontSize:16,paddingTop:10,
                margin:'auto'}}>
                    以下为自测题，直接点击对应选项即可
                </div>
                <ol style={{width:'70%',margin:'auto',paddingLeft:40}}>
                    <li style={{marginTop:10}}>我能看到事物有趣的一面，并笑得开心：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    
                    <li style={{marginTop:10}}>我欣然期待未来的一切：</li>
                        <ul style={{listStyle:'none',marginTop:10,height:30}}>
                            <li onClick={()=>this.chooses(0)}
                                style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                    <label><input type='radio'/>0分</label>
                            </li>
                            
                            <li onClick={()=>this.chooses(1)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                            <li onClick={()=>this.chooses(2)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                            <li onClick={()=>this.chooses(3)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                        </ul>
                    <li style={{marginTop:10}}>当事情出错时，我会不必要地责备自己：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    <li style={{marginTop:10}}>我无缘无故感到焦虑和担心：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    <li style={{marginTop:10}}>我无缘无故感到害怕和惊慌：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    <li style={{marginTop:10 }}>当很多事情冲着我而来，使我透不过气：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    <li style={{marginTop:10 }}>我很不开心，以至失眠：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    <li style={{marginTop:10 }}>我感到难过和悲伤：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    <li style={{marginTop:10 }}>我不开心到哭：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>
                                <label><input type='radio'/>0分</label>
                         </li>
                        
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                    <li style={{marginTop:10 }}>我想过要伤害自己：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}} onClick={()=>this.lastJump()}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>0分</label></li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>1分</label></li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>2分</label></li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}><label><input type='radio'/>3分</label></li>
                    </ul>
                </ol>
                <div style={{marginTop:10,width:'70%',margin:'auto',backgroundColor:'pink',fontSize:16}}>
                    {this.state.showResult}
                    {/* 测试总分为：{this.state.sum},根据测试结果判断，{str} */}
                </div>
                
            </div>
        )
    }
}
export default withRouter(Tests)