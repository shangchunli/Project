import Sui from './Sui';
import Tie from './Tie';
import React, { Component } from 'react'
import './sui.css';
import {NavBar,Tabs} from "antd-mobile"

const tabs = [
    { title: '帖子' },
    { title: '随想' },
  ];

// console.log(tabs.reverse());

export default class Jia extends Component {
    
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#fff',color:'#000',
                    height:60,fontWeight:"bolder",
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    发表
                </NavBar>

                <div style={{marginTop:60}}>
                    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
                        <Tie/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
                        <Sui/>
                    </div>
                    </Tabs>
                </div>
            </div>
      
        )
    }
}
