import React, { Component } from 'react'

import { NavBar,List } from 'antd-mobile';

const Item = List.Item;


export default class Reply extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#fff',
                    color:'#000',position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    身材恢复
                </NavBar>
                <div style={{marginTop:50,height:600
                ,width:"100%",
                    }}>
                    <List>
                        <List.Item style={{paddingTop:10,
                            color:"#000"}}>
                            <img src="./images/touxiang.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                产后瘦身关键期
                                <List.Item.Brief style={{color:"#000"}}>
                                    产后六个月是减重的黄金期</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="./images/shoucang.svg"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="./images/touxiang.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                产后身体出现这4种情况,说明<br/>你的月子没坐好!
                                <List.Item.Brief style={{color:"#000"}}>
                                都说月子坐好了，能让女人脱胎换骨。怎么坐月子，谁照顾月子？
                                </List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="./images/shoucang.svg"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="./images/touxiang.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                妊娠纹怎么办
                               <List.Item.Brief style={{color:"#000"}}
                               >妊娠纹一旦形成，是不可能完全去除的，但是可以随着时间的推移，而逐渐淡化。</List.Item.Brief> 

                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="./images/shoucang.svg"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="./images/touxiang.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                               妊娠纹要长躲不过,三个方法,帮助预防妊娠纹
                                <List.Item.Brief style={{color:"#000"}}>
                                怀孕生娃除了怕胖、身材走样，最怕的就是长妊娠纹了。</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="./images/shoucang.svg"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="./images/touxiang.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                产后身材恢复瑜伽怎么做
                                <List.Item.Brief style={{color:"#000"}}>
                                产后瑜伽能帮助产后妈妈恢复身体，也可以促进血液循环，紧实肌肉，帮助卵巢正常发挥功能。</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="./images/shoucang.svg"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="./images/touxiang.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                产后如何保健
                                <List.Item.Brief style={{color:"#000"}}>
                                如果保健没有做好，产妇以后可能会比身体健康的女性更容易染上妇科病</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="./images/shoucang.svg"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                    <List style={{marginTop:10}} onClick={()=>{console.log("11")}}>
                        <List.Item style={{paddingTop:10}}>
                            <img src="./images/touxiang.jpg" style={{float:"right",
                                width:50,height:70,paddingBottom:10}}/>
                                产后修复体操的做法
                                <List.Item.Brief style={{color:"#000"}}>
                                通过活动和锻炼，可逐步恢复体型，节食虽然操作起来简单，
                                但是对于产妇身体的伤害非常大，严重还会有后遗症</List.Item.Brief>
                            <List.Item.Brief style={{paddingTop:10}}>丫丫妈妈
                                <span style={{marginLeft:10}}>11月12日</span>
                                <span  style={{marginLeft:20}} onClick={()=>{}}>
                                    <img src="./images/shoucang.svg"/>
                                </span>
                            </List.Item.Brief>
                        </List.Item>
                    </List>
                </div>
            </div>
        )
    }
}
