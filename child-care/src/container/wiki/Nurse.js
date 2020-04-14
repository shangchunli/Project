import React, { Component } from 'react'
import { NavBar,Tabs,Card,Icon} from 'antd-mobile';
import Disease from './Disease'
import Inoculation from './Inoculation'
import {withRouter} from 'react-router-dom'
import TuiNa from './TuiNa';

const tabs = [
    { title: '常见疾病' },
    { title: '小儿推拿' },
    { title: '疫苗接种' }
  ];

class Nurse extends Component {
    goBack=()=>{
        this.props.history.go(-1);
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
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <Disease/>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <TuiNa/>
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

export default withRouter(Nurse);