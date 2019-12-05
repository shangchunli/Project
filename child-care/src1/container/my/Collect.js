import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WingBlank, WhiteSpace,
    Flex,List} from 'antd-mobile';
    import './collect.css'
    const tabs = [
        { title: '护理' },
        { title: '健康' },
        { title: '穿搭' },
        { title: '教育' }
      ];
export default class Collect extends Component {
    goBack=()=>{
        window.history.go(-1);
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
                    我的收藏
                </NavBar>
                <WhiteSpace />
                <div style={{marginTop:60,position:'fixed'
                ,width:"100%"}}>
                    <Tabs tabs={tabs} initialPage={2} 
                    animated={false} useOnPan={false}>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px',width:"100%" }}>
                             <List className="my-list">
                                <List.Item multipleLine>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                        <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px' ,width:"100%"}}>
                             <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px' ,width:"100%"}}>
                             <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            
                        </div>
                        <div style={{  alignItems: 'center', justifyContent: 'center', 
                        height: '700px' ,width:"100%"}}>
                             <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            <List className="my-list">
                                <List.Item multipleLine>
                                <img src="https://s2.ax1x.com/2019/12/04/Q1N84U.jpg
                                    " style={{float:"right",
                                        width:50,height:50}}/>
                                给宝宝吃东西的误区 
                                <List.Item.Brief>丫丫妈妈
                                    <span style={{marginLeft:10}}>11月12日</span>
                                    <span  style={{marginLeft:10}} onClick={()=>{}}>
                                    <img src="https://s2.ax1x.com/2019/12/04/Q1fu7T.png
                                            "/>
                                    </span>
                                </List.Item.Brief>
                                </List.Item>
                            </List>
                            
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
