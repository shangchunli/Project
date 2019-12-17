import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,Button} from 'antd-mobile';


export default class Picture extends Component {
    constructor(){
        super();
        this.state = {
            data: ['chi', 'er', 'he','mu','she','yan','bi'],
            // imgHeight: 200,
        }
    }
    
    goBack=()=>{
        window.history.go(-1);
    }
    render() {
        return (
            <div >
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
                    识字
                </NavBar>
                
                <WhiteSpace/>
                <Carousel
                    autoplay={false}
                    infinite
                    dots={false}
                    style={{marginTop:60}}
                >
                {this.state.data.map(val => (
                    <div>
                        <img
                            src={"/images/chinese/"+val+".png"}
                            alt={val}
                            style={{ width: '100%', verticalAlign: 'top',height:'400px'}}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            // this.setState({ imgHeight: '300' });
                            }}
                        />

                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Button >{val}</Button>
                    </div>
                ))}
                </Carousel>
                
                </div> 
        )
    }
}
