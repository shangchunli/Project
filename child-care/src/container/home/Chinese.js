import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,Button} from 'antd-mobile';


export default class Picture extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
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
                {/* <WhiteSpace /> */}
                    <WingBlank>
                    <Carousel
                            autoplay={false}
                            infinite
                            style={{height:"500px",marginTop:60}}
                            >
                            {["yan","shou","er"].map(val => (
                                <div
                                style={{ display: 'inline-block', width: '100%',height:"500px" }}
                                >
                                <img
                                    src={`images/chinese/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', height:"500px" }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    
                                    // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                              <WhiteSpace />
                                <Button type="primary" inline 
                                    style={{marginTop:'70px', marginLeft:'25%' }}>
                                    inline primary
                                </Button>
                                </div>

                            ))}
                        </Carousel>
                            
                        </WingBlank>
                    
                    <WhiteSpace />
                </div> 
        )
    }
}
