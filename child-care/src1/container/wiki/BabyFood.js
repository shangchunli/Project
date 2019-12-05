import React, { Component } from 'react'
import { Flex, WhiteSpace ,NavBar,Icon} from 'antd-mobile';

export default class BabyFood extends Component {
    handle=()=>{
        window.location.href='/wiki/babyfood/detail';
    }
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
                        宝宝饮食
                </NavBar>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" 
                            style={{width:'100%',height:'160px'}}
                            onClick={this.handle}
                            />
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则?果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                   
                                    <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食时间?果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" 
                            style={{width:'100%',height:'160px'}}
                            onClick={this.handle}
                            />
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食时间?果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                新生婴儿添加辅食的原则？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item >
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食时间？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食原则？果—动物”的...
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                    <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{width:'100%'}}>
                            <img src="https://s2.ax1x.com/2019/12/04/Q1T2bn.jpg" style={{width:'100%',height:'160px'}}/>
                            <p style={{width:'100%'}}>
                                宝宝添加辅食时间？
                                <br/>
                                <span style={{fontSize:'10px',float:'left',marginLeft:'2%',marginTop:'2%'}}>丫丫妈妈</span>
                                <span>
                                <img 
                                    style={{float:'right',marginRight:'2%',height:20,width:20}}
                                    src='https://s2.ax1x.com/2019/12/04/Q1fu7T.png' alt='收藏'/>
                                </span>
                            </p>
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
