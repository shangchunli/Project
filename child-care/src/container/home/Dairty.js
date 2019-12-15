import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile';
export default class Dairty extends Component {
   constructor(){
        super();
        this.state={
            data:''
        } 
    }
    goBack=()=>{
        window.history.go(-1);
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        // fetch('http://192.168.43.217:5001/')
        // .then(res=>res.json())
        // .then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         data:res
        //     });
            
        // })
    }
    render() {
        return (
            <div>
                <NavBar
                 icon={<Icon type="left" onClick={this.goBack}/>}
                    style={{backgroundColor:'#fff',
                    color:'#000',
                    position:"fixed",
                    top:"0px",
                    zIndex:100,
                    width:"100%"
                }}
                >
                    详情页
                </NavBar>
                <div>
                    111111111111111111
                </div>
                {/* <div>
                
                    {
                        (this.state.data||[]).map(item=>
                            <div style={{marginTop:50}}>
                               <p>11111111111</p>
                            </div>
                        )
                    }
                </div> */}
            </div>
        )
    }
}
