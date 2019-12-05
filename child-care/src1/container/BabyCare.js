import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Drawer,List } from 'antd-mobile';
import Disease from './Disease'
import Inoculation from './Inoculation'


const sidebar = (<List>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {

      return (<List.Item key={index}
      >常见疾病</List.Item>);
    })}
  </List>);
  const open=true;
export default class AppHome extends Component {
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    constructor(){
        super();
        this.state={
            tabs : [
                // { title: <div>
                //     <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>宝宝护理</NavBar>
                //     <Drawer
                //     //   className="my-drawer"
                //     //   style={{ minHeight: document.documentElement.clientHeight }}
                //     style={{
                //         position: 'relative',
                //         overflow: 'auto',
                //         // -webkit-overflow-scrolling: 'touch'
                //       }}
                //     //   enableDragHandle
                //     //   contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                //       sidebar={sidebar}
                //       open={open}
                //       onOpenChange={this.onOpenChange}
                //     >
                //       <Disease/>
                //     </Drawer>
                //   </div>
                // },
                {title:'常见疾病'},
                { title: '疫苗接种' }
                
            ]
        }
    }
    render() {
        return (
            <div>
                    <div style={{
                        textAlign:'center',
                        fontSize:'20px',
                        marginTop:'2%',
                        position:"fixed",
                        top:"0px",
                        zIndex:100,
                        width:"100%"
                    }}>
                        宝宝护理
                    </div>
                    <div style={{marginTop:'5%'}}>
                        <Tabs tabs={this.state.tabs}
                        initialPage={0}
                        noRenderContent={false}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        style={{
                            position:'fixed',
                            zIndex:100,
                            height:'10%'
                        }}
                        >
                            <div >
                                <Disease/>
                            </div>
                            <div>
                                <Inoculation/>
                            </div>
                                
                        </Tabs>
                </div> 
            </div>
        )
    }
}
