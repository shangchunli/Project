import React, { Component } from 'react'
import { NavBar,List ,Icon} from 'antd-mobile';

export default class Anxiety extends Component {
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" onClick={this.goBack}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                        style={{backgroundColor:'#fff',color:'#000'}}
                        
                    >
                        焦虑
                </NavBar>
                
                <div style={{marginTop:10,height:600
                ,width:"100%",
                    }}>
                    <List>
                        <List.Item style={{paddingTop:10,
                            color:"#000"}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                焦虑症产生原因和危害
                                <List.Item.Brief style={{color:"#000"}}>
                                导致人们患上产后焦虑症的原因有很多种...</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                产后焦虑症症状
                                <List.Item.Brief style={{color:"#000"}}>
                                第一：在身体上面产后的妈妈也会异常疲劳或虚...
                                </List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                调节方法
                               <List.Item.Brief style={{color:"#000"}}
                               >1、树立信心。要明白作为母亲的不可推卸的职责，也应深刻体会自...</List.Item.Brief> 

                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                               注意事项
                                <List.Item.Brief style={{color:"#000"}}>
                                首先，患者要加强营养，饮食总宜清淡，忌生冷、辛辣、油腻、不易消</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                治疗方法
                                <List.Item.Brief style={{color:"#000"}}>
                                一、 多结交一些新朋友很多新妈妈由于是初产妇，所以在育儿方面基本上没有什么经</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                预防方法
                                <List.Item.Brief style={{color:"#000"}}>
                                首先，在怀孕前就要做好生理及心理两方面的准备。学习妊娠和分娩的</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}} onClick={()=>{console.log("11")}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                预防方法
                                <List.Item.Brief style={{color:"#000"}}>
                                首先，在怀孕前就要做好生理及心理两方面的准备。学习妊娠和分娩的</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                </div>

            </div>
        )
    }
}
