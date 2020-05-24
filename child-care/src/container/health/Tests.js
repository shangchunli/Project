import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
let str;
class Tests extends Component {
    constructor(){
        super();
        this.state={
            // elem_bac:'#fff',
            sum:0
        }
    }
    chooses=(index)=>{
        this.setState({
            // elem_bac:'pink',
            sum:this.state.sum+index
        })
        
    }
    render() {
        return (
            <div>
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
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    
                    <li style={{marginTop:10}}>我欣然期待未来的一切：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10}}>当事情出错时，我会不必要地责备自己：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10}}>我无缘无故感到焦虑和担心：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10}}>我无缘无故感到害怕和惊慌：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10 }}>当很多事情冲着我而来，使我透不过气：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10 }}>我很不开心，以至失眠：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10 }}>我感到难过和悲伤：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10 }}>我不开心到哭：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                    <li style={{marginTop:10 }}>我想过要伤害自己：</li>
                    <ul style={{listStyle:'none',marginTop:10,height:30}}>
                        <li onClick={()=>this.chooses(0)}
                            style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>0分</li>
                        <li onClick={()=>this.chooses(1)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>1分</li>
                        <li onClick={()=>this.chooses(2)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>2分</li>
                        <li onClick={()=>this.chooses(3)}
                        style={{float:'left',marginLeft:'5%',marginTop:10,backgroundColor:this.state.elem_bac}}>3分</li>
                    </ul>
                </ol>
                <div style={{marginTop:10,width:'70%',margin:'auto'}}>
                    测试总分为：{this.state.sum}
                </div>
                
            </div>
        )
    }
}
export default withRouter(Tests)