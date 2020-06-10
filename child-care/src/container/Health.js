import React, { Component } from 'react'
import {WingBlank ,Grid,Flex,List,NavBar,Icon} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import ShowBottom from './ShowBottom'
const chanqian=['产前锻炼','产前抑郁','产前焦虑','产前饮食'];
const chanhou=['产后锻炼','产后抑郁','产后焦虑','产后饮食'];
const data1=Array.from(chanqian.map((_val,i)=>({
    text: chanqian[i],
    id:`chanqian${i}`
})));
const data2=Array.from(chanhou.map((_val,i)=>({
    text: chanhou[i],
})));
class Health extends Component {
//     路由跳转产前相关页面
    before=(id)=>{
        var paths="/health/before/";
        if(id==0){
            this.props.history.push(paths+"exercise")
        }else if(id==1){
            this.props.history.push(paths+"yiyu")
        }else if(id==2){
            this.props.history.push(paths+"anxiety")
        }else{
            this.props.history.push(paths+"food")
        }
    }
//     路由跳转产后相关页面
    after=(id)=>{
        var paths="/health/after/";
        if(id==0){
            this.props.history.push(paths+"exercise")
        }else if(id==1){
            this.props.history.push(paths+"yiyu")
        }else if(id==2){
            this.props.history.push(paths+"anxiety")
        }else{
            this.props.history.push(paths+"food")
        }
    }
//     跳转至爱丁堡相关测试页
    jump=()=>{
        this.props.history.push('/health/test')
    }
    render() {
        return (
            <div>
               <ShowBottom/>
                <NavBar
                        style={{backgroundColor:'#fff',color:'#000',
                        fontWeight:"bolder",
                        position:"fixed",zIndex:100,width:"100%",top:0
                    }}
                    >
                        宝妈健康
                </NavBar> 
                <div style={{marginTop:40}}>
                    <div >
                        <div>
                            <List style={{marginTop:"40px"}}>
                                <List.Item
                                    arrow="horizontal"
                                    multipleLine
                                    wrap={true}
                                    onClick={()=>this.jump()}
                                >
                                    <img src='/images/body_recovery.jpg'
                                    style={{width:'70%',height:'50%',float:'left',paddingLeft:'15%'}}/>
                                    <span style={{float:'left'}}>
                                        爱丁堡产后抑郁量表( EPDS)是应用广泛的自评量表，包括10项内容，根据症状的严重度， 每项内容分4级评分(0 ，1 ，2 ，3分)，于产后6 周进行，完成量表评定约需5分钟。</span>
                                </List.Item>
                            </List>
                        </div>
                        <div className="sub-title">产前事项</div>
                        <div style={{backgroundColor:'#fff',width:'100%',height:180}}>
                        {
                            chanqian.map((item,idx)=>
                                <div 
                                onClick={()=>this.before(idx)}
                                style={{
                                    backgroundColor:'pink',
                                    margin:10,
                                    float:'left',
                                    height:70,
                                    width:'46.5%',
                                    textAlign:'center',
                                    fontSize:18,
                                    lineHeight:'4em'
                                    }}>
                                    {item}
                                </div>
                            )
                        }
                        </div>
                    
                    </div>
                    <div>
                        <div className="sub-title">产后事项</div>
                            <div style={{backgroundColor:'#fff',width:'100%',height:180}}>
                            {
                                chanhou.map((item,idx)=>
                                    <div 
                                    onClick={()=>this.after(idx)}
                                    style={{
                                        backgroundColor:'pink',
                                        margin:10,
                                        float:'left',
                                        height:70,
                                        width:'46.5%',
                                        textAlign:'center',
                                        fontSize:18,
                                        lineHeight:'4em'
                                        }}>
                                        {item}
                                    </div>
                                )
                            }
                            </div>
                    

                        {/* <Grid data={data2}  square={false} hasLine={false} 
                        columnNum={2}  itemStyle={{backgroundColor:'pink',margin:10}}/> */}
                    </div>
                </div>
                
                <div>
                    <div className="sub-title">小事不小看</div>
                    <div>
                        <Flex style={{backgroundColor:"#fff",border:'1px rgb(255,235,235) solid',borderLeft:'none',borderRight:'none'}}>
                            <img src="/images/body_recovery.jpg" alt="身材恢复" style={{width:'25%',marginLeft:'2%',marginRight:'3%',float:'left'}}/>
                            <div>
                                <h3 style={{lineHeight:'1.3em'}}>有98%的孕妇在妊娠晚期会产生焦虑心理。焦虑还可引起植物神经紊乱，导致产时宫缩无力造成难产。
                                    由于焦虑，得不到充分的休息和营养，生产时会造成滞产。</h3>
                            </div>
                        </Flex>
                    </div>                  
                </div>
                <div style={{marginTop:40}}>

                </div>
            </div>
        )
    }
}
export default withRouter(Health);
