import React, { Component } from 'react'
import { NavBar,Tabs,Card,Icon} from 'antd-mobile';
import Disease from './Disease'
import Inoculation from './Inoculation'

const tabs = [
    { title: '常见疾病' },
    { title: '疫苗接种' }
  ];

export default class Nurse extends Component {
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
                    宝宝护理
                </NavBar>
                <div style={{marginTop:50}}>
                    <Tabs tabs={tabs} initialPage={1} animated={false} useOnPan={false}
                        // style={{position:"fixed",
                        //     top:"5%",
                        //     zIndex:100,
                        //     width:"100%"
                        // }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <Disease/>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <Inoculation/>
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
